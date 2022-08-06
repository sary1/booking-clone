import mongoose from "mongoose";
const PropertSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    manager: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    pics: {
      type: [String],
    },
    reviews: {
      type: [String],
    },
    score: {
      type: Number,
      default: 10,
    },
    rooms: {
      type: [Number],
      required: true,
    },
    desc: {
      type: String,
    },
    highlights: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["Hotel", "Hostel", "Resort", "Villa", "Cabin", "Apartment"],
      required: true,
    },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", PropertSchema);

export default Property;
