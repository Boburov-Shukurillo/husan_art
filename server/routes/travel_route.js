const { Router } = require("express");
const {
  getAllTravel,
  getTravelById,
  addNewTravel,
  updateTravel,
  deleteTravel,
} = require("../controller/travel_controller");
const router = Router();

router.get("/", getAllTravel);
router.get("/:id", getTravelById);
router.post("/add", addNewTravel);
router.put("/:id", updateTravel);
router.delete("/:id", deleteTravel);

module.exports = router;
