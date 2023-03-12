const express = require("express");
const router = express.Router();
const {
  getTestimoials,
  createTestimoials,
  deleteTestimoialsById,
} = require("../controller/testimoials");
router.get("/", getTestimoials);
router.post("/", createTestimoials);
router.delete("/:id", deleteTestimoialsById);
module.exports = router;
