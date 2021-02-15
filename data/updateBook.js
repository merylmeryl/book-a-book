export default function updateBook(bookData, callback) {
  fetch(`/api/books/${bookData._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...bookData, isbn: parseInt(bookData.isbn) }),
  })
    .then((response) => response.json())
    .then((res) => {
      if (res.success) {
        alert("Updated successfully!");
        callback();
      } else alert(res.json().message);
    })
    .catch((error) => {
      alert("Error:", error);
    });
}
