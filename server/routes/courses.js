const express = require("express");
const {
  getCourses,
  createCourse,
  getCourseById,
  updateCourse,
  deleteCourseById,
} = require("../controller/courses.js");
const authMW = require("../middleware/authMW");
const router = express.Router();

router.get("/", getCourses);
router.get("/:id", getCourseById);
router.post("/", createCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourseById);

// router.Product("/", authMW,createProduct)
// router.patch("/:id", authMW,updateProduct)
// router.patch("/:id/likeProduct", authMW,likeProduct)
// router.delete("/:id", authMW,deletProduct)

module.exports = router;
