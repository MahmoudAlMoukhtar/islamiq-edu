const express = require("express");

const {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deletBlog,
} = require("../controller/blogs");
const parser = require("../utils/cloudinary");

const router = express.Router();

router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.post("/", parser.single("image"), createBlog);
router.put("/:id", parser.single("image"), updateBlog);
router.delete("/:id", deletBlog);

module.exports = router;
