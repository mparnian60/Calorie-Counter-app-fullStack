const express = require('../node_modules/express');
require('../mongo');
const app = express();
const port = 9000;


//routers
const userRouter = require('./routes/userRoutes');
const foodRouter = require('./routes/foodRoutes');


//middleware
app.use(express.json()); //parse JSON body


app.use("/user", userRouter);
app.use("/api/food", foodRouter);



app.listen(port, () => console.log(`FoodCount app listening at http://localhost:${port}`))