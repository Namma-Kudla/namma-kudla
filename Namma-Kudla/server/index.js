const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require('./models/Employee');
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(cors({
    
    methods: ["POST", "GET"],
    credentials: true
}));

mongoose.connect("mongodb+srv://sushmitham579:maravoors%401@cluster0.00snfhj.mongodb.net/register")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error connecting to MongoDB: ", err));

app.get("/", (req, res) => {
    res.json("Hello");
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const user=EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("Password is incorrect");
                }
            } else {
                res.json("Please Sign Up");
            }
        })
        .catch(err => res.json(err));
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await EmployeeModel.findOne({ email: email });
        if (existingUser) {
            res.status(409).json("Already have an account");
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new EmployeeModel({ name: name, email: email, password: hashedPassword });
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        }
    } catch (err) {
        res.status(500).json("Server error: " + err.message);
    }
});

app.listen(3001, () => {
    console.log("Server is running");
});
