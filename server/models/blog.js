const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    titleAr: {
      type: String,
    },
    image: {
      type: String,
    },
    message: {
      type: String,
    },
    messageAr: {
      type: String,
    },
    comments: {
      type: [String],
    },
  },
  {timestamps: true}
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
