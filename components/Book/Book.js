import ButtonCheckout from "../utility/ButtonCheckout";
import PopDiv from "../animation/PopDiv";
import Link from "next/link";

const Book = ({ book }) => {
  const deleteBook = (bookId) => {
    if (!bookId) return;
    fetch(`/api/books/${bookId}`, { method: "DELETE" }).then((res) => {
      if (res.status == 400)
        alert("Something went wrong. Maybe the book had already been deleted.");
      else console.log("Book deleted");
    });
  };
  return (
    <PopDiv>
      <div className="mt-6 mx-auto max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl text-gray-700 font-bold hover:underline">
          {book.title}
        </h3>
        <p className="mt-2 text-gray-600">{book.author}</p>

        <p className="mt-2 text-gray-600 italic">{book.description}</p>

        <p className="mt-4 text-gray-400">ISBN: {book.isbn}</p>
        <div className="mt-4 flex space-x-2">
          <ButtonCheckout
            bookId={book._id}
            available={book.state == "AVAILABLE"}
          />
          <Link href={`/books/edit/${book._id}`}>
            <a className="px-2 py-1 bg-gray-300 font-bold rounded cursor-pointer">
              Edit
            </a>
          </Link>
          <a
            onClick={() => deleteBook(book._id)}
            className="px-2 py-1 bg-gray-300 text-red-500 font-bold rounded cursor-pointer"
          >
            X
          </a>
        </div>
      </div>
    </PopDiv>
  );
};

export default Book;
