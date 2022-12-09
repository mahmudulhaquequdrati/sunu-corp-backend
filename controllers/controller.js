const Data = require("../models/Data");
const User = require("../models/User");

const postAData = async (req, res) => {
  const data = req.body;
  try {
    const newData = new Data(data);
    const result = await newData.save();
    res.status(201).send({
      data: result,
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getDatasWithParams = async (req, res) => {
  try {
    const datas = await Data.find({
      category: req.params.category,
    });
    res.status(200).send({
      data: datas,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

const getAllDatas = async (req, res) => {
  try {
    const datas = await Data.find();
    res.status(200).send({
      data: datas,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

const getASingleData = async (req, res) => {
  try {
    const data = await Data.findById(req.params.id);
    res.status(200).send({
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

const addUser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = new User(user);
    const result = await newUser.save();
    res.status(201).send({
      data: result,
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getAnUser = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.params.email,
    });
    res.status(200).send({
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

const deleteData = async (req, res) => {
  try {
    const data = await Data.findById(req.params.id);
    await data.remove();
    res.status(200).send({
      message: "Data deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

const updateData = async (req, res) => {
  try {
    const info = await Data.findById(req.params.id);

    const newData = {
      ...info._doc,

      status: req.body.status,
    };
    console.log(newData);
    const result = await Data.findByIdAndUpdate(req.params.id, newData, {
      new: true,
    });
    res.status(200).send({
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  postAData,
  getDatasWithParams,
  getASingleData,
  addUser,
  getAnUser,
  getAllDatas,
  deleteData,
  updateData,
};
