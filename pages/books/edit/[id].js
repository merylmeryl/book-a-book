import BookForm from "../../../components/Book/BookForm";
import Layout from "../../../components/layout/Layout";
import PageTitle from "../../../components/layout/PageTitle";

const EditBook = ({ book }) => {
  return (
    <Layout>
      <>
        <PageTitle text="Edit Book" />
        <BookForm book={book}></BookForm>
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
