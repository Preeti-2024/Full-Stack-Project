const express = require("express"); // import express
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./Routes/auth/auth-router");

//create a database connection -> u can also create a
// separate file for this and then import/  use that file here

mongoose
  .connect(
    "mongodb+srv://preeti2025:preeti2026@cluster0.iorneid.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected")) //Promise
  .catch((error) => console.log(error));

const app = express(); // app is invoking express
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5175", //Client local host link
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
