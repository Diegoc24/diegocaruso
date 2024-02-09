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
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://diegocaruso.vercel.app/'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
server.use("/", router)

module.exports = server;