import express from 'express';
const router = express.Router();

router.get('/__test', (req, res) => {
  res.send('recipes router is alive');
});

import { getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe} from '../Controllers/recipes.js';
import validateRecipe from '../middleware/validateRecipe.js';



router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);
router.post('/', createRecipe);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

export default router;
