const mongoose = require("mongoose");

const testimoialSchema = mongoose.Schema(
  {
    idUser: {
      type: String,
    },
    message: {
      type: String,
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
