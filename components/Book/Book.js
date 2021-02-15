import ButtonCheckout from "../utility/ButtonCheckout";
import PopDiv from "../animation/PopDiv";
import Link from "next/link";
import deleteBook from "../../data/deleteBook";
import { useRouter } from "next/router";

const Book = ({
  book,
  links = {
    checkout: true,
    edit: true,
    delete: true,
  },
}) => {
  const router = useRouter();
  return (
    <PopDiv>
      <div className="mt-6 mx-auto max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
        <Link href={`${process.env.BASE_URL}/books/${book._id}`}>
          <a className="text-2xl text-gray-700 font-bold hover:underline">
            {book.title}
          </a>
        </Link>
        <p className="mt-2 text-gray-600">{book.author}</p>

        <p className="mt-2 text-gray-600 italic">{book.description}</p>

        <p className="mt-4 text-gray-400">ISBN: {book.isbn}</p>
        <div className="mt-4 flex space-x-2">
          {links.checkout ? (
            <ButtonCheckout
              bookId={book._id}
              available={book.state == "AVAILABLE"}
            />
          ) : (
            <></>
          )}
          {links.edit ? (
            <Link href={`/books/${book._id}/edit`}>
              <a className="px-2 py-1 bg-gray-300 font-bold rounded cursor-pointer">
                Edit
              </a>
            </Link>
          ) : (
            <></>
          )}
          {links.delete ? (
            <a
              onClick={() =>
                deleteBook(book._id, () => {
                  router.push("/");
                })
              }
              className="px-2 py-1 bg-gray-300 text-red-500 font-bold rounded cursor-pointer"
            >
              X
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </PopDiv>
  );
};

export default Book;
