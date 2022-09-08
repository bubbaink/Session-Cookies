const express = require('express');
const router = express.Router();
const userLog = require("../middlewares/userLogs")
const {login, user, saveUser}= require("../controllers/userController")
const validationResult = require("../validations/loginValidator")
const cookieCheck = require("../middlewares/cookie")
const {offSession, inSession}= require("../middlewares/notEntry")

router
    .get("/login", inSession, userLog, login)
    .post("/create",userLog,validationResult,saveUser)
    .get("/info", userLog,offSession, user)

router.get('/quit',cookieCheck, function(req, res) {
        req.session.destroy()
        res.cookie('cookie', null, { maxAge: -1 })
        res.redirect('/')
      })
    
    

module.exports= router