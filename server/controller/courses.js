const Course = require("../models/course");
const {cloudinary} = require("../utils/cloudinary");

const getCourses = async (req, res) => {
  console.log("test");
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const createCourse = async (req, res) => {
  const {title, sections, teachers} = req.body;
  console.log(sections);
  console.log(title);
  console.log(teachers);
  let sectionsHandled = [];
  try {
    for (let i = 0; i < sections.length; i++) {
      const uploadedCloudniary = await cloudinary.uploader.upload(
        sections[i].image,
        {
          upload_preset: "ml_default",
        }
      );
      sectionsHandled.push({
        image: uploadedCloudniary.url,
        description: sections[i].description,
      });
    }
    console.log(sectionsHandled);

    const newCourse = await new Course({
      title,
      sections: sectionsHandled,
      teachers,
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
