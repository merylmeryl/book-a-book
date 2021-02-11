import Head from "next/head";
import Title from "../components/Title";
import useBooks from "../data/use-books";
import BookList from "../components/BookList";

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
    <div>
      <Title text="My Books" />

      <main className="">
        <div className="">
          <BookList books={books} />
        </div>
      </main>
    </div>
  );
}
