import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    description: "",
    image: "",
    ingredients: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure no field is empty
    if (!newRecipe.title || !newRecipe.description || !newRecipe.image || !newRecipe.ingredients) {
      alert("Please fill in all fields before adding a recipe.");
      return;
    }

    // Convert ingredients string into an array
    const formattedRecipe = {
      title: newRecipe.title,
      instructions: newRecipe.description, // Change description to instructions
      imageUrl: newRecipe.image, // Use image as imageUrl
      ingredients: newRecipe.ingredients.split(",").map((item) => item.trim()),
    };

    // Send a POST request to the backend API to add the recipe
    const response = await fetch('http://localhost:5000/api/recipes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedRecipe),
    });

    if (!response.ok) {
        alert("Failed to add recipe. Please try again.");
        return;
    }

    const createdRecipe = await response.json(); // Get the created recipe from the response
    console.log("Created Recipe:", createdRecipe); // Log the created recipe for debugging

    alert("Recipe added successfully!"); // Notify user of success

    // Redirect to the newly added recipe’s detail page
    navigate(`/recipe/${createdRecipe._id}`); // Redirect to the newly added recipe’s detail page
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Recipe Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={newRecipe.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={newRecipe.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={newRecipe.image}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ingredients (comma-separated)</label>
          <input
            type="text"
            className="form-control"
            name="ingredients"
            value={newRecipe.ingredients}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
