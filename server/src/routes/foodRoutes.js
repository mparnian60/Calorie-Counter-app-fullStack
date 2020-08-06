const express = require("../../node_modules/express");
const router = express.Router();
const jwt = require('jsonwebtoken');
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

//middleware to verify JWT, Otherwise reject request if not valid
const privateKey = '7f58842e-546e-41ec-86cc-98688aff65e5';
router.use((req, res, next)=>{
  const token = req.get('token');

  console.log("token", token);

  jwt.verify(token, privateKey, { algorithms: ["HS256"] }, (err, decoded)=>{
    if(!err) {
      req.user = decoded //store userinfo in requset object
      next();  //middleware complete, move to next endpoint
    }else{
      res.status(401).send("Please login");
    }
  })
})


// create new plan
router.post('/newDayPlan' , async (req, res) =>{
    try{
        // req.body.userId = payload.id;
        //checking whther combination of userID & date exist
      const findExistingPlan = await DayPlan.find({userId:req.body.userId, date:req.body.date})
      if(findExistingPlan.length<1) {
        const newDayPlan = await DayPlan.create(req.body);
        res.status(200).send(newDayPlan);
      }else{
        console.log("findExistingPlan", findExistingPlan);
        res.send("plan exist");
      }
      
    }catch{
      res.status(400).send("Bad request");
    }
})


module.exports = router;