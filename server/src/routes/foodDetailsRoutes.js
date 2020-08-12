const express = require("../../node_modules/express");
const router = express.Router();
const FoodDetails = require("../models/FoodDetails");

// create new food
router.post('/newFood', async (req, res) => {
  
    try {
  
      //checking whether combination of userID & date exist
      const findExistingfood = await FoodDetails.find({ food_id: req.body.food_id})
    
      if (findExistingfood.length < 1) {
        const newFood = await FoodDetails.create(req.body);
        res.status(200).send(newFood);
      } else {
        console.log("findExistingFood", findExistingfood);
        res.send("food exist");
      }
  
    } catch (e) {
      console.log('create error', e);
      res.status(400).send("Bad request");
    }
  })

  // get food details
router.get('/details/:foodId', async (req, res) => {
  
    try {
  
      //checking whether combination of userID & date exist
      const foodDetail = await FoodDetails.find({ food_id: req.params.foodId})
        res.status(200).send(foodDetail);
      
  
    } catch (e) {
      console.log('create error', e);
      res.status(400).send("Bad request");
    }
  })


  module.exports = router;