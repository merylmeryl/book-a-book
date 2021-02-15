import dbConnect from "../../../../utils/dbConnect";
import Book from "../../../../models/Book";

dbConnect();

export default async (req, res) => {
  // res.status(404).json({ message: "404: This page could not be found." });
  const { method } = req;

  // GET all books
  switch (method) {
    case "GET":
      try {
        const books = await Book.find({});
        books.forEach((book) => {
          book.history = [];
          book.history.push({ state: "NEW", actionDate: book.createdAt });
          book.save();
        });

        res
          .status(200)
          .json({ success: true, data: books, count: books.length });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res
        .status(400)
        .json({ success: false, message: "Something went wrong." });
      break;
  }
};
