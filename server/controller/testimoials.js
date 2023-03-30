const Testimoial = require("../models/testimoial");
const User = require("../models/User");

const getTestimoials = async (req, res) => {
  try {
    let testimonialsUsersData = [];
    const testimoials = await Testimoial.find({display: true});
    for (let i = 0; i < testimoials.length; i++) {
      const testimonialUserData = await User.findById(testimoials[i].idUser);
      testimonialsUsersData.push({
        ...testimonialUserData._doc,
        _id: testimoials[i]._id,
        message: testimoials[i].message,
      });
    }
    res.status(200).json(testimonialsUsersData);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};
const getTestimonialById = async (req, res) => {
  const {id: _id} = req.params;
  try {
    const testimoials = await Testimoial.findById(_id);
    const testimonialUserData = await User.findById(testimoials.idUser);
    res.status(200).json({
      ...testimonialUserData._doc,
      _id: testimoials._id,
      message: testimoials.message,
    });
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const getTestimoialsDashboard = async (req, res) => {
  try {
    let testimonialsUsersData = [];
    const testimoials = await Testimoial.find();

    for (let i = 0; i < testimoials.length; i++) {
      const testimonialUserData = await User.findById(testimoials[i].idUser);
      testimonialsUsersData.push({
        ...testimonialUserData._doc,
        _id: testimoials[i]._id,
        message: testimoials[i].message,
        display: testimoials[i].display,
      });
    }
    console.log(testimonialsUsersData);
    res.status(200).json(testimonialsUsersData);
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
    res.status(201).json(newTestimoial);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const updateTestimoialsById = async (req, res) => {
  const {id: _id} = req.params;

  try {
    const testimoialUpdated = await Testimoial.findByIdAndUpdate(
      _id,
      {
        display: req.body.display,
      },
      {
        new: true,
      }
    );
    res.status(200).json(testimoialUpdated);
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
module.exports = {
  getTestimoials,
  createTestimoials,
  updateTestimoialsById,
  deleteTestimoialsById,
  getTestimoialsDashboard,
  getTestimonialById,
};
