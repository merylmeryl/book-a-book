import { useRouter } from "next/router";

import Layout from "../components/layout/Layout";
import PageTitle from "../components/layout/PageTitle";
import BookTable from "../components/Book/BookTable";
import useBooks from "../data/use-books";
import PopDiv from "../components/animation/PopDiv";
import PaginationLinks from "../components/utility/PaginationLinks";

export default function BookStatusReport() {
  // Get books from API
  const {
    query: { limit, page },
  } = useRouter();
  let itemsPerPage = parseInt(limit);
  let curPage = parseInt(page);

  if (!Number.isInteger(itemsPerPage) || itemsPerPage < 1) itemsPerPage = 10;
  if (!Number.isInteger(curPage) || curPage < 1) curPage = 1;

  // Get books from API
  const { loading, error, books, count } = useBooks(itemsPerPage, curPage);
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
      <PageTitle text="Library Status" />

      <PaginationLinks
        itemsPerPage={itemsPerPage}
        totalItems={count}
        curPage={curPage}
        url={process.env.BASE_URL + "/bookStatusReport"}
      />
      <div>{mainContent}</div>

      <PaginationLinks
        itemsPerPage={itemsPerPage}
        totalItems={count}
        curPage={curPage}
        url={process.env.BASE_URL + "/bookStatusReport"}
      />
    </Layout>
  );
}
