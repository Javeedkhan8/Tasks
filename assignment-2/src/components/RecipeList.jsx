import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes } from '../redux/actions/recipeActions';
import RecipeCard from './RecipeCard';

const RecipeList = ({ searchQuery }) => {
    const dispatch = useDispatch();
    const { items: recipes, loading, error } = useSelector((state) => state.recipes);

    useEffect(() => {
        if (searchQuery) {
            dispatch(getRecipes(searchQuery));
        }
    }, [searchQuery, dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching recipes.</p>;

    return (
        <div className="recipe-list">
            {recipes.length > 0 ? recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
            )) : <p>No recipes found.</p>}
        </div>
    );
};

export default RecipeList;
