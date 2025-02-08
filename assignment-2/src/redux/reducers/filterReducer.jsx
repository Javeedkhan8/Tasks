import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        category: '',
    },
    reducers: {
        setFilter: (state, action) => {
            state.category = action.payload;
        }
    }
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
