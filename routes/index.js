const express = require('express');
const router = express.Router();
const Place = require('../models').Place;
const Hotel = require('../models').Hotel;
const Restaurant = require('../models').Restaurant;
const Activity = require('../models').Activity;

const hotelPromise = Hotel.findAll({ include: [ Place ] })
const activityPromise = Activity.findAll({ include: [ Place ] })
const restaurantPromise = Restaurant.findAll({ include: [ Place ] })

router.get('/', function(req, res, next){
    Promise.all([hotelPromise, activityPromise, restaurantPromise])
    .then(data => res.json(data))
    .catch(next);
});

module.exports = router;
