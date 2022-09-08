const express = require('express');
const router = express.Router();
const userLog = require("../middlewares/userLogs")
const {login, user, saveUser}= require("../controllers/userController")
const validationResult = require("../validations/loginValidator")

router
    .get("/login", userLog, login)
    .post("/create",userLog,validationResult,saveUser)
    .get("/info", userLog, user)
    
    

module.exports= router