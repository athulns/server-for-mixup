import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SavedRecipes from './pages/SavedRecipes'; // Import the SavedRecipes component
import Navbar from './components/Navbar'; // Import the Navbar component for navigation
import Footer from './components/Footer'; // Import the Footer component
import Home from './pages/Home'; // Import the Home page component
import Recipes from './pages/Recipes'; // Import the Recipes page component
import RecipeDetail from './pages/RecipeDetail'; // Import the RecipeDetail page component
import AddRecipe from './pages/AddRecipe'; // Import the AddRecipe page component
import Login from './pages/Login'; // Import the Login page component
import Register from './pages/Register'; // Import the Register page component

// Main App component that sets up routing
const App = () => {
  return (
    <Router>
      <Navbar /> {/* Render the Navbar for navigation */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/recipes" element={<Recipes />} /> {/* Recipes route */}
          <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* Recipe detail route */}
          <Route path="/add-recipe" element={<AddRecipe />} /> {/* Add recipe route */}
          <Route path="/login" element={<Login />} /> {/* Login route */}
          <Route path="/register" element={<Register />} /> {/* Register route */}
          <Route path="/saved-recipes" element={<SavedRecipes />} /> {/* Saved recipes route */}
        </Routes>
      </div>
      <Footer /> {/* Render the Footer */}
    </Router>
  );
};

export default App; // Export the App component
