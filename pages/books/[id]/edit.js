import BookForm from "../../../components/Book/BookForm";
import Layout from "../../../components/layout/Layout";
import PageTitle from "../../../components/layout/PageTitle";

const EditBook = ({ book }) => {
  let mainContent = <></>;
  if (!book || book === undefined) {
    mainContent = (
      <p className="text-center mx-auto py-2 mb-2 text-2xl bg-gray-800 text-white bg-opacity-80 rounded-lg w-3/4">
        Couldn't find that book. Maybe someone else already deleted it.
      </p>
    );
  } else mainContent = <BookForm book={book}></BookForm>;
  return (
    <Layout>
      <>
        <PageTitle text="Edit Book" />
        {mainContent}
      </>
    </Layout>
  );
};

EditBook.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${process.env.BASE_URL}/api/books/${id}`);
  const { data } = await res.json();

  return { book: data };
};

export default EditBook;
