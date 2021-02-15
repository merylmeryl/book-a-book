import dbConnect from "../../../../utils/dbConnect";
import Book from "../../../../models/Book";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  // Sets state of book to "CHECKED OUT" by default
  // Sets state to "AVAILABLE" if specified
  switch (method) {
    case "GET":
      try {
        const book = await Book.findById(id);
        if (!book) {
          return res
            .status(404)
            .json({ success: false, message: "That book could not be found." });
        }

        let newState = "";
        if (req.query.state === "CHECKED_OUT") newState = "CHECKED OUT";
        else if (req.query.state === "AVAILABLE") newState = "AVAILABLE";
        else
          return res
            .status(400)
            .json({ success: false, message: "Invalid state in query" });

        if (book.state == newState)
          return res.status(400).json({
            success: false,
            message: `State is already set to ${newState}`,
          });

        book.state = newState;
        book.history.push({
          state: newState,
          actionDate: new Date(),
        });
        book.save();

        // const updatedBook = Book.findByIdAndUpdate(id, {
        //   state: newState,
        //   $push: {
        //     history: {
        //       $each: [
        //         {
        //           state: newState,
        //           actionDate: Date.now,
        //         },
        //       ],
        //       $position: 0,
        //     },
        //   },
        // });
        return res.status(201).json({ success: true, data: book });
      } catch (error) {
        if (error.name === "ValidationError") {
          return res
            .status(400)
            .json({ success: false, message: error.message });
        }

        return res
          .status(400)
          .json({ success: false, message: "Something went wrong." });
      }
      break;

    default:
      return res
        .status(400)
        .json({ success: false, message: "Something went wrong." });
      break;
  }
};
