const express=require('express')

const {createRide}=require('../controllers/rideController.js')

const Router=express.Router();

Router.post('/ride/createRide',createRide);

module.exports=Router;