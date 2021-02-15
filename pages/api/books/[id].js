import dbConnect from "../../../utils/dbConnect";
import Book from "../../../models/Book";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const book = await Book.findById(id);
        if (!book) {
          return res
            .status(404)
            .json({ success: false, message: "Book could not be found." });
        }

        res.status(200).json({ success: true, data: book });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const book = await Book.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!book) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: book });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const deletedBook = await Book.findOneAndDelete({ _id: id });

        if (!deletedBook) {
          return res
            .status(404)
            .json({ success: false, message: "That book could not be found." });
        }

        res.status(200).json({ success: true, data: deletedBook });
      } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      return res
        .status(400)
        .json({ success: false, message: "Something went wrong." });
      break;
  }
};
