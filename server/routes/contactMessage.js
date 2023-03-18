const express = require("express");
const router = express.Router();
const {
  getcontactMessage,
  sendContactMessage,
  updateContactMessageById,
  deleteContactMessageById,
  getContactMessageById,
} = require("../controller/contactMessage");
router.get("/", getcontactMessage);
router.get("/:id", getContactMessageById);
router.post("/", sendContactMessage);
router.put("/:id", updateContactMessageById);
router.delete("/:id", deleteContactMessageById);
module.exports = router;
