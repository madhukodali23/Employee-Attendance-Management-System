const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const cors = require("cors");

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://employee-attendance-management-syst-mu.vercel.app"
  ],
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type, Authorization"
}));


app.use(express.json());

const connectDB = require("./config/db");
connectDB();

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));

app.listen(process.env.PORT, () =>
  console.log("Server running on port " + process.env.PORT)
);
