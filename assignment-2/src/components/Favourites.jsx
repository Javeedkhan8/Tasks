import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../redux/actions/favouriteActionss';

const Favorites = () => {
    const favorites = useSelector((state) => state.favorites.items);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>My Favorites</h2>
            {favorites.length > 0 ? (
                favorites.map((recipe, index) => (
                    <div key={index} className="recipe-card">
                        <img src={recipe.image} alt={recipe.label} />
                        <h3>{recipe.label}</h3>
                        <button onClick={() => dispatch(removeFavorite(recipe.uri))}>❌ Remove</button>
                    </div>
                ))
            ) : (
                <p>No favorite recipes yet.</p>
            )}
        </div>
    );
};

export default Favorites;
