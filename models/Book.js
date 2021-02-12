const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    unique: false,
    trim: true,
    maxlength: [150, "Title cannot have more than 150 characters"],
  },
  author: {
    type: String,
    required: [true, "Please add an author"],
    unique: false,
    trim: true,
    maxlength: [150, "Author cannot have more than 150 characters"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    unique: false,
    trim: true,
    maxlength: [2000, "Description cannot have more than 500 characters"],
  },
  isbn: {
    type: Number,
    min: 1000000000000,
    max: 9999999999999,
    unique: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  state: {
    type: String,
    enum: ["NEW", "CHECKED IN", "RETURNED"],
    default: "NEW",
  },
  history: [
    {
      state: {
        type: String,
        enum: ["NEW", "CHECKED IN", "RETURNED"],
      },
      actionDate: Date,
    },
  ],
});

module.exports = mongoose.models.Book || mongoose.model("Book", BookSchema);
