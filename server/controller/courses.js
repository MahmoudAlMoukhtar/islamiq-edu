const Course = require("../models/course");
const {cloudinary} = require("../utils/cloudinary");

const getCourses = async (req, res) => {
  //console.log("test");
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const createCourse = async (req, res) => {
  const {title, titleAr, sections} = req.body;
  const parseSections = JSON.parse(sections);
  let sectionsHandled = [];
  try {
    if (req.files.length > 1) {
      for (let i = 0; i < parseSections.length; i++) {
        sectionsHandled.push({
          image: req.files[i + 1].path,
          description: parseSections[i].description,
          descriptionAr: parseSections[i].descriptionAr,
          video: parseSections[i].video,
        });
      }
    } else {
      for (let i = 0; i < parseSections.length; i++) {
        sectionsHandled.push({
          description: parseSections[i].description,
          video: parseSections[i].video,
        });
      }
    }

    const newCourse = await new Course({
      title,
      titleAr,
      thum: req.files[0].path,
      sections: sectionsHandled,
    });
    await newCourse.save();
    console.log(newCourse);
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const updateCourse = async (req, res) => {
  const {id: _id} = req.params;
  const updates = req.body;
  const parseSections = JSON.parse(updates.sections);
  let sectionsHandled = [];

  if (req.files.length > 1) {
    for (let i = 0; i < parseSections.length; i++) {
      sectionsHandled.push({
        image: req.files[i + 1].path,
        description: parseSections[i].description,
        video: parseSections[i].video,
      });
    }
  } else {
    for (let i = 0; i < parseSections.length; i++) {
      sectionsHandled.push({
        description: parseSections[i].description,
        video: parseSections[i].video,
      });
    }
  }

  try {
    const course = await Course.findByIdAndUpdate(
      _id,
      {
        title: updates.title,
        thum: req.files[0].path,
        sections: sectionsHandled,
      },
      {
        new: true,
      }
    );
    res.status(200).json(course);
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

const deleteSection = async (req, res) => {
  const {id: _id} = req.params;
  //console.log(req.body);
  try {
    //find({"details.detail_list.count": {$gt: 0}});
    const courseDelete = await Course.findById(_id);
    const newSections = courseDelete.sections.filter(
      s => s._id === req.body.idSection
    );
    if (newSections.length === 0) {
      const course = await Course.findByIdAndDelete(_id);
      res.status(200).json(course);
    } else {
      const course = await Course.findByIdAndUpdate(
        _id,
        {sections: newSections},
        {
          new: true,
        }
      );
      console.log(course);
      res.status(200).json(course);
    }
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
  deleteSection,
};
