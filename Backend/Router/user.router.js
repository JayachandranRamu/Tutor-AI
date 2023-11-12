const express = require("express");
const { UserModel } = require("../Model/user.model");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ListModel } = require("../Model/list.model");
const { auth } = require("../Middlewares/auth.middleware")

userRouter.post("/register", async (req, res) => {
    const { name, email, gender, password, avatar } = req.body;
    const user = await UserModel.findOne({ email });
    try {
        if (user) {
            res.status(200).send({ "message": "User is already present, please login." })
        }
        else {
            bcrypt.hash(password, 5, async (err, hash) => {
                if (hash) {
                    const user = new UserModel({
                        name, email, gender, password: hash, avatar
                    })
                    await user.save();
                    res.status(200).send({ "message": "User is registered.", "user": user })
                }
                else {
                    res.status(201).send({ "message": "Something went wrong while hashing", "err": err })
                }
            })
        }
    } catch (error) {
        res.status(400).send({ "message": "Something went wrong", "err": error })
    }
})

userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email })
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ username: user.name, userId: user._Id }, "users", { expiresIn: "7d" });
                    res.status(200).send({ "message": "Successfully logged in", "token": token });
                }
                else {
                    res.status(201).send({ "message": "Something went wrong.", "err": err })
                }
            })
        }
        else {
            res.status(202).send({ "message": "User is not registered, please register" })
        }
    } catch (error) {
        res.status(400).send({ "message": "Something went wrong", "Err": error })
    }
})

userRouter.get("/logout", auth, async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    try {
        const newTkn = new ListModel({ token });
        await newTkn.save();
        res.status(200).send({ "message": "Logout successful" })
    } catch (error) {
        res.status(400).send({ "message": "Something went wrong", "err": error })
    }
})

module.exports = { userRouter };