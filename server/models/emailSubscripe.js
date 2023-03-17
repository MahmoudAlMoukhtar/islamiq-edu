const mongoose = require("mongoose");

const emailSubscripeSchema = mongoose.Schema(
  {
    email: {
      type: String,
    },
  },
  {timestamps: true}
);

const EmailSubscripe = mongoose.model("EmailSubscripe", emailSubscripeSchema);

module.exports = EmailSubscripe;
