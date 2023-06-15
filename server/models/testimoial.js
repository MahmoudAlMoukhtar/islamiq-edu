const mongoose = require("mongoose");

const testimoialSchema = mongoose.Schema(
  {
    idUser: {
      type: String,
      ref: "User",
    },
    message: {
      type: String,
      required: true,
    },
    display: {
      type: Boolean,
      default: false,
    },
  },
  {timestamps: true}
);

const Testimoial = mongoose.model("Testimoial", testimoialSchema);

module.exports = Testimoial;
