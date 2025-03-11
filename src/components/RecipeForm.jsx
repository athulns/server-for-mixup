import { useState } from "react";

const RecipeForm = ({ onSubmit }) => {
  const [recipe, setRecipe] = useState({ title: "", description: "", image: "" });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(recipe);
    setRecipe({ title: "", description: "", image: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input type="text" name="title" className="form-control" value={recipe.title} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea name="description" className="form-control" value={recipe.description} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Image URL</label>
        <input type="text" name="image" className="form-control" value={recipe.image} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-success">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
