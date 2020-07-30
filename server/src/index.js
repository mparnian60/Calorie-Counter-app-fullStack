const express = require('../node_modules/express');
require('../mongo');
const app = express();
const port = 3000;


//routers
const userRouter = require('./routes/userRoutes');


//middleware
app.use(express.json()); //parse JSON body


app.use("/user", userRouter);



app.listen(port, () => console.log(`FoodCount app listening at http://localhost:${port}`))