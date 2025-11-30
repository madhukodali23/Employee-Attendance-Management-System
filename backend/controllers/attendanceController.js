const Attendance = require("../models/Attendance");
const moment = require("moment");

exports.checkIn = async (req, res) => {
  const userId = req.user.id;
  const date = moment().format("YYYY-MM-DD");

  const existing = await Attendance.findOne({ userId, date });

  if (existing) return res.json({ message: "Already checked in today" });

  const attendance = await Attendance.create({
    userId,
    date,
    checkInTime: moment().format("HH:mm"),
    status: "present"
  });

  res.json(attendance);
};

exports.checkOut = async (req, res) => {
  const userId = req.user.id;
  const date = moment().format("YYYY-MM-DD");

  const record = await Attendance.findOne({ userId, date });

  record.checkOutTime = moment().format("HH:mm");
  record.totalHours = moment(record.checkOutTime, "HH:mm").diff(
    moment(record.checkInTime, "HH:mm"),
    "hours"
  );

  await record.save();

  res.json(record);
};

exports.myHistory = async (req, res) => {
  const userId = req.user.id;
  const history = await Attendance.find({ userId });
  res.json(history);
};
