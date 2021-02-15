import Layout from "../components/layout/Layout";
import PageTitle from "../components/layout/PageTitle";
import BookList from "../components/Book/BookList";
import useBooks from "../data/use-books";
import PopDiv from "../components/animation/PopDiv";
import Link from "next/link";

export default function Home() {
  // Get books from API
  const { loading, error, books, count } = useBooks();
  let mainContent = <></>;

  // Check for errors / loading status
  if (error)
    mainContent = (
      <PopDiv>
        <main className="text-center mx-auto py-2 mb-2 text-2xl bg-gray-800 text-white bg-opacity-80 rounded-lg w-3/4">
          Failed to load -_-
        </main>
      </PopDiv>
    );
  else if (loading)
    mainContent = (
      <PopDiv>
        <main className="text-center mx-auto py-2 mb-2 text-2xl bg-gray-800 text-white bg-opacity-80 rounded-lg w-3/4">
          Loading...
        </main>
      </PopDiv>
    );
  else {
    mainContent = (
      <>
        <div className="flex flex-col justify-between text-center">
          <p className="mx-auto py-2 mb-2 text-2xl bg-gray-800 text-white bg-opacity-80 rounded-lg w-full">
            Book count:{" "}
            <span className="font-bold text-green-500">{count}</span>
          </p>
          <Link href="/books/new">
            <a className=" bg-gray-200 text-green text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200">
              + Create
            </a>
          </Link>
        </div>
        <BookList books={books} />
        <Link href="/?limit=50">
          <a>Let's go</a>
        </Link>
      </>
    );
  }
  // Show Book List
  return (
    <Layout>
      <PageTitle text="All Books" />
      <PopDiv>{mainContent}</PopDiv>
    </Layout>
  );
}
