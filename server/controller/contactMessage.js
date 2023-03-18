const ContactMessage = require("../models/contactMessage");

const getcontactMessage = async (req, res) => {
  try {
    const contactMessage = await ContactMessage.find();

    res.status(200).json(contactMessage);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};
const getContactMessageById = async (req, res) => {
  const {id: _id} = req.params;
  console.log(_id);
  try {
    const contactMessage = await ContactMessage.findById(_id);
    //const contactMessages = await User.findById(contactMessage.idUser);
    console.log(contactMessage);
    res.status(200).json(contactMessage);
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

const sendContactMessage = async (req, res) => {
  //console.log(req.body);
  try {
    const newContactMessage = await new ContactMessage({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      message: req.body.message,
    });
    await newContactMessage.save();
    console.log(newContactMessage);
    res.status(201).json(newContactMessage);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const updateContactMessageById = async (req, res) => {
  const {id: _id} = req.params;
  const updates = req.body;
  try {
    const contactMessageUpdated = await ContactMessage.findByIdAndUpdate(
      _id,
      {
        ...updates,
      },
      {
        new: true,
      }
    );
    res.status(200).json(contactMessageUpdated);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};
const deleteContactMessageById = async (req, res) => {
  const {id: _id} = req.params;
  try {
    const contatMessageDeleted = await ContactMessage.findByIdAndDelete(_id);
    res.status(200).json(contatMessageDeleted);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};
module.exports = {
  getcontactMessage,
  sendContactMessage,
  updateContactMessageById,
  deleteContactMessageById,
  getContactMessageById,
};
