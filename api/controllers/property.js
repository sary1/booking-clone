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

export const getCityProperties = async (req, res) => {
  try {
    const city = req.query.city;
    const propertiesByCity = await Property.find({ city });

    if (!propertiesByCity)
      return res
        .status(204)
        .json({ response: "Failed", result: "No properties found" });

    return res.send(propertiesByCity);
  } catch (error) {
    res.status(400).json(error);
  }
};
