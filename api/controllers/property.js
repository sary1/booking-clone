import Property from "../models/Property.js";

export const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    return res.status(200).json({ properties });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const createProperty = async (req, res) => {
  try {
    const property = await Property.create(req.body);
    return res.status(201).json({ property });
  } catch (error) {
    res.status(400).json(error);
  }
};
