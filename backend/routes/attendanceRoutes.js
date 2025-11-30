const express = require("express");
const router = express.Router();
const {
  checkIn,
  checkOut,
  myHistory
} = require("../controllers/attendanceController");
const auth = require("../middleware/authMiddleware");

router.post("/checkin", auth, checkIn);
router.post("/checkout", auth, checkOut);
router.get("/my-history", auth, myHistory);

module.exports = router;
