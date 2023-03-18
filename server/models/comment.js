const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    idUser: {
      type: String,
    },
    idParent: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  {timestamps: true}
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
