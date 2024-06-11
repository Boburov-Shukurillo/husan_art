const Travel = require("../model/travel_model");

const getAllTravel = async (req, res) => {
  try {
    const travel = await Travel.find();
    res.status(200).json({
      message: "success",
      travel,
    });
  } catch (error) {
    res.send(error);
  }
};

const getTravelById = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);

    if (!travel) {
      return res.status(404).json({
        message: "Not Found",
      });
    }

    return res.status(200).json({
      message: "seucces",
      travel,
    });
  } catch (error) {
    res.send(error);
  }
};

const addNewTravel = async (req, res) => {
  try {
    const { title, img, desc, rating, creted_data } = req.body;

    const newTravel = await Travel.create({
      title,
      img,
      desc,
      rating,
      creted_data,
    });
    res.status(201).json({
      message: "success",
      newTravel,
    });
  } catch (error) {
    res.send(error);
  }
};

const updateTravel = async (req, res) => {
  try {
    const { title, img, desc, rating, cretede_data } = req.body;

    await Travel.findByIdAndUpdate(req.params.id, {
      title,
      img,
      desc,
      rating,
      cretede_data,
    });

    res.status(200).json({
      message: "update",
    });
  } catch (error) {
    res.send(error);
  }
};

const deleteTravel = async (req, res) => {
  try {
    await Travel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "delted",
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAllTravel,
  getTravelById,
  addNewTravel,
  updateTravel,
  deleteTravel,
};
