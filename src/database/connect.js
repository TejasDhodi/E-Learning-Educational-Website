const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config({path: "./.env"})

const DB = process.env.MONGO_URL
mongoose.connect( DB
).then(() => {
    console.log("connection Established");
});

