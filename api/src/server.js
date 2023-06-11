const express = require("express")
const server = express()
const morgan = require("morgan")
const router = require("../src/routes/index")
const cors = require("cors")
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(morgan("dev"))
server.use(cors({
    origin: "*"
}))
server.use("/", router)

module.exports = server;