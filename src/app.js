const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require('./db/conn');


const Register = require("./models/registers");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views"); 
const partials_path = path.join(__dirname, "../templates/partials");

// console.log(path.join(__dirname, "../public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'hbs');
app.set('views', template_path);

app.use(express.static(static_path));
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/inner-page", (req, res) => {
    res.render("inner-page");
});
app.get("/portfolio-details", (req, res) => {
    res.render("portfolio-details");
});

// create a new user in our database
app.post("/contact", async (req, res) => {
    try {
        // console.log(req.body.username);
        // res.send(req.body.username);
        
            const registerEmployee = new Register({
                name: req.body.name,
                email: req.body.email,
                subject: req.body.subject,
                message: req.body.message,
               
            })
            const registerd = await registerEmployee.save();
            res.status(201).render("index");
        
    }

    catch (error) {
        res.status(400).send(error);
    }
});

// login check
// app.post("/login", async (req, res) => {
//     try {
//         const email = req.body.email;
//         const password = req.body.password;

//         // console.log(`${email} and password is ${password}`)
//         const useremail = await Register.findOne({ email: email });

//         const isMatch = await bcrypt.compare(password, useremail.password);
//         //   res.send(useremail,password);  // for showing password 
//         //   console.log(useremail);

//         if (isMatch) {  //useremail.password === password
//             res.status(201).render('index');
//         } else {
//             res.send("invalid login details")
//         }

//     } catch (error) {
//         res.status(400).send("Invalid Email")
//     }
// });




// const bcrypt =require("bcryptjs");

// const securePassword =  async (password)=>{
//  const passwordHash = await  bcrypt.hash(password, 10);
//  console.log(passwordHash)
//  const passwordmatch = await  bcrypt.compare(password, passwordHash);
//  console.log(passwordmatch)

// }

// securePassword("rahul")

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})