const mongoose = require("mongoose");

const testimoialSchema = mongoose.Schema(
  {
    idUser: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  {timestamps: true}
);

const Testimoial = mongoose.model("Testimoial", testimoialSchema);

module.exports = Testimoial;
