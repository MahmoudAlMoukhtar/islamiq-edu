const {default: mongoose} = require("mongoose");
const Comment = require("../models/Comment");
const User = require("../models/User");

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    //let commentsUserData = [];
    // for (let i = 0; i < comments.length; i++) {
    //   const commentUserData = await User.findById(comments[i].idUser);
    //   console.log(commentUserData);
    //   commentsUserData.push({
    //     ...commentUserData._doc,
    //     _id: comments[i]._id,
    //     idUser: comments[i].idUser,
    //     idParent: comments[i].idParent,
    //     message: comments[i].message,
    //   });
    // }
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
  //console.log(req.body);
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
  //console.log(_id);
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).send("No Comment with that id");
  }
  try {
    const deletedComment = await Comment.findByIdAndRemove(_id);
    //console.log(deletComment);
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
