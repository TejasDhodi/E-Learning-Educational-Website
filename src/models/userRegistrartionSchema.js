require('dotenv').config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registeredUser = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required:true,
    },
    cPassword: {
        type: String,
        required:true,
    },
    tokens: [{
        token: {
            type: String,
            required:true,
        }
    }]


})

// Generating Tokens
registeredUser.methods.generateAuthToken = async function() {
    try {
        console.log(this.id);
        const token = jwt.sign({_id:this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token}); // {token} 
        await this.save();
        return token
    } catch (error) {
        res.send(`error part ${error}`);
        console.log(`error part ${error}`);

    }
}




// Generating hash password
registeredUser.pre("save", async function (next) {
    if (this.isModified("password")) {
        console.log(`password is ${this.password}`);
        this.password = await bcrypt.hash(this.password, 10);
        this.cPassword = await bcrypt.hash(this.password, 10);
        console.log(`hashed password is ${this.password}`);

        // this.cPassword = undefined;
    }
})

// Creating collection

const Register = new mongoose.model("Register", registeredUser);

module.exports = Register;