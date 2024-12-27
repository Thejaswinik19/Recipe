import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <div className="recipe-card">
      <img src={recipe.img_src} alt={recipe.recipe_name} />
      <h5>{recipe.recipe_name}</h5>
      <p>Rating: {recipe.rating}</p>
      <button
        className="btn btn-primary"
        onClick={() => navigate(`/recipe/${recipe.field1}`)} // Navigate using field1
      >
        View Details
      </button>
    </div>
  );
};

export default RecipeCard;
