const express=require('express')

const {createRide,getPrices}=require('../controllers/rideController.js')

const Router=express.Router();

Router.post('/ride/createRide',createRide);
Router.get('/ride/getRidePrices',getPrices);

module.exports=Router;