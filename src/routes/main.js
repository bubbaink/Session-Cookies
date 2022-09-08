const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const userLog = require("../middlewares/userLogs")
const soloAdmin = require("../middlewares/soloAdmin")

router
    .get("/",userLog, indexController.index) 
    .get("/services",userLog, indexController.services) 
    .get("/admin",userLog, soloAdmin, indexController.admin)
    .get("/services/desing",userLog, indexController.desing)
    .get("/login", userLog, indexController.login)
    .get("/denied",userLog, indexController.denied)
    
module.exports = router;
