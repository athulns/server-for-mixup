import { Link } from "react-router-dom";
import React, { useState } from 'react';

const RecipeCard = ({ recipe, onDelete }) => {
  const [message, setMessage] = useState('');

  const handleSave = () => {
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    if (!savedRecipes.some(savedRecipe => savedRecipe._id === recipe._id)) {
        savedRecipes.push(recipe);
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
        setMessage('Recipe saved successfully!');
    } else {
        setMessage('Recipe already saved!');
    }
  };

  return (
    <div className="card shadow-sm border-0" style={{ margin: '10px' }}>
      <img src={recipe.imageUrl} className="card-img-top" alt={recipe.title} />
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <p className="card-text text-muted">{recipe.description ? recipe.description.substring(0, 100) : 'No description available'}...</p>
        <div className="d-flex justify-content-between mt-2">
          <Link to={`/recipe/${recipe._id}`} className="btn btn-primary mx-1">View Recipe</Link>
          <button className="btn btn-danger mx-1" onClick={() => { 
            onDelete(recipe._id); 
            setMessage('Recipe deleted successfully!'); 
          }}>Delete</button>
          <button className="btn btn-success mx-1" onClick={handleSave}>Save</button> {/* Added Save button */}
        </div>
        {message && <div className="alert alert-info">{message}</div>}
      </div>
    </div>
  );
};

export default RecipeCard;
