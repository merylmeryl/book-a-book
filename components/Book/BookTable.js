import BookTableRow from "./BookTableRow";

const BookTable = ({ books, emptyMessage, cols }) => {
  let thClasses =
    "px-5 py-3 border-b-2 border-gray-200 bg-gray-800 text-left text-xs font-semibold text-white uppercase tracking-wider";

  // Check for empty book list
  if (books === null || books === undefined || books.length < 1)
    return (
      <div className=" text-center rounded text-gray-800 mt-3 p-3 text-2xl bg-gray-300 bg-opacity-70">
        {emptyMessage}
      </div>
    );

  // OK
  return (
    <>
      <p className="text-center text-white my-3 md:hidden">
        &larr; Scroll &rarr;
      </p>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              {cols.title ? <th className={thClasses}>Title</th> : <></>}
              {cols.author ? <th className={thClasses}>Author</th> : <></>}
              {cols.description ? (
                <th className={thClasses}>Description</th>
              ) : (
                <></>
              )}
              {cols.isbn ? <th className={thClasses}>ISBN</th> : <></>}
              {cols.state ? <th className={thClasses}>Status</th> : <></>}
              {cols.historyState ? <th className={thClasses}>State</th> : <></>}
              {cols.historyDate ? <th className={thClasses}>Date</th> : <></>}
            </tr>
          </thead>
          <tbody className="text-sm font-normal text-gray-700">
            {books.map((book, index) => (
              <BookTableRow
                book={book}
                cols={cols}
                key={`book-item-${book.isbn}-${index}`}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookTable;
