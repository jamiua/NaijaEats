const express = require("express");
const app = express();
const mealRoutes = require('./routes/meals');
const cors = require('cors');

require('dotenv').config();

// Get port or use 5050
const PORT = process.env.PORT || 5050;
const welcome = `Welcome to Port ${PORT}, your meal is cooking`;

app.use(express.json());
app.use(express.static('./public'));
app.use(cors());

app.get('/' , (req,res)=>{
    res.send(welcome);
 })

app.use('/meals', mealRoutes);

app.listen(PORT, function() {
    console.log(` 🚨 Server ${PORT} Started`);
});