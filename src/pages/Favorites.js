import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import '../styles/Favorites.css';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Fetch the favorite recipes from localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="favorites">
      <h2 className="text-center mb-4">Your Favorites</h2>
      {favorites.length ? (
        <div className="recipe-grid">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.field1} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="text-center">No favorite recipes added yet!</p>
      )}
    </div>
  );
}

export default Favorites;
