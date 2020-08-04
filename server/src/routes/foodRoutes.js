const express = require("../../node_modules/express");
const router = express.Router();
const Fatsecret = require('../FatSecret');
const DayPlan = require("../models/DayPlan");


//get Food result
router.get('/foodsearch/:search' , async (req, res) =>{
    // const fatSecretAPI =  new Fatsecret(process.env.KEY,process.env.SECRET);
    const fatSecretAPI =  new Fatsecret('74d5c1a21ce94f4caa58fd5aef1d04e5','4dfde12990cf45a5a03527595b7a6ef5');

    fatSecretAPI.method('foods.search', {
        search_expression: req.params.search,
        max_results: 10
      })
      .then(function(results) {
        // console.log(results.foods.food);
        res.status(200).send(results.foods.food);
      })
      .catch(err => console.error(err));

})

// create new plan
router.post('/newDayPlan' , async (req, res) =>{
    try{
        // req.body.userId = payload.id;
      const newDayPlan = await DayPlan.create(req.body);
      res.status(200).send(newDayPlan);
    }catch{
      res.status(400).send("Bad request");
    }
})


module.exports = router;