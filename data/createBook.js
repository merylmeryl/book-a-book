const createBook = async (bookData, callback) => {
  fetch(`/api/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...bookData, isbn: parseInt(bookData.isbn) }),
  })
    .then((response) => response.json())
    .then((res) => {
      if (res.success) {
        alert("Saved successfully!");
        callback();
      } else alert(res.message);
    })
    .catch((error) => {
      alert("Error:", error);
      console.log(error);
    });
};

export default createBook;
