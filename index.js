const express = require("express");
const DBConnect = require("./config/dbConnect");
const cors = require("cors");
const bookRouter = require("./src/books/book.route");
const app = express();
const port = 5000;
require("dotenv").config();

// middleware

app.use(cors());
app.use(express.json());

// Routes

app.use("/api/books", bookRouter);

// Database Connection
DBConnect();

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
