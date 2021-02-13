import dbConnect from "../../../utils/dbConnect";
import Book from "../../../models/Book";

dbConnect();

export default async (req, res) => {
  // Killswitch
  res.status(404);

  const { method } = req;

  // GET all books
  switch (method) {
    case "GET":
      try {
        const books = await Book.find({});
        books.forEach((book) => {
          book.update({
            $set: { history: [] },
          });
          book.history.push({ state: "NEW", actionDate: book.createdAt });
          console.log(book);
        });

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
