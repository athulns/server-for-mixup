import RecipeCard from "../components/RecipeCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'; // Import axios

// Recipes component for displaying all recipes
const Recipes = () => {
  const [recipes, setRecipes] = useState([]); // State to hold the list of recipes
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Function to delete a recipe from the list
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://backend-2-qmay.onrender.com/api/recipes/${id}`);
      setRecipes((prevRecipes) => prevRecipes.filter(recipe => recipe._id !== id)); // Use _id for filtering
    } catch (error) {
      console.error(error);
    }
  };

  // Function to save a recipe (to be implemented)
  const handleSave = (recipe) => {
    alert("Recipe saved!"); // Notify user of save action
  };

  // Fetch recipes from the API when the component mounts
  useEffect(() => {
    const fetchRecipes = async () => {
      console.log("Fetching recipes...");
      try {
        const response = await axios.get('https://backend-2-qmay.onrender.com/api/recipes');
        const data = response.data; // Use response.data to get the recipes
        setRecipes(data); // Set the fetched recipes to state
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes(); // Fetch recipes from API
  }, []);

  // Function to navigate to recipe detail page
  const handleNavigateToDetail = (recipeId) => {
    console.log(`Navigating to recipe ID: ${recipeId}`); // Debugging log
    navigate(`/recipe/${recipeId}`, { state: { recipes } }); // Pass recipes to the detail page
  };

  return ( 
    <div className="container mt-4">
      <h2 className="text-center mb-4">All Recipes</h2>
      {recipes.length === 0 ? (
        <p className="text-center">No recipes found. Try adding some!</p>
      ) : (
        <div className="row">
          {recipes.map((recipe) => (
            <div className="col-md-4 mb-4" key={recipe._id}> {/* Use _id as the key */}
              <RecipeCard recipe={recipe} onDelete={handleDelete} onSave={handleSave} onNavigateToDetail={handleNavigateToDetail} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recipes; // Export the Recipes component
