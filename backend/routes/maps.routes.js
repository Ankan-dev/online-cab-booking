const express=require ('express');
const {getAddressCoordinates,getDistanceTime,getSuggestions}=require('../controllers/mapController.js');

const Router=express.Router();

Router.get('/map/getCoordinates',getAddressCoordinates);
Router.get('/map/getDistanceTime',getDistanceTime);
Router.get('/map/getSuggestions',getSuggestions);

module.exports=Router