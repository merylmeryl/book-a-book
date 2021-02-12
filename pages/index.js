import Layout from "../components/layout/Layout";
import PageTitle from "../components/layout/PageTitle";
import BookList from "../components/Book/BookList";
import useBooks from "../data/use-books";

export default function Home() {
  // Get books from API
  const { loading, error, books } = useBooks();

  // Check for errors / loading status
  if (error)
    return (
      <div>
        <main>Failed to load</main>
      </div>
    );
  if (loading)
    return (
      <div>
        <main>Loading...</main>
      </div>
    );
  // OK
  return (
    <Layout>
      <PageTitle text="My Books" />

      <main className="">
        <div className="">
          <BookList books={books} />
        </div>
      </main>
    </Layout>
  );
}
