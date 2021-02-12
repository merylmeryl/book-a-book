import Layout from "../components/layout/Layout";
import PageTitle from "../components/layout/PageTitle";
import BookList from "../components/Book/BookList";
import useBooks from "../data/use-books";

export default function Home() {
  // Get books from API
  const { loading, error, books } = useBooks();
  let bookList;

  // Check for errors / loading status
  if (error)
    bookList = (
      <div>
        <main className="text-gray-500 text-center">Failed to load</main>
      </div>
    );
  else if (loading)
    bookList = (
      <div>
        <main className="text-gray-500 text-center">Loading...</main>
      </div>
    );
  else {
    bookList = <BookList books={books} />;
  }
  // OK
  return (
    <Layout>
      <PageTitle text="My Books" />

      <main className="">
        <div className="">{bookList}</div>
      </main>
    </Layout>
  );
}
