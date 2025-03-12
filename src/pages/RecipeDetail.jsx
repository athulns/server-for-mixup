import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'; // Import axios

// RecipeDetail component for displaying a single recipe's details
const RecipeDetail = () => {
  const location = useLocation(); // Get location object to access state
  const recipes = location.state?.recipes || []; // Access recipes from navigation state
  const { id } = useParams(); // Get recipe ID from URL parameters
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [recipe, setRecipe] = useState(null); // State to hold the recipe details

  // Fetch recipe details from the API when the component mounts
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`https://backend-2-qmay.onrender.com/api/recipes/${id}`);
        const data = response.data; // Use response.data to get the recipe data
        setRecipe(data); // Set the fetched recipe to state
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipe(); // Fetch recipe details
  }, [id]);

  // Function to save the recipe to local storage
  const handleSave = () => {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    if (!savedRecipes.some(savedRecipe => savedRecipe._id === recipe._id)) {
        savedRecipes.push(recipe);
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
        alert('Recipe saved successfully!'); // Notify user of successful save
    } else {
        alert('Recipe already saved!'); // Notify user if recipe is already saved
    }
  };

  // If recipe is not found, display a message
  if (!recipe) return <h2 className="text-center mt-5">Recipe Not Found</h2>;

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left: Recipe Image */}
        <div className="col-md-6 d-flex align-items-center">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="img-fluid rounded shadow"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>

        {/* Right: Recipe Details */}
        <div className="col-md-6">
          <h2>{recipe.title}</h2>
          <p className="text-muted">{recipe.description}</p>

          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h4>Instructions:</h4>
          <p>{recipe.instructions}</p>
          
          <div className="d-flex justify-content-start mt-3 mb-3">
            <button className="btn btn-success" onClick={handleSave}>
              Save Recipe
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Button to Recipes Page */}
      <div className="d-flex justify-content-center mt-5 mb-3">
        <button className="btn btn-outline-secondary" onClick={() => navigate('/recipes')}>
          Go to Recipes Page
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail; // Export the RecipeDetail component
