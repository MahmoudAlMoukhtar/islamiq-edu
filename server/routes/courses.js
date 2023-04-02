const express = require("express");
const {
  getCourses,
  createCourse,
  getCourseById,
  updateCourse,
  deleteCourseById,
  deleteSection,
  addSection,
  getSectionCourseById,
  updateSectionById,
} = require("../controller/courses.js");
const authMW = require("../middleware/authMW");
const router = express.Router();
const parser = require("../utils/cloudinary");
router.get("/", getCourses);
router.get("/:id", getCourseById);
router.post("/", parser.single("imageThum"), createCourse);
router.put("/:id", parser.single("images"), updateCourse);
router.delete("/:id", deleteCourseById);
router.patch("/sections/:id", deleteSection);
router.get("/section/:idCourse/:idSection", getSectionCourseById);
router.patch(
  "/section/:idCourse/:idSection",
  parser.single("image"),
  updateSectionById
);
router.post("/addSection/:id", parser.single("image"), addSection);

module.exports = router;
