require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(bodyParser.json());

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error("MongoDB URI is not provided in the .env file.");
  process.exit(1);
}

mongoose
  .connect(mongoUri)
  .then(() => console.log("MongoDB bağlantysy üstünlikli!"))
  .catch((err) => console.error("MongoDB bağlantysynda ýalňyşlyk:", err));

app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  const err = new HttpError("Could not find this route.", 404);
  throw err;
});

app.use((err, req, res, next) => {
  if (res.headerSent) {
    return next(err);
  }
  res.status(err.code || 500).json({
    message: err.message || "An unknown error occurred!",
  });
});

app.listen(5000);
