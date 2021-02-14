import parseDate from "../../utils/parseDate";

const BookTableRow = ({ book, cols }) => {
  let rowClasses = "px-5 py-5 border-b border-gray-200 bg-yellow-50 text-sm";

  return (
    <tr>
      {cols.title ? <td className={rowClasses}>{book.title}</td> : <></>}
      {cols.author ? <td className={rowClasses}>{book.author}</td> : <></>}

      {cols.description ? (
        <td className={rowClasses}>{book.description}</td>
      ) : (
        <></>
      )}

      {cols.isbn ? <td className={rowClasses}>{book.isbn}</td> : <></>}
      {cols.state ? <td className={rowClasses}>{book.state}</td> : <></>}
      {cols.historyState ? (
        <td className={rowClasses}>{book.history.state}</td>
      ) : (
        <></>
      )}
      {cols.historyDate ? (
        <td className={rowClasses}>{parseDate(book.history.actionDate)}</td>
      ) : (
        <></>
      )}
    </tr>
  );
};

export default BookTableRow;
