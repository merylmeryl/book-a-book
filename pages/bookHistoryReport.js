import Layout from "../components/layout/Layout";
import PageTitle from "../components/layout/PageTitle";
import BookHistoryList from "../components/Book/BookHistoryList";
import useBooksHistory from "../data/use-books-history";
import PopDiv from "../components/animation/PopDiv";

export default function BookHistoryReport() {
  // Get books from API
  const { loading, error, books } = useBooksHistory();
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
    mainContent = <BookHistoryList books={books} />;
  }
  // Show Book List
  return (
    <Layout>
      <PageTitle text="History" />
      <div>{mainContent}</div>
    </Layout>
  );
}
