const express = require('express');
const router = express.Router();
const fs = require('fs');

const readVideos = () => {
    const allMealsFile = fs.readFileSync('./data/meals.json');
    const mealsData = JSON.parse(allMealsFile);
    return mealsData;
  }

// Get all meals on PORT/meals/
router.get('/', (req, res) => {
    const mealsData = readVideos();
    res.status(200).json(mealsData);
  });

// Get 1 meal based on mealId /meals/:mealId
router.get('/:mealId', (req, res) => {
    const mealId = req.params.mealId;
    const mealsData = readVideos();
    const singleMeal = mealsData.find(meal => meal.id === mealId);
  
    if (!singleMeal) {
      return res.status(404).send('Video not found');
    }
  
    res.status(200).json(singleMeal);
  });

module.exports = router;