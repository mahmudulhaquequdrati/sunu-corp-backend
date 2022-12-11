const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    date_of_birth: {
      type: Number,
      required: true,
    },
    place_of_birth: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    year_of_degree: {
      type: Number,
      required: true,
    },
    major_of_degree: {
      type: String,
      required: true,
    },
    reason_for_request: {
      type: String,
      required: true,
    },
    payment_confirmation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
