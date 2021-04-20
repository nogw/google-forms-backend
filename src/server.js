"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var express_1 = require("express");
var cors_1 = require("cors");
var user_routes_1 = require("./routes/user.routes");
var mongoose_1 = require("mongoose");
var app = express_1.default();
var mongo_uri = process.env.MONGO_SECRET_URI;
app.use(cors_1.default());
app.use(express_1.default.json());
app.use("/", user_routes_1.default);
mongoose_1.default.connect(mongo_uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
var database = mongoose_1.default.connection;
database.on("error", function () {
    console.error.bind(console, "connection error:");
});
database.once("open", function () {
    console.log("database connect!");
});
app.listen(process.env.PORT || 3000)
