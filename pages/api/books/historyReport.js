import dbConnect from "../../../utils/dbConnect";
import Book from "../../../models/Book";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  // GET all books
  switch (method) {
    case "GET":
      try {
        const limit = req.query.limit ? parseInt(req.query.limit) : 30;
        const skip = req.query.skip ? parseInt(req.query.skip) : 30;

        const books = await Book.aggregate([
          {
            $unwind: "$history",
          },
          {
            $project: {
              title: 1,
              author: 1,
              isbn: 1,
              description: 1,
              history: {
                state: 1,
                actionDate: 1,
              },
            },
          },
        ]);

        res.status(200).json({ success: true, data: books });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
