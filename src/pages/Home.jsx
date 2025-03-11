import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getRecipes } from "../data/recipes";
import RecipeCard from "../components/RecipeCard";

// Home component for displaying featured recipes
const Home = () => {
  const [recipes, setRecipes] = useState([]); // State to hold the list of recipes

  // Function to save a recipe to local storage
  const handleSave = (recipe) => {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    if (!savedRecipes.some(savedRecipe => savedRecipe.id === recipe.id)) {
        savedRecipes.push(recipe);
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
        console.log('Recipe saved successfully:', recipe);
    } else {
        console.log('Recipe already saved:', recipe);
    }
  };

  // Function to delete a recipe from the list
  const handleDelete = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
    console.log(`Recipe with id ${id} deleted.`);
  };

  // Fetch recipes from the API when the component mounts
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/recipes'); // Fetch from API
        const data = await response.json();
        setRecipes(data.slice(0, 3)); // Load only the first 3 recipes
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes(); // Fetch recipes from API
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Welcome to MixUp Recipe Book</h1>
      <p className="text-center">
        Discover and share delicious recipes from around the world.
      </p>

      {recipes.length === 0 ? (
        <div className="text-center">
          <p>No recipes found. Start by adding your first recipe!</p>
          <Link to="/add-recipe" className="btn btn-primary">
            Add Recipe
          </Link>
        </div>
      ) : (
        <>
          <h2 className="mt-4">Featured Recipes</h2>
          <div className="row">
            {recipes.slice(0, 3).map((recipe) => (
              <div className="col-md-4 mb-4" key={recipe._id}>
                <RecipeCard recipe={recipe} onSave={handleSave} onDelete={handleDelete} />
              </div>
            ))}
          </div>

          <div className="text-center mt-3">
            <Link to="/recipes" className="btn btn-secondary">
              View All Recipes
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Home; // Export the Home component
