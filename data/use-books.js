import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

// Get books from API
export default function useBooks(limit, page) {
  let books = [];
  let count = 0;
  const { data, error } = useSWR(
    `/api/books?limit=${limit}&page=${page}`,
    fetcher,
    {
      refreshInterval: 500,
    }
  );

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
