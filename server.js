const express = require("express");
const morgan = require("morgan");
const PORT = process.env.PORT || 5000;
const path = require("path");
const bookRouter = require("./routers/bookRouter");
const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/books", bookRouter);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

module.exports = app;
