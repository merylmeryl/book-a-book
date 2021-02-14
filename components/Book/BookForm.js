import { useState } from "react";
import { useRouter } from "next/router";
import PopDiv from "../animation/PopDiv";
import createBook from "../../data/createBook";
import updateBook from "../../data/updateBook";
import {
  TITLE_NUM_CHARS,
  AUTHOR_NUM_CHARS,
  DESCRIPTION_NUM_CHARS,
  ISBN_MIN_VAL,
  ISBN_MAX_VAL,
} from "../../utils/constants";

const BookForm = ({ book }) => {
  const router = useRouter();

  // CREATE
  let workingBook = {
    title: "",
    author: "",
    description: "",
    isbn: "",
  };
  // EDIT
  if (book !== null && book !== undefined) {
    workingBook = { ...book };
  }

  const [form, setForm] = useState({ ...workingBook });
  const [errors, setErrors] = useState({});

  // Validation Rules
  const validate = () => {
    let error = {};
    if (!form.title) {
      error.title = "Title is required";
    } else if (form.title.length > TITLE_NUM_CHARS) {
      error.title = `Title cannot have more than ${TITLE_NUM_CHARS} characters`;
    }
    if (!form.author) {
      error.author = "Author is required";
    } else if (form.author.length > AUTHOR_NUM_CHARS) {
      error.author = `Author cannot have more than ${AUTHOR_NUM_CHARS} characters`;
    }
    if (!form.description) {
      error.description = "Description is required";
    } else if (form.description.length > DESCRIPTION_NUM_CHARS) {
      error.description = `Description cannot have more than ${DESCRIPTION_NUM_CHARS} characters`;
    }
    if (!form.isbn) {
      error.isbn = `ISBN is required and must be a number between ${ISBN_MIN_VAL} and ${ISBN_MAX_VAL}`;
    } else if (
      parseInt(form.isbn) === NaN ||
      form.isbn < ISBN_MIN_VAL ||
      form.isbn > ISBN_MAX_VAL
    )
      error.isbn = `ISBN must be between ${ISBN_MIN_VAL} and ${ISBN_MAX_VAL}`;

    return error;
  };

  // Submit the form and CREATE or UPDATE
  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validate();
    setErrors(errors);

    // Check for errors
    if (Object.keys(errors).length === 0) {
      if (book !== null && book !== undefined)
        // UPDATE
        updateBook(form, () => {
          router.push("/");
        });
      // CREATE
      else
        createBook(form, () => {
          router.push("/");
        });
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PopDiv>
      <div className="container mx-auto flex flex-col space-y-4 md:max-w-xl">
        <input
          type="text"
          name="title"
          value={form.title}
          className="flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
          placeholder="Title"
          onChange={handleChange}
        />
        <p className="text-red-500 m-h-3">{errors.title}</p>
        <input
          type="text"
          name="author"
          value={form.author}
          className="flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
          placeholder="Author"
          onChange={handleChange}
        />
        <p className="text-red-500 m-h-3">{errors.author}</p>
        <textarea
          name="description"
          value={form.description}
          className="flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
          placeholder="Description"
          onChange={handleChange}
        ></textarea>
        <p className="text-red-500 m-h-3">{errors.description}</p>
        <input
          type="number"
          name="isbn"
          min="1000000000000"
          max="9999999999999"
          value={form.isbn}
          className="flex-1 appearance-none border border-transparent w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
          placeholder="ISBN"
          onChange={handleChange}
        />
        <p className="text-red-500 m-h-3">{errors.isbn}</p>
        <a
          onClick={handleSubmit}
          className="cursor-pointer text-center bg-gray-200 text-green text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200"
        >
          Save
        </a>
      </div>
    </PopDiv>
  );
};

export default BookForm;
