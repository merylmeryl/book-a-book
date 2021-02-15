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
        let limit = parseInt(req.query.limit);
        let page = parseInt(req.query.page);

        if (
          !Number.isInteger(limit) ||
          !Number.isInteger(page) ||
          limit < 1 ||
          page < 1
        ) {
          limit = 10;
          page = 1;
        }

        const allBooks = await Book.find({});
        const bookCount = allBooks.length;
        const books = await Book.find({})
          .skip((page - 1) * limit) // Always apply 'skip' before 'limit'
          .limit(limit)
          .sort([["createdAt", -1]]);

        res.status(200).json({ success: true, data: books, count: bookCount });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
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
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.status(405).json({ success: false, message: "Invalid method" });
      break;
  }
};
