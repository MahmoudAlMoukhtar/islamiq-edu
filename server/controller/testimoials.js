const Testimoial = require("../models/testimoial");

const getTestimoials = async (req, res) => {
  try {
    const testimoials = await Testimoial.find();
    res.status(200).json(testimoials);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const createTestimoials = async (req, res) => {
  const testimoialData = req.body;
  try {
    const newTestimoial = await new Testimoial({
      idUser: testimoialData.idUser,
      message: testimoialData.message,
    });
    await newTestimoial.save();
    //console.log(newTestimoial);
    res.status(201).json(newTestimoial);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const deleteTestimoialsById = async (req, res) => {
  const {id: _id} = req.params;
  try {
    const testimoialDeleted = await Testimoial.findByIdAndDelete(_id);
    res.status(200).json(testimoialDeleted);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};
module.exports = {getTestimoials, createTestimoials, deleteTestimoialsById};
