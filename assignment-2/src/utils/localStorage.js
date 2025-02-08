const FAVOURITES_KEY = 'favouriteRecipes';

export const saveToFavourites = (recipe) => {
    let favourites = getFavorites();
    if(!favourites.find(fav => fav.uri === recipe.uri)){
        favourites.push(recipe);
        localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
    }
}

export const removeFromFavourites = (recipeUri) => {
    let favourites = getFavorites().filter(recipe.uri !==recipeUri)
    localStorage.setItem(FAVOURITES_KEY,JSON.stringify(favourites));
};

export const getFavorites = () => {
    return JSON.parse(localStorage.getItem(FAVOURITES_KEY))
}