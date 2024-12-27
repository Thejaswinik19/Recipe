import React, { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { fetchRecipes } from "../api/recipeApi";
import "../styles/Browse.css";

function Browse() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const recipes = fetchRecipes();

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase()); // Convert input to lowercase for case-insensitive search
  };

  // Filter recipes based on the search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.recipe_name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="browse">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {/* Font Awesome search icon */}
        <i className="fa fa-search"></i>
      </div>

      <div className="recipe-grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.field1} recipe={recipe} />
          ))
        ) : (
          <p>No recipes found matching your search criteria.</p>
        )}
      </div>
    </div>
  );
}

export default Browse;
