import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: [true, "Email is already registered"],
      lowercase: true,
      validate: [validator.isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: [6, "Password can not be less than 6 characters"],
    },
    bookings_num: {
      type: Number,
      default: 0,
    },
    bookings: {
      type: [String],
    },
    reviews: {
      type: [String],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    process.env.JWT_KEY
  );
};

const User = mongoose.model("User", UserSchema);

export default User;
