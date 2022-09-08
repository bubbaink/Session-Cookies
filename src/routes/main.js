const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const userLog = require("../middlewares/userLogs")


router
    .get("/",userLog, indexController.index) 
    .get("/services",userLog, indexController.services) 
    .get("/services/desing",userLog, indexController.desing)
    .get("/denied",userLog, indexController.denied)
    
module.exports = router;
