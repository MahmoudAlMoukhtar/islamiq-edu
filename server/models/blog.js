const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    message: {
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
