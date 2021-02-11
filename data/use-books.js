import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

// Get books from API
export default function useBooks() {
  const { data, error } = useSWR("/api/books", fetcher, {
    refreshInterval: 1000,
  });

  const loading = !data && !error;
  return {
    loading,
    error,
    books: data,
  };
}
