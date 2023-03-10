const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    content: {
      type: String,
    },
    author: {
      type: String,
    },
    comments: {
      type: [String],
    },
  },
  {timestamps: true}
);

const PostMessage = mongoose.model("PostMessage", postSchema);

module.exports = PostMessage;
