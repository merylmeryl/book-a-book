import BookHistoryItem from "./BookHistoryItem";

const BookHistoryList = ({ books }) => {
  // Check for empty book list
  if (books === null || books === undefined || books.length < 1)
    return <div className="text-center">Library is empty.</div>;

  // OK
  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <p className="text-center text-gray-700 my-3 md:hidden">
        &larr; Scroll &rarr;
      </p>
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Title
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Author
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Description
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              ISBN
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              State
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="text-sm font-normal text-gray-700">
          {books.map((book, index) => (
            <BookHistoryItem
              book={book}
              key={`book-item-${book.isbn}-${index}`}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookHistoryList;
