const RecipeView = ({ recipe }) => {
    if (!recipe) return <p className="text-center">Recipe not found!</p>;
  
    return (
      <div className="container mt-5">
        <div className="card shadow-lg">
          <img src={recipe.image} className="card-img-top" alt={recipe.title} />
          <div className="card-body">
            <h2 className="card-title">{recipe.title}</h2>
            <p className="text-muted">{recipe.description}</p>
            <h4>Ingredients</h4>
            <ul className="list-group">
              {recipe.ingredients.map((item, index) => (
                <li key={index} className="list-group-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default RecipeView;
  