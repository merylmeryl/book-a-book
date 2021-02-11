import booksJson from "../../../data/booksJson";

export default (req, res) => {
  res.status(200).json(booksJson.books);
};
