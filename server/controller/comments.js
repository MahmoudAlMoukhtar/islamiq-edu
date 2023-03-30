const {default: mongoose} = require("mongoose");
const Comment = require("../models/comment");
const User = require("../models/User");

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const getCommentById = async (req, res) => {
  const {id: _id} = req.params;
  try {
    const commentById = await Comment.findById(_id);
    res.status(200).json(commentById);
  } catch (err) {
    res.status(400).send({message: err.message});
  }
};

const createComment = async (req, res) => {
  const commentUserById = await User.findById(req.body.idUser);
  const newComment = new Comment({
    firstName: commentUserById._doc.firstName,
    lastName: commentUserById._doc.lastName,
    idUser: req.body.idUser,
    idParent: req.body.idParent,
    message: req.body.message,
  });

  try {
    await newComment.save();
    console.log(newComment);
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const deletCommentById = async (req, res) => {
  const {id: _id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).send("No Comment with that id");
  }
  try {
    const deletedComment = await Comment.findByIdAndRemove(_id);
    res.status(200).send(deletedComment);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

module.exports = {
  getComments,
  getCommentById,
  createComment,
  deletCommentById,
};
