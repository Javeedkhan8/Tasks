import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../redux/actions/favouriteActionss';

const RecipeCard = ({ recipe }) => {
    const dispatch = useDispatch();

    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.label} />
            <h3>{recipe.label}</h3>
            <button onClick={() => dispatch(addFavorite(recipe))}>❤️ Favorite</button>
        </div>
    );
};

export default RecipeCard;
