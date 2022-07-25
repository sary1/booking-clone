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
    const cities = req.query.cities.split(",");

    const propertiesNum = await Promise.all(
      cities.map((city) => {
        return Property.countDocuments({ city });
      })
    );

    const propertiesByCity = {};
    cities.forEach((city, index) => {
      propertiesByCity[index] = [city, propertiesNum[index]];
    });

    return res.status(200).json({ propertiesByCity });
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getTypeProperties = async (req, res) => {
  const hotels = await Property.countDocuments({ type: "Hotel" });
  const apartments = await Property.countDocuments({ type: "Apartment" });
  const resorts = await Property.countDocuments({ type: "Resort" });
  const villas = await Property.countDocuments({ type: "Villa" });
  const hostels = await Property.countDocuments({ type: "Hostel" });

  const properties = {
    hotels,
    apartments,
    resorts,
    villas,
    hostels,
  };
  res.status(200).json(properties);
};

export const getScoreProperties = async (req, res) => {
  const properties = await Property.find().sort({ score: -1 }).limit(4);
  res.status(200).json(properties);
};
