import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        items: JSON.parse(localStorage.getItem('favoriteRecipes')) || []
    },
    reducers: {
        addFavorite: (state, action) => {
            if (!state.items.find(recipe => recipe.uri === action.payload.uri)) {
                state.items.push(action.payload);
                localStorage.setItem('favoriteRecipes', JSON.stringify(state.items));
            }
        },
        removeFavorite: (state, action) => {
            state.items = state.items.filter(recipe => recipe.uri !== action.payload);
            localStorage.setItem('favoriteRecipes', JSON.stringify(state.items));
        }
    }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
