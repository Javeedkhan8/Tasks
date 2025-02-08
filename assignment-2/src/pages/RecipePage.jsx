import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RecipeDetails from '../components/RecipeDetails';

const RecipePage = () => {
    const { id } = useParams();
    const recipe = useSelector(state => 
        state.recipes.items.find(r => r.uri === decodeURIComponent(id))
    );

    return (
        <div>
            {recipe ? <RecipeDetails recipe={recipe} /> : <p>Recipe not found</p>}
        </div>
    );
};

export default RecipePage;
