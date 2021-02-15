import dbConnect from "../../../utils/dbConnect";
import Book from "../../../models/Book";

dbConnect();

const DEFAULT_PAGE_SIZE = 30;

export default async (req, res) => {
  const { method } = req;

  // GET all books
  switch (method) {
    case "GET":
      try {
        const limit = req.query.limit
          ? parseInt(req.query.limit)
          : DEFAULT_PAGE_SIZE;
        const skip = req.query.skip ? parseInt(req.query.skip) : 0;

        const books = await Book.find({})
          .skip(skip) // Always apply 'skip' before 'limit'
          .limit(limit)
          .sort([["createdAt", -1]]);

        res
          .status(200)
          .json({ success: true, data: books, count: books.length });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    // POST a new book
    case "POST":
      try {
        const duplicateIsbn = await Book.find({ isbn: req.body.isbn });
        if (duplicateIsbn.length > 0)
          return res.status(400).json({
            message: "A book with this ISBN already exists in the library.",
          });

        const book = await Book.create(req.body);

        res.status(201).json({ success: true, data: book });
      } catch (error) {
        if (error.name === "ValidationError") {
          return res.status(400).json({ message: error.message });
        } else if (error.name === "MongoError") {
          return res.status(400).json({ message: "Data error" });
        }
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
