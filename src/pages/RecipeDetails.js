import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../assets/recipes.json';
import '../styles/RecipeDetails.css';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.field1 === id);

  const [isFavorite, setIsFavorite] = useState(false);

  // Check if the recipe is in localStorage on component mount
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isRecipeFavorite = savedFavorites.some((fav) => fav.field1 === id);
    setIsFavorite(isRecipeFavorite);
  }, [id]);

  const handleFavoriteClick = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = savedFavorites.filter((fav) => fav.field1 !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      // Add to favorites
      savedFavorites.push(recipe);
      localStorage.setItem('favorites', JSON.stringify(savedFavorites));
    }

    // Toggle the favorite state
    setIsFavorite(!isFavorite);
  };

  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <div className="recipe-details">
      <img src={recipe.img_src} alt={recipe.recipe_name} className="recipe-img" />
      <h1>{recipe.recipe_name}</h1>
      <p><strong>Prep Time:</strong> {recipe.prep_time || 'N/A'}</p>
      <p><strong>Cook Time:</strong> {recipe.cook_time || 'N/A'}</p>
      <p><strong>Total Time:</strong> {recipe.total_time || 'N/A'}</p>
      <p><strong>Servings:</strong> {recipe.servings || 'N/A'}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.split(',').map((ingredient, index) => (
          <li key={index}>{ingredient.trim()}</li>
        ))}
      </ul>
      <h3>Directions:</h3>
      <p>{recipe.directions}</p>
      <p><strong>Rating:</strong> {recipe.rating} ⭐</p>
      <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
        View Full Recipe
      </a>

      {/* Heart Icon for Favorite */}
      <div className="favorite-icon" onClick={handleFavoriteClick}>
        <span className={isFavorite ? 'heart-filled' : 'heart-empty'}>
          {isFavorite ? '❤️' : '🤍'}
        </span>
        <span>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</span>
      </div>
    </div>
  );
};

export default RecipeDetails;
