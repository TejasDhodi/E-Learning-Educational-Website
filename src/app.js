require('dotenv').config();
const cookieParser = require("cookie-parser")
const express = require("express");
const path = require("path");
const app = express();

const hbs = require("hbs");
require("./database/connect");

const Register = require("./models/userRegistrartionSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

app.use(cookieParser());

const port = process.env.PORT || 3000;

// to use static public folder
const static_path = path.join(__dirname, "../public");

const static_path_javascript = path.join(__dirname, "../public/javascript");

const partialsPath = path.join(__dirname, "../templates/partials");

//to make use of static fles
app.use(express.static(static_path));
app.use(express.static(static_path_javascript));


//to render the user input data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// to render the hbs file to the browser or to set view engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));
hbs.registerPartials(partialsPath)


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/home", (req, res) => {
    res.render("home");
})

app.get("/home/welcomeback", (req, res) => {
    res.render("home");
})


// Registration Form
app.post("/home", async (req, res) => {
    try {

        const password = req.body.password;

        const cPassword = req.body.cPassword;

        if (password === cPassword) {
            const registeredUser = new Register({
                userName: req.body.userName,
                emailId: req.body.emailId,
                password: password,
                cPassword: cPassword
            });

            console.log(`success pars ${registeredUser}`);

            const token = await registeredUser.generateAuthToken();
            console.log(`the token part ${token}`);

            const registered = await registeredUser.save();
            res.status(201).render("home");

        } else {

            alert("password doesnt match");
        }

    } catch (error) {
        res.status(400).send(error)
    }
});



// LogIn Form
app.post("/home/welcomeback", async (req, res) => {

    try {

        const email = req.body.emailId;
        const password = req.body.password;


        const userEmail = await Register.findOne({ emailId: email });

        const isMatch = await bcrypt.compare(password, userEmail.password);

        const token = await userEmail.generateAuthToken();
        console.log(`the login token part ${token}`);


        if (isMatch) {
            res.status(201).render("home2");
        } else {
            res.send("Invalid Credentials")
        }

        // res.send(userEmail);
        // console.log(userEmail);


    } catch (error) {
        res.status(400).send("Invalid Credentials");
    }
});


// Bcrypt Section

/* 
const bcrypt = require("bcryptjs");

const securePassword = async (password) => {
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);

    const passwordMatch = await bcrypt.compare(password, passwordHash);
    console.log(passwordMatch);
}

securePassword("tejas@123");
*/


// const jwt = require("jsonwebtoken");

// const createToken = async() => {
//     const token = await jwt.sign({_id:"64468399d30c23318db02ce9"}, "mynameistejasarundhodiwebdeveloper", {
//         expiresIn: "2 seconds"
//     });

//     const userVerification = await jwt.verify(token, "mynameistejasarundhodiwebdeveloper");
//     console.log(userVerification);
// }

// createToken();




app.listen(port, (req, res) => {
    console.log("Jay Shree Ram");
});