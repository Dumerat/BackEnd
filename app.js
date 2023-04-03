const express = require("express");
const helmet = require("helmet");
// const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const limiter = require("./utils/rate-limiter");
const mongoConnect = require("./utils/connect-DB");
require("dotenv").config();

const userRoutes = require("./routes/user");
const bookRoutes = require("./routes/book");

mongoConnect();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet.contentSecurityPolicy({
  directives: {
    ...helmet.contentSecurityPolicy.getDefaultDirectives(),
    "img-src": ["'self'"]
  }
}));
app.use(limiter)

app.use("/api/auth", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/images", express.static(path.join(__dirname, 'images')));

module.exports = app;