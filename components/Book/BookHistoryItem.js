import parseDate from "../../utils/parseDate";

const BookHistoryItem = ({ book }) => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {book.title}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {book.author}
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {book.description}
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {book.isbn}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {book.history.state}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {parseDate(book.history.actionDate)}
      </td>
    </tr>
  );
};

export default BookHistoryItem;
