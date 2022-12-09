const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.bs66dxc.mongodb.net/sunu-corp`
    );
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
