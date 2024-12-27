import recipes from "../assets/recipes.json";

export const fetchRecipes = () => {
  return recipes; // Returning the static dataset
};

export const getRecipeById = (id) => {
  return recipes.find((recipe) => recipe.field1 === id);
};
