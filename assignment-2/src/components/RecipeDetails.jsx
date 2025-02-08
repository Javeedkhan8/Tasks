import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../redux/actions/favouriteActionss';

const RecipeDetails = ({ recipe }) => {
    const dispatch = useDispatch();

    return (
        <div className="recipe-details">
            <img src={recipe.image} alt={recipe.label} />
            <h2>{recipe.label}</h2>
            <p><strong>Calories:</strong> {Math.round(recipe.calories)}</p>
            <p><strong>Serving Size:</strong> {recipe.yield}</p>
            
            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredientLines.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <h3>Instructions:</h3>
            <a href={recipe.url} target="_blank" rel="noopener noreferrer">View Full Recipe</a>

            <button onClick={() => dispatch(addFavorite(recipe))}>❤️ Add to Favorites</button>
        </div>
    );
};

export default RecipeDetails;
