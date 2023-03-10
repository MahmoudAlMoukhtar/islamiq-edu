const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    sections: [
      {
        image: {
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
        type: String,
        description: String,
      },
    ],
  },
  {timestamps: true}
);

const Product = mongoose.model("Course", productSchema);

module.exports = Product;
