const express = require("express");

const {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deletBlog,
} = require("../controller/blogs");
const authMW = require("../middleware/authMW");
const parser = require("../utils/cloudinary");

const router = express.Router();

router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.post("/", parser.single("image"), createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", authMW, deletBlog);

module.exports = router;
