import dbConnect from "../../../utils/dbConnect";
import Book from "../../../models/Book";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  // GET all books
  switch (method) {
    case "GET":
      try {
        const books = await Book.find({}).sort([["createdAt", -1]]);

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
        const book = await Book.create(req.body);
        res.status(201).json({ success: true, data: book });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
