const express = require("express");
const router = express.Router();
const {
  getTestimonials,
  createTestimoials,
  updateTestimoialsById,
  deleteTestimoialsById,
  getTestimonialsDashboard,
  getTestimonialById,
} = require("../controller/testimoials");
router.get("/", getTestimonials);
router.get("/testminialsDashboard/:id", getTestimonialById);
router.get("/testminialsDashboard", getTestimonialsDashboard);
router.post("/", createTestimoials);
router.put("/:id", updateTestimoialsById);
router.delete("/:id", deleteTestimoialsById);
module.exports = router;
