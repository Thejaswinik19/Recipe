import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Ingredients.css";
import { fetchRecipes } from "../api/recipeApi"; // Assuming fetchRecipes returns all recipes

// Sample ingredient categories with several items (can be expanded)
const ingredientCategories = {
  Vegetables: [
    "Tomato", "Onion", "Garlic", "Spinach", "Carrot", "Cucumber", "Zucchini", "Potato", "Bell Pepper"
  ],
  Fruits: [
    "Apple", "Banana", "Orange", "Mango", "Pineapple", "Peach", "Grapes", "Strawberry"
  ],
  Meats: [
    "Chicken", "Beef", "Pork", "Lamb", "Turkey", "Fish", "Shrimp"
  ],
  Oils: [
    "Olive Oil", "Vegetable Oil", "Coconut Oil", "Canola Oil", "Sesame Oil"
  ],
  Powders: [
    "Curry Powder", "Garlic Powder", "Chili Powder", "Turmeric", "Cinnamon", "Paprika"
  ],
  Dairy: [
    "Milk", "Cheese", "Butter", "Yogurt", "Cream"
  ],
  Grains: [
    "Rice", "Wheat", "Quinoa", "Oats", "Barley"
  ]
};

function Ingredients() {
  const [enteredIngredients, setEnteredIngredients] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [error, setError] = useState(""); // For validation error
  const navigate = useNavigate();

  // Handle ingredient input click
  const handleIngredientClick = (ingredient) => {
    if (!enteredIngredients.includes(ingredient)) {
      setEnteredIngredients([...enteredIngredients, ingredient]);
    }
  };

  // Function to filter recipes by ingredients
  const fetchRecipesByIngredients = () => {
    if (enteredIngredients.length === 0) {
      setError("Please select at least one ingredient.");
      return;
    }

    const allRecipes = fetchRecipes(); // Assuming fetchRecipes fetches all recipes

    // Check if there are any recipes
    if (!allRecipes || allRecipes.length === 0) {
      setError("No recipes found in the database.");
      return;
    }

    // Filter recipes by matching at least one ingredient
    const matchingRecipes = allRecipes.filter((recipe) => {
      // Normalize ingredients by trimming spaces and converting to lowercase
      const recipeIngredients = recipe.ingredients
        .toLowerCase()
        .split(",") // Split by comma
        .map((ingredient) => ingredient.trim());

      // Check if any of the entered ingredients match the recipe's ingredients
      return enteredIngredients.some((ingredient) =>
        recipeIngredients.some((recipeIngredient) =>
          recipeIngredient.includes(ingredient.toLowerCase()) // Case-insensitive match
        )
      );
    });

    if (matchingRecipes.length > 0) {
      setFilteredRecipes(matchingRecipes);
      setError(""); // Clear error if valid ingredients are entered
    } else {
      setFilteredRecipes([]);
      setError("No recipes found with your ingredients.");
    }
  };

  // Function to handle ingredient removal
  const removeIngredient = (ingredient) => {
    setEnteredIngredients(enteredIngredients.filter((item) => item !== ingredient));
  };

  return (
    <div className="ingredients-container">
      <h2>Find Recipes by Ingredients</h2>

      {/* Display ingredient category buttons */}
      <div className="ingredient-categories">
        {Object.keys(ingredientCategories).map((category) => (
          <div key={category} className="category">
            <h3>{category}</h3>
            <div className="ingredient-buttons">
              {ingredientCategories[category].map((ingredient, index) => (
                <button
                  key={index}
                  className="ingredient-button"
                  onClick={() => handleIngredientClick(ingredient)}
                >
                  {ingredient}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Display selected ingredients */}
      <div className="selected-ingredients">
        {enteredIngredients.map((ingredient, index) => (
          <span key={index} className="ingredient-tag">
            {ingredient}{" "}
            <button onClick={() => removeIngredient(ingredient)}>Remove</button>
          </span>
        ))}
      </div>

      {/* Error message if no ingredient is selected */}
      {error && <p className="error">{error}</p>}

      {/* Button to find recipes */}
      <div className="find-recipes">
        <button onClick={fetchRecipesByIngredients}>Find Recipes</button>
      </div>

      {/* Display filtered recipes */}
      <div className="recipes-list">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.field1} className="recipe-card">
              <img src={recipe.img_src} alt={recipe.recipe_name} className="recipe-image" />
              <h3>{recipe.recipe_name}</h3>
              <p>Ingredients: {recipe.ingredients}</p>
              <button
                className="btn-view"
                onClick={() => navigate(`/recipe/${recipe.field1}`)}
              >
                View Recipe
              </button>
            </div>
          ))
        ) : (
          <p>No recipes found. Try selecting different ingredients!</p>
        )}
      </div>
    </div>
  );
}

export default Ingredients;
