import React, { useState } from "react";
import "../styles/QuickRecipes.css"; // Import the scoped CSS file

// Import local images
import MugCakeImage from "../assets/images/chocolate-mug-cake.jpg";
import AvocadoToastImage from "../assets/images/avacado-toast.jpg";
import RamenImage from "../assets/images/ramen.jpg";

function QuickRecipes() {
  const recipes = [
    {
      id: 1,
      name: "5-Minute Mug Cake",
      image: MugCakeImage, // Reference imported image
      description: "A quick dessert for your sweet cravings!",
      ingredients: [
        "4 tbsp flour",
        "2 tbsp sugar",
        "2 tbsp cocoa powder",
        "3 tbsp milk",
        "2 tbsp oil",
        "A pinch of salt",
      ],
      procedure: "Mix all ingredients in a mug, microwave for 90 seconds, and enjoy!",
    },
    {
      id: 2,
      name: "Avocado Toast",
      image: AvocadoToastImage, // Reference imported image
      description: "Simple, healthy, and delicious breakfast.",
      ingredients: [
        "1 slice of bread",
        "1/2 avocado (mashed)",
        "Salt and pepper to taste",
        "Optional toppings: cherry tomatoes, red chili flakes",
      ],
      procedure: "Toast bread, spread mashed avocado, add toppings, and serve.",
    },
    {
      id: 3,
      name: "Instant Ramen Stir-Fry",
      image: RamenImage, // Reference imported image
      description: "Upgrade your instant ramen in minutes.",
      ingredients: [
        "1 pack instant ramen",
        "1 cup mixed vegetables (carrots, peas, bell peppers)",
        "2 tbsp soy sauce",
        "1 tsp sesame oil",
      ],
      procedure:
        "Cook ramen, stir-fry vegetables in sesame oil, mix with ramen and soy sauce. Serve hot.",
    },
  ];

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe === selectedRecipe ? null : recipe);
  };

  return (
    <div className="quick-recipes">
      <h2>Quick Recipes</h2>
      <p>Explore these easy and delicious recipes. Click on any dish to view the ingredients and cooking steps.</p>

      <div className="recipe-cards">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="recipe-card"
            onClick={() => handleRecipeClick(recipe)}
          >
            <img src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            {selectedRecipe?.id === recipe.id && (
              <div className="recipe-popup">
                <h4>Ingredients:</h4>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <h4>Procedure:</h4>
                <p>{recipe.procedure}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickRecipes;
