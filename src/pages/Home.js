import React from "react";
//import Tabs from "../components/Tabs";
import "../styles/Home.css";
import "../styles/Responsive.css";
import QuickRecipes from "../components/QuickRecipes";
import MoodBasedRecipes from "../components/MoodBasedRecipes";
function Home() {
  return (
    <div className="home">
      <div className="hero-section text-center">
        <h1>Cooking Made Easy</h1>
        <p>Explore thousands of recipes to enhance your cooking experience.</p>
      </div>
      <MoodBasedRecipes />
      <QuickRecipes />
    </div>
  );
}

export default Home;
