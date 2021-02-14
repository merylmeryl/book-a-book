import BookForm from "../../components/Book/BookForm";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/layout/PageTitle";

export default function NewBook() {
  return (
    <Layout>
      <>
        <PageTitle text="Create a Book" />
        <BookForm isNew={true} bookId=""></BookForm>
      </>
    </Layout>
  );
}
