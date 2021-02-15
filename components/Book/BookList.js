import Book from "./Book";

const BookList = ({ books }) => {
  // Check for empty book list
  if (books === null || books === undefined || books.length < 1)
    return (
      <div className="text-center text-gray-800 mt-3 py-3 text-3xl bg-gray-300 bg-opacity-70">
        Library is empty.
      </div>
    );

  // OK
  return (
    <div>
      {books.map((book) => (
        <Book
          book={book}
          links={{ checkout: true, edit: false, delete: false }}
          key={`book-item-${book.isbn}`}
        ></Book>
      ))}
    </div>
  );
};

export default BookList;
