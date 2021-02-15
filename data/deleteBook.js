const deleteBook = async (bookId, callback) => {
  if (!bookId) {
    alert("Book ID not found");
    return;
  }
  fetch(`/api/books/${bookId}`, { method: "DELETE" })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      if (res.success) {
        alert("Deleted successfully!");
        callback();
      } else alert(res.message);
    })
    .catch((error) => {
      alert("Error:", error);
      console.log(error);
    });
};

export default deleteBook;
