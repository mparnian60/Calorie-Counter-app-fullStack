const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const Fatsecret = require('../FatSecret');
const DayPlan = require("../models/DayPlan");
const moment = require('moment');



//get Food result
router.get('/foodsearch/:search', async (req, res) => {
  // const fatSecretAPI =  new Fatsecret(process.env.KEY,process.env.SECRET);
  const fatSecretAPI = new Fatsecret('74d5c1a21ce94f4caa58fd5aef1d04e5', '4dfde12990cf45a5a03527595b7a6ef5');

  fatSecretAPI.method('foods.search', {
    search_expression: req.params.search,
    max_results: 10
  })
    .then(function (results) {
      // console.log(results.foods.food);
      res.status(200).send(results.foods.food);
    })
    .catch(err => console.error(err));

})

//middleware to verify JWT, Otherwise reject request if not valid
const privateKey = '7f58842e-546e-41ec-86cc-98688aff65e5';
router.use((req, res, next) => {
  const token = req.get('token');

  // console.log("token", token);

  jwt.verify(token, privateKey, { algorithms: ["HS256"] }, (err, decoded) => {
    if (!err) {
      req.user = decoded //store userinfo in requset object
      next();  //middleware complete, move to next endpoint
    } else {
      res.status(401).send("Please login");
    }
  })
})

//convert date format comes from body to mongoDB format
const changeDateFormat = (date) => {
  const firstFormat = moment.utc(date); // formats to ISO 8601 String
  const toUnix = moment(firstFormat).format()
  removeZ = toUnix.substring(0, 19)
  otherVar = ".000+00:00"
  finalValue = removeZ.concat(otherVar)
  return finalValue;
}


// create new plan
router.post('/newDayPlan', async (req, res) => {

  const date = changeDateFormat(req.body.date);

  try {

    //checking whether combination of userID & date exist
    const findExistingPlan = await DayPlan.find({ userId: req.body.userId, date: date })

    if (findExistingPlan.length < 1) {

      const newDayPlan = await DayPlan.create(req.body);
      console.log('newday plan', newDayPlan);

      const updateCreatedPlan = newDayPlan;

      if (req.body.meal.breakfast[0].servingSize === 0) {
        updateCreatedPlan.meal.breakfast.pop(req.body.meal.breakfast[0]);
      }
      if (req.body.meal.lunch[0].servingSize === 0) {
        updateCreatedPlan.meal.lunch.pop(req.body.meal.lunch[0]);
      }
      if (req.body.meal.dinner[0].servingSize === 0) {
        updateCreatedPlan.meal.dinner.pop(req.body.meal.dinner[0]);
      }
      if (req.body.meal.snack[0].servingSize === 0) {
        updateCreatedPlan.meal.snack.pop(req.body.meal.snack[0]);
      }

      const updateExistingPlan = await DayPlan.findOneAndUpdate({ date: date }, { $set: updateCreatedPlan }, { new: true })

      res.status(200).send(updateExistingPlan);
    } else {
      console.log("findExistingPlan", findExistingPlan);
      // res.send("plan exist");
      res.redirect(307, '/api/food/updateDayPlan');
    }

  } catch (e) {
    console.log('create error', e);
    res.status(400).send("Bad request");
  }
})

