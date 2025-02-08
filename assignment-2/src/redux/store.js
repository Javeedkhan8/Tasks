import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './reducers/recipeReducer';
import favoritesReducer from './reducers/favouritesReducer';
import filterReducer from './reducers/filterReducer';

const store = configureStore({
    reducer: {
        recipes: recipeReducer,
        favorites: favoritesReducer,
        filters: filterReducer
    }
});

export default store;
