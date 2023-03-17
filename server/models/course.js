const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    titleAr: {
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
        descriptionAr: {
          type: String,
        },
      },
    ],
  },
  {timestamps: true}
);

const Product = mongoose.model("Course", productSchema);

module.exports = Product;
