const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    thum: String,
    sections: [
      {
        image: {
          type: String,
        },
        video: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],
    teachers: [
      {
        name: String,
        gender: String,
        bio: String,
      },
    ],
  },
  {timestamps: true}
);

const Product = mongoose.model("Course", productSchema);

module.exports = Product;
