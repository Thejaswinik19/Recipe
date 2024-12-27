import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Favorites from "./pages/Favorites";
import RecipeDetails from "./pages/RecipeDetails";
import AuthForm from "./components/AuthForm";
import "./styles/App.css";
import Ingredients from "./pages/Ingredients"; 

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/ingredients" element={<Ingredients />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
