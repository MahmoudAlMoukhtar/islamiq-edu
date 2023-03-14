const express = require("express");
const {
  getCourses,
  createCourse,
  getCourseById,
  updateCourse,
  deleteCourseById,
  deleteSection,
} = require("../controller/courses.js");
const authMW = require("../middleware/authMW");
const router = express.Router();
const parser = require("../utils/cloudinary");
router.get("/", getCourses);
router.get("/:id", getCourseById);
router.post(
  "/",

  parser.array("images"),
  createCourse
);
router.put("/:id", parser.single("image"), updateCourse);
router.delete("/:id", deleteCourseById);
router.patch("/sections/:id", deleteSection);

// router.Product("/", authMW,createProduct)
// router.patch("/:id", authMW,updateProduct)
// router.patch("/:id/likeProduct", authMW,likeProduct)
// router.delete("/:id", authMW,deletProduct)

module.exports = router;
