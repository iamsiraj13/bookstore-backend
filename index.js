const express = require("express");
const DBConnect = require("./config/dbConnect");
const app = express();
const port = 5000;

// Database Connection
DBConnect();
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
