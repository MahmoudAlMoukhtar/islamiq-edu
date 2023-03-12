const {default: mongoose} = require("mongoose");
const Blog = require("../models/blog");
const {cloudinary} = require("../utils/cloudinary");

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
  //const {title, message, image} = req.body;
  // const uploadedCloudniary = await cloudinary.uploader.upload(image, {
  //   upload_preset: "ml_default",
  // });
  //uploadedCloudniary.url,
  console.log("testcreateblog");
  console.log(req.file.path);
  const newBlog = new Blog({
    title: req.body.title,
    message: req.body.message,
    image: req.file.path,
  });
  //console.log("testcreateblog");
  console.log("crtblog");
  try {
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const updateBlog = async (req, res) => {
  const {id: _id} = req.params;
  const updates = req.body;
  console.log("tset");
  console.log(updates);
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).send("No post with that id");
  }
  let updatesData = updates;
  if (updates.image) {
    const uploadedCloudniary = await cloudinary.uploader.upload(updates.image, {
      upload_preset: "ml_default",
    });
    updatesData = {
      ...updates,
      image: uploadedCloudniary.image,
    };
  } else {
    updatesData = {
      title: updates.title,
      message: updates.message,
    };
  }
  console.log("tset");
  try {
    const BlogUpdated = await Blog.findByIdAndUpdate(_id, updatesData, {
      new: true,
    });
    console.log(BlogUpdated);
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
