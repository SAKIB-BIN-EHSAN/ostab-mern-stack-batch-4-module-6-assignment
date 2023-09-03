const expres = require("express");
const router = require("./src/Routes/api");

app = expres();
app.use("/api", router);

module.exports = app;
