const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

//routes imported
const transactions = require("./routes/transactions");

const app = express();

//middle wares
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//using routes
app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `server runnung in ${process.env.NODE_ENV} and on port ${PORT}`.yellow.bold
  )
);
