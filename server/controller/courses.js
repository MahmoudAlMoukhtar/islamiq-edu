const Course = require("../models/course");
const {cloudinary} = require("../utils/cloudinary");

const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const createCourse = async (req, res) => {
  const {title, price, category, description, stock, selectedFile} = req.body;
  try {
    const uploadedCloudniary = await cloudinary.uploader.upload(selectedFile, {
      upload_preset: "ml_default",
    });
    const newCourse = await new Course({
      title,
      price,
      category,
      description,
      stock,
      image: uploadedCloudniary.url,
    });
    await newCourse.save();
    console.log(newCourse);
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const getCourseById = async (req, res) => {
  const {id: _id} = req.params;
  try {
    const course = await Course.findById(_id);
    res.status(200).json(course);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const deleteCourseById = async (req, res) => {
  const {id: _id} = req.params;
  try {
    const course = await Course.findByIdAndDelete(_id);
    res.status(200).json(course);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const updateCourse = async (req, res) => {
  const {id: _id} = req.params;
  const updates = req.body;
  try {
    const uploadedCloudniary = await cloudinary.uploader.upload(updates.image, {
      upload_preset: "ml_default",
    });
    const course = await Course.findByIdAndUpdate(
      _id,
      {...updates, image: uploadedCloudniary.url},
      {
        new: true,
      }
    );
    res.status(200).json(course);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

module.exports = {
  getCourses,
  createCourse,
  getCourseById,
  updateCourse,
  deleteCourseById,
};
