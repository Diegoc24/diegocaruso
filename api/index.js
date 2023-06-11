const server = require("./src/server")
const sequelize = require("./src/db")
require("dotenv").config()

const contact = require("./src/model/userContact")
const {PORT} = process.env;



sequelize.sync({force: false}).then(
    server.listen(PORT, ()=>{
        console.log(`listening in port ${PORT}`);
    })
)
