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

const addSection = async (req, res) => {
  const {idCourse, description} = req.body;
  //console.log(sections);

  try {
    const course = await Course.findById(idCourse);
    const newCourse = await new Course.findByIdAndUpdate(
      idCourse,
      {
        titel: course.title,
        sections: [...course.sections, {image: req.file.path, description}],
        teachers: course.teachers,
      },
      {
        new: true,
      }
    );
    await newCourse.save();
    console.log(newCourse);
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};
const createCourse = async (req, res) => {
  const {title, sections, teachers} = req.body;

  const parseSections = JSON.parse(sections);
  let sectionsHandled = [];
  try {
    for (let i = 0; i < parseSections.length; i++) {
      sectionsHandled.push({
        image: req.files[i].path,
        description: parseSections[i].description,
      });
    }
    // console.log("sectionsHandled");
    // console.log(sectionsHandled);

    const newCourse = await new Course({
      title,
      sections: sectionsHandled,
      teachers: JSON.parse(teachers),
    });
    await newCourse.save();
    //console.log(newCourse);
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
  addSection,
};
