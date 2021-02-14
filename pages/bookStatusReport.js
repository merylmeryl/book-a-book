import Layout from "../components/layout/Layout";
import PageTitle from "../components/layout/PageTitle";
import BookTable from "../components/Book/BookTable";
import useBooks from "../data/use-books";
import PopDiv from "../components/animation/PopDiv";

export default function BookHistoryReport() {
  // Get books from API
  const { loading, error, books } = useBooks();
  let mainContent;

  // Check for errors / loading status
  if (error)
    mainContent = (
      <PopDiv>
        <main className="text-red-500 text-center">Failed to load -_-</main>
      </PopDiv>
    );
  else if (loading)
    mainContent = (
      <PopDiv>
        <main className="text-gray-500 text-center">Loading...</main>
      </PopDiv>
    );
  else {
    mainContent = (
      <BookTable
        books={books}
        emptyMessage="There are no books in the library."
        cols={{
          title: true,
          author: true,
          description: true,
          isbn: true,
          state: true,
          historyState: false,
          historyDate: false,
        }}
      />
    );
  }
  // Show Book List
  return (
    <Layout>
      <PageTitle text="Current Status: All Books" />
      <div>{mainContent}</div>
    </Layout>
  );
}
