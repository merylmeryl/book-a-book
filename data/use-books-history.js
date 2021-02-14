import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

// Get books from API
export default function useBooksHistory() {
  let books = [];
  let count = 0;

  const { data, error } = useSWR("/api/books/historyReport", fetcher, {
    refreshInterval: 1000,
  });

  if (data !== null && data !== undefined) {
    books = data.data;
    count = data.count;
  }

  const loading = !data && !error;
  return {
    loading,
    error,
    books,
    count,
  };
}
