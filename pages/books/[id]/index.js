import Layout from "../../../components/layout/Layout";
import PageTitle from "../../../components/layout/PageTitle";
import Book from "../../../components/Book/Book";
import BookTable from "../../../components/Book/BookTable";
import PopDiv from "../../../components/animation/PopDiv";

const ViewBook = ({ book }) => {
  let mainContent = <></>;

  // Book was not found
  if (!book || book === undefined)
    mainContent = (
      <p className="text-center mx-auto py-2 mb-2 text-2xl bg-gray-800 text-white bg-opacity-80 rounded-lg w-3/4">
        Couldn't find that book.
      </p>
    );
  else {
    // Format history rows for table
    const bookHistory = book.history.map((historyItem) => {
      return {
        history: {
          state: historyItem.state,
          actionDate: historyItem.actionDate,
        },
      };
    });
    // VIEW book
    mainContent = (
      <>
        <Book
          book={book}
          links={{ checkout: false, edit: true, delete: true }}
        />
        <br />
        <PageTitle text="History" />
        {bookHistory !== null &&
        bookHistory !== undefined &&
        bookHistory.length ? (
          <BookTable
            books={bookHistory}
            cols={{
              title: false,
              author: false,
              description: false,
              isbn: false,
              historyState: true,
              historyDate: true,
            }}
          ></BookTable>
        ) : (
          <p className="text-center mx-auto py-2 mb-2 text-2xl bg-gray-800 text-white bg-opacity-80 rounded-lg w-3/4">
            No history for this book.
          </p>
        )}
      </>
    );
  }
  return (
    <>
      <Layout>
        <PageTitle text="View Book" />
        <PopDiv>{mainContent}</PopDiv>
      </Layout>
    </>
  );
};

// Load book before render
ViewBook.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${process.env.BASE_URL}/api/books/${id}`);
  const { data } = await res.json();

  return { book: data };
};

export default ViewBook;
