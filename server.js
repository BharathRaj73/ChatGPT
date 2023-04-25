const express = require("express");
const morgan = require("morgan"); //HTTP request logger middleware for node.js
const cors = require("cors"); //CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
const bodyParser = require("body-parser"); //The bodyParser object exposes various factories to create middlewares
const colors = require("colors");
const dotenv = require("dotenv"); //Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorMiddleware");

//routes path
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 8080;

// API Routes
app.use("/api/v1/auth", authRoutes);

//dotenv
dotenv.config();

//mongo connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(errorHandler);

//listen express
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.DEV_MODE} mode on port no ${PORT}`.bgCyan
      .white
  );
});