// update plan
router.post('/updateDayPlan', async (req, res) => {

  const date = changeDateFormat(req.body.date);

  try {
    // find all plans under below userID
    const findExistingPlan = await DayPlan.find({ userId: req.user.id, date: date })
    // console.log('req.body',req.body);

    //conditions to add new record to the existing one
    if (findExistingPlan.length >= 1) {
      // console.log('findExistingPlan', findExistingPlan[0]);
      const existingPlan = findExistingPlan[0];
      // console.log('breakfast', req.body.meal.breakfast[0]);
      // console.log('existingPlan.meal.breakfast', existingPlan.meal.breakfast);
      if (req.body.meal.breakfast[0].servingSize) {
        const findRepeatedFoodIndex = existingPlan.meal.breakfast.findIndex((food) => {
          console.log('food', food);
          return food.foodId == req.body.meal.breakfast[0].foodId;
        })
        // console.log('findRepeatedFoodIndex',findRepeatedFoodIndex);
        if (findRepeatedFoodIndex >= 0) {
          existingPlan.meal.breakfast[findRepeatedFoodIndex].servingSize += parseInt(req.body.meal.breakfast[0].servingSize)
        } else {
          existingPlan.meal.breakfast.push(req.body.meal.breakfast[0]);
        }
      }
      if (req.body.meal.lunch[0].servingSize) {
        const findRepeatedFoodIndex = existingPlan.meal.lunch.findIndex((food) => {
          //if foodId of the item chosen in front end exist in the array of breakfast, find the index and return it
          return food.foodId == req.body.meal.lunch[0].foodId;
        })
         console.log('findRepeatedFoodIndex',findRepeatedFoodIndex);
        if (findRepeatedFoodIndex >= 0) {
          //if index is greater than zero, just add the serving size
          existingPlan.meal.lunch[findRepeatedFoodIndex].servingSize += parseInt(req.body.meal.lunch[0].servingSize)
        } else {
          existingPlan.meal.lunch.push(req.body.meal.lunch[0]);
        }
      }
      if (req.body.meal.dinner[0].servingSize) {
        const findRepeatedFoodIndex = existingPlan.meal.dinner.findIndex((food) => {
          //if foodId of the item chosen in front end exist in the array of breakfast, find the index and return it
          return food.foodId == req.body.meal.dinner[0].foodId;
        })
        if (findRepeatedFoodIndex >= 0) {
          //if index is greater than zero, just add the serving size
          existingPlan.meal.dinner[findRepeatedFoodIndex].servingSize += parseInt(req.body.meal.dinner[0].servingSize)
        } else {
          existingPlan.meal.dinner.push(req.body.meal.dinner[0]);
        }
      }
      if (req.body.meal.snack[0].servingSize) {
        const findRepeatedFoodIndex = existingPlan.meal.snack.findIndex((food) => {
          //if foodId of the item chosen in front end exist in the array of breakfast, find the index and return it
          return food.foodId == req.body.meal.snack[0].foodId;
        })
        if (findRepeatedFoodIndex >= 0) {
          //if index is greater than zero, just add the serving size
          existingPlan.meal.snack[findRepeatedFoodIndex].servingSize += parseInt(req.body.meal.snack[0].servingSize)
        } else {
          existingPlan.meal.snack.push(req.body.meal.snack[0]);
        }
      }

      // console.log('existingPlan',existingPlan);
      // find a plans with chosen date and updat that one
      const updateExistingPlan = await DayPlan.findOneAndUpdate({ date: finalValue }, { $set: existingPlan }, { new: true })
      res.status(200).send(updateExistingPlan);
    } else {
      res.redirect(307, '/api/food/newDayPlan');
    }
  } catch (e) {
    // console.log(e);
    res.status(400).send("Bad request");
  }
})


//get dayPlan for the specific date
router.post('/dayPlan', async (req, res) => {
  try {

    const date = changeDateFormat(req.body.date);

    const dayPlan = await DayPlan.find({ userId: req.user.id, date: date });
    res.status(200).send(dayPlan);
  } catch (e) {
    console.log("e", e);
    res.status(400).send("bad request");
  }
})

//get all dayPlan for the specific user
router.get('/allDayPlan', async (req, res) => {
  try {
    console.log('userID', req.user.id);
    const dayPlan = await DayPlan.find({ userId: req.user.id });
    res.status(200).send(dayPlan);
  } catch (e) {
    console.log("e", e);
    res.status(400).send("bad request");
  }
})


//delete meal 
/*
  Expects a day plan ID & Meal ID to perform delet
  //meal type is used to select breakfast, lunch, dinner, snack as string
  //meal object used for actual update
  {
    planId: "string",
    mealId: "string",
    mealType: "string",
    meal: { foodId: number, servingSize: mumber }
  }
*/
router.delete('/deleteFood', async (req, res) => {
  const dayPlan = await DayPlan.findOne({ userId: req.user.id, _id: req.body.planId }); 

  // console.log("dayPlan", dayPlan);

  // if(!dayPlan) {
  //   //early exit if dayplan isn't found
  //   res.status(400).send("Bad request");
  //   return;
  // }
  let meal = null; //initalise meal variable to assign in switch
  //note: dayPlan.meal is a Mongoose document: https://mongoosejs.com/docs/documents.html#updating
  //sub docs: https://mongoosejs.com/docs/subdocs.html
  //Finding a sub document: https://mongoosejs.com/docs/subdocs.html#finding-a-subdocument  
  switch (req.body.mealType) {
    case "breakfast":
      meal = dayPlan.meal.breakfast.id(req.body.mealId);
      break;
    case "lunch":
      meal = dayPlan.meal.lunch.id(req.body.mealId);
    break;
    case "dinner":
      meal = dayPlan.meal.dinner.id(req.body.mealId);
      break;
    case "snack":
      meal = dayPlan.meal.snack.id(req.body.mealId);
      break;
    // default:
    //   console.log('meal type not found');
  }
  console.log('delete meal', dayPlan.meal)
  //check if a valid meal was selected
  if(meal) {
    // console.log('meal', meal)
    //update the meal properties from the query
    meal.foodId = req.body.meal.foodId;
    meal.servingSize = req.body.meal.servingSize;
    //save the parent document which commits the meal changes
    await meal.remove();
    await dayPlan.save();
  }

  //delete the whole plan if all meals are empty
  if(dayPlan.meal.breakfast.length < 1 
    && dayPlan.meal.lunch.length < 1 
    && dayPlan.meal.dinner.length < 1
    && dayPlan.meal.snack.length < 1 ){
      // console.log('no meal exist in dayplan')
      await DayPlan.findOneAndDelete({ userId: req.user.id, _id: req.body.planId });
      console.log('entire food deleted')
    }
  res.json(dayPlan);
});

module.exports = router;