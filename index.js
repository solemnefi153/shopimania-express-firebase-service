const express = require('express');
const  cors = require('cors');
const bodyparser = require('body-parser');
const config = require('./web/config');

//Create the express instance
const app = express();

//Middleware settings
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));


//Set up routes 
app.get('/api', async (req, res) => {
    res.send("Welcome to the Shopimania Firestore Web Service");
    res.end();
})
app.use('/api/products', require('./web/routes/product-routes'));



app.listen(config.port, () => {
    console.log('Application is listenting on port ' + config.port);
})

