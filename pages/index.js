import Layout from "../components/layout/Layout";
import PageTitle from "../components/layout/PageTitle";
import BookList from "../components/Book/BookList";
import useBooks from "../data/use-books";
import PopDiv from "../components/animation/PopDiv";

export default function Home() {
  // Get books from API
  const { loading, error, books } = useBooks();
  let bookList;

  // Check for errors / loading status
  if (error)
    bookList = (
      <PopDiv>
        <main className="text-red-500 text-center">Failed to load -_-</main>
      </PopDiv>
    );
  else if (loading)
    bookList = (
      <PopDiv>
        <main className="text-gray-500 text-center">Loading...</main>
      </PopDiv>
    );
  else {
    bookList = <BookList books={books} />;
  }
  // Show Book List
  return (
    <Layout>
      <PageTitle text="My Books" />

      <main>
        <PopDiv>{bookList}</PopDiv>
      </main>
    </Layout>
  );
}
