import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    setSavedRecipes(recipes);
  }, []);

  const handleDelete = (id) => {
    const updatedRecipes = savedRecipes.filter(recipe => recipe._id !== id); // Updated to use _id
    setSavedRecipes(updatedRecipes);
    localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes)); // Update local storage
    console.log(`Recipe with id ${id} deleted.`);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Saved Recipes</h1>
      {savedRecipes.length === 0 ? (
        <p className="text-center">No saved recipes found.</p>
      ) : (
        <div className="row">
          {savedRecipes.map((recipe) => (
            <div className="col-md-4 mb-4" key={recipe._id}> {/* Updated to use _id */}
              <div className="card shadow-sm border-0">
                <img src={recipe.imageUrl} className="card-img-top" alt={recipe.title} />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text text-muted">{recipe.instructions ? recipe.instructions.substring(0, 100) : 'No description available'}...</p>
                  <Link to={`/recipe/${recipe._id}`} className="btn btn-primary">View Recipe</Link> {/* Single View button */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedRecipes;
