import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { fetcheRecipes } from "../../services/api";

export const getRecipes = createAsyncThunk('recipes/getRecipes',async(query) => {
    const data = await fetcheRecipes(query);
    return data;
});

const recipeSlice = createSlice({
    name : 'recipes',
    initialState : {
        items: [],
        loading:false,
        error: null
    },
    reducers : {},
    extraReducers: (builder) => {
        builder
            .addCase(getRecipes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getRecipes.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(getRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    }
})

export default recipeSlice.reducer