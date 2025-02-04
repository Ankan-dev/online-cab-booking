const express=require ('express');
const {getAddressCoordinates,DistanceTime,getSuggestions}=require('../controllers/mapController.js');

const Router=express.Router();

Router.get('/map/getCoordinates',getAddressCoordinates);
Router.get('/map/getDistanceTime',DistanceTime);
Router.get('/map/getSuggestions',getSuggestions);

module.exports=Router