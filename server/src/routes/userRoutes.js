const express = require("../../node_modules/express");
const router = express.Router();
const bcrypt = require('../../node_modules/bcryptjs');
const jwt = require('../../node_modules/jsonwebtoken');
const User = require('../models/User');
const Fatsecret = require('../FatSecret');

const privateKey = '7f58842e-546e-41ec-86cc-98688aff65e5';

//new user
router.post('/new', async (req, res) => {
    try {
        const username = await User.findOne({username: req.body.username});

        if(!username){
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const data = await User.create(req.body)
            res.send(data)
        }else{
            res.status(409).send('username already exist');
        }
        
    } catch{
        res.status(400).send('Bad request');
    }
});

//login
router.post('/login', async (req, res) => {
    try {
        const data = await User.findOne({ username: req.body.username });

        if (data && await bcrypt.compare(req.body.password, data.password)) {

            const payload = {
                id: data._id,
                username: data.username
            }

            jwt.sign(payload, privateKey, { expiresIn: "1h" }, ((err, token) => {
                console.log(token);
                res.set('token', token);
                res.send('token created')
            }));

        } else {
            res.send('Enter valid username & password');
        }
    } catch{
        res.status(400).send('Enter valid username & password');
    }
})

// //logout
// router.get('/logout', async (req, res) => {
//     req.session.destroy(() => {
//         res.status(200).send({
//             message: 'user logged out'
//         });
//     })
// })

//Food search
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


module.exports = router;