import ButtonCheckout from "./utility/ButtonCheckout";

const Book = ({ book }) => {
  return (
    <div className="mt-6">
      <div className="mx-auto max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl text-gray-700 font-bold hover:underline">
          {book.title}
        </h3>
        <p className="mt-2 text-gray-600">Author: {book.author}</p>

        <p className="mt-2 text-gray-600">Description: {book.description}</p>

        <p className="mt-4 text-gray-500">ISBN: {book.isbn}</p>
        <div className="mt-4">
          <ButtonCheckout />
        </div>
      </div>
    </div>
  );
};

export default Book;
