const express = require("express");

const {
  getComments,
  getCommentById,
  createComment,
  deletCommentById,
} = require("../controller/comments");
const authMW = require("../middleware/authMW");

const router = express.Router();

router.get("/", getComments);
router.get("/:id", getCommentById);
router.post("/", createComment);
router.delete("/:id", deletCommentById);
// router.put("/:id", updateComment);
//router.delete("/:id", authMW, deletComment);

module.exports = router;
