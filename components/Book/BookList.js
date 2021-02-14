import Book from "./Book";

const BookList = ({ books }) => {
  // Check for empty book list
  if (books === null || books === undefined || books.length < 1)
    return <div className="text-center">Library is empty.</div>;

  // OK
  return (
    <div>
      {books.map((book) => (
        <Book book={book} key={`book-item-${book.isbn}`}></Book>
      ))}
    </div>
  );
};

export default BookList;
