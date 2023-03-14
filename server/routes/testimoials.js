const express = require("express");
const router = express.Router();
const {
  getTestimoials,
  createTestimoials,
  updateTestimoialsById,
  deleteTestimoialsById,
  getTestimoialsDashboard,
  getTestimonialById,
} = require("../controller/testimoials");
router.get("/", getTestimoials);
router.get("/testminialsDashboard/:id", getTestimonialById);
router.get("/testminialsDashboard", getTestimoialsDashboard);
router.post("/", createTestimoials);
router.put("/:id", updateTestimoialsById);
router.delete("/:id", deleteTestimoialsById);
module.exports = router;
