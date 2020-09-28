require('dotenv').config();
const express = require('express');
require('./mongo');
const app = express();
const path = require('path');
const port = 9000;


//routers
const userRouter = require('./src/routes/userRoutes');
const foodRouter = require('./src/routes/foodRoutes');
const foodDetailsRouter = require('./src/routes/foodDetailsRoutes');

//Heroku environment variable
//NODE_ENV=production
//by defining the environment variable, we want to ensure that our codes which we want to use for our 
//static file or deployement into heroku doesn't interfere with othercodes

const isProduction = process.env.NODE_ENV === 'production';

//middleware to make a static file for Heroku deployement
if (isProduction){
    console.log("Express app running in production")
    app.use(express.static('./public'));
}


//middleware
app.use(express.json()); //parse JSON body


app.use("/user", userRouter);
app.use("/api/food", foodRouter);
app.use("/api/foodDetails", foodDetailsRouter);

if (isProduction){
    app.get('/*', (req,res) =>{
        res.sendFile(path.join(__dirname, 'public', 'index.html'))
    })
}


app.listen(process.env.PORT || 9000, () => {
    console.log(`FoodCount app listening at http://localhost:${port}`)
})