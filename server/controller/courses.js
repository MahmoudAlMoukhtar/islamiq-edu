const Course = require("../models/course.js");

const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const createCourse = async (req, res) => {
  const {title, titleAr} = req.body;
  try {
    const newCourse = await new Course({
      title,
      titleAr,
      thum: req.file.path,
      sections: [],
    });
    await newCourse.save();
    // console.log(newCourse);
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const addSection = async (req, res) => {
  const {id: _id} = req.params;
  const section = req.body;
  const courseFind = await Course.findById(_id);
  if (req.file) {
    courseFind.sections.push({
      image: req.file.path,
      description: section.description,
      descriptionAr: section.descriptionAr,
      video: section.video,
    });
  } else {
    courseFind.sections.push({
      description: section.description,
      descriptionAr: section.descriptionAr,
      video: section.video,
    });
  }
  try {
    const course = await Course.findByIdAndUpdate(_id, courseFind, {
      new: true,
    });
    // console.log(course);
    res.status(200).json(course);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};
const updateCourse = async (req, res) => {
  const {id: _id} = req.params;
  const updates = req.body;
  let actulUpdate;
  if (req.file) {
    actulUpdate = {
      ...updates,
      thum: req.file.path,
    };
  } else {
    actulUpdate = {
      ...updates,
    };
  }
  try {
    const course = await Course.findByIdAndUpdate(_id, actulUpdate, {
      new: true,
    });
    // console.log(course);
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
const getSectionCourseById = async (req, res) => {
  const {idCourse: _id, idSection} = req.params;
  try {
    const course = await Course.findById(_id);
    const sectionFind = course.sections.find(s => s._id == idSection);
    //console.log(sectionFind);
    res.status(200).json(sectionFind);
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
  console.log(req.body.idSection);
  try {
    const courseDelete = await Course.findById(_id);
    const newSections = courseDelete.sections.filter(
      s => s._id != req.body.idSection
    );
    //console.log(newSections[0]._id);
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
      //console.log(course);
      res.status(200).json(course);
    }
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const updateSectionById = async (req, res) => {
  const {idCourse: _id, idSection} = req.params;
  const updates = req.body;
  // console.log(_id);
  // console.log(idSection);
  // console.log("updates");
  // console.log(updates);

  try {
    const courseFindToUpdate = await Course.findById(_id);
    const newSections = courseFindToUpdate.sections.map(s => {
      console.log(idSection == s._id);
      if (s._id == idSection) {
        if (req.file) {
          return {
            ...updates,
            image: req.file.path,
          };
        } else {
          return {
            ...updates,
          };
        }
      } else {
        //console.log("else");
        return s;
      }
    });
    //console.log(newSections);
    await Course.findByIdAndUpdate(_id, {sections: newSections});
    const section = newSections.find(s => s._id == idSection);
    //console.log(course);
    res.status(200).json(section);
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
  addSection,
  getSectionCourseById,
  updateSectionById,
};
