import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

// Get books from API
export default function useBooks() {
  let books = [];

  const { data, error } = useSWR("/api/books", fetcher, {
    refreshInterval: 1000,
  });

  if (data !== null && data !== undefined) {
    books = data.data;
  }

  const loading = !data && !error;
  return {
    loading,
    error,
    books: books,
  };
}
