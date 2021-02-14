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
        for (let i = 0; i < 10000000; i++) {
          const book = await Book.create({
            title: "test",
            author: "test",
            description: "test",
            isbn: 1000000000000 + i,
          });
          book.save();
        }

        res.status(201).json({ success: true });

        res
          .status(200)
          .json({ success: true, data: books, count: books.length });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
