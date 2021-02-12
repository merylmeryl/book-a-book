import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

// Get books from API
export default function useBooks() {
  let books = [];

  const { res, error } = useSWR("/api/books", fetcher, {
    refreshInterval: 1000,
  });

  if (res !== null && res !== undefined) {
    books = res.data;
  }

  const loading = !res && !error;
  return {
    loading,
    error,
    books: books,
  };
}
