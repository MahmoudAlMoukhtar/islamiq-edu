const {default: mongoose} = require("mongoose");
const Blog = require("../models/blog");

const getBlogs = async (req, res) => {
  try {
    const blog = await Blog.find();
    res.status(200).json(blog);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const getBlogById = async (req, res) => {
  const {id: _id} = req.params;
  try {
    const blog = await Blog.findById(_id);
    res.status(200).json(blog);
  } catch (err) {
    res.status(400).send({message: err.message});
  }
};

const createBlog = async (req, res) => {
  console.log(req.body);
  const newBlog = new Blog({
    title: req.body.title,
    titleAr: req.body.titleAr,
    message: req.body.message,
    messageAr: req.body.messageAr,
    image: req.file.path,
  });

  try {
    await newBlog.save();
    console.log(newBlog);
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const updateBlog = async (req, res) => {
  const {id: _id} = req.params;
  const updates = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).send("No post with that id");
  }
  let updatesData = updates;
  if (req?.file?.path) {
    updatesData = {
      ...updates,
      image: req.file.path,
    };
  } else {
    updatesData = {
      title: req.body.title,
      titleAr: req.body.titleAr,
      message: req.body.message,
      messageAr: req.body.messageAr,
    };
  }

  try {
    const BlogUpdated = await Blog.findByIdAndUpdate(_id, updatesData, {
      new: true,
    });
    res.status(200).json(BlogUpdated);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const deletBlog = async (req, res) => {
  const {id: _id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).send("No post with that id");
  }
  try {
    const deletedBlog = await Blog.findByIdAndRemove(_id);
    res.status(200).send(deletedBlog);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

module.exports = {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deletBlog,
};
