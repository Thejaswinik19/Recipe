import React, { useState } from "react";
import "../styles/MoodBasedRecipes.css"; // Import the styles

// Dataset of recipes categorized by mood
const moodRecipesDataset = {
  happy: [
    {
      name: "Chocolate Mug Cake",
      description: "A quick dessert for your sweet cravings!",
      image: "path/to/chocolate-mug-cake.jpg", // replace with actual image path
    },
  ],
  sad: [
    {
      name: "Avocado Toast",
      description: "Simple, healthy, and delicious breakfast.",
      image: "path/to/avocado-toast.jpg", // replace with actual image path
    },
  ],
  stressed: [
    {
      name: "Instant Ramen Stir-Fry",
      description: "Upgrade your instant ramen in minutes.",
      image: "path/to/ramen.jpg", // replace with actual image path
    },
  ],
};

function MoodBasedRecipes() {
  const [mood, setMood] = useState("");
  const [recipeSuggestion, setRecipeSuggestion] = useState(null);

  const handleMoodSelection = (selectedMood) => {
    setMood(selectedMood);
    setRecipeSuggestion(moodRecipesDataset[selectedMood][0]); // Select first recipe for the mood
  };

  return (
    <div className="mood-based-recipes">
      <h2>Find a Recipe Based on Your Mood</h2>
      <p>Select your current mood to find the perfect recipe!</p>

      <div className="mood-buttons">
        <button onClick={() => handleMoodSelection("happy")}>Happy</button>
        <button onClick={() => handleMoodSelection("sad")}>Sad</button>
        <button onClick={() => handleMoodSelection("stressed")}>Stressed</button>
      </div>

      {mood && recipeSuggestion && (
        <div className="recipe-suggestion">
          <h3>Recipe Suggestion:</h3>
          <h4>{recipeSuggestion.name}</h4>
          <p>{recipeSuggestion.description}</p>
          <img src={recipeSuggestion.image} alt={recipeSuggestion.name} />
        </div>
      )}
    </div>
  );
}

export default MoodBasedRecipes;
