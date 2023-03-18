const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    message: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  {timestamps: true}
);

const ContactMessage = mongoose.model("ContactMessage", contactSchema);

module.exports = ContactMessage;
