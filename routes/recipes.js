import express from 'express';
import { getAllRecipes, createRecipe } from '../Controllers/recipes.js';

const router = express.Router();
// TODO: Add recipes routes

router.get('/', getAllRecipes);

rouer.post('/', createRecipe);

export default router;
