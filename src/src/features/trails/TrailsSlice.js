import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import { TRAILS } from '../app/shared/TRAILS';
import { baseUrl } from '../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL.js';

export const fetchTrails = createAsyncThunk(
    'trails/fetchTrails',
    async () => {
        const response = await fetch(baseUrl + 'trails');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    trailsArray: [],
    isLoading: true,
    errMsg: ''
};

const trailsSlice = createSlice({
    name: 'trails',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTrails.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchTrails.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = null;
            state.trailsArray = mapImageURL(action.payload);
        },
        [fetchTrails.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const trailsReducer = trailsSlice.reducer;

export const selectAllTrails = (state) => {
    return state.trails.trailsArray;
};

export const selectTrailsById = (id) => (state) => {
    return state.trails.trailsArray.find(
        (trail) => trail.id === parseInt(id)
    );
};

export const selectFeaturedTrail = (state) => {
    return {
        featuredItem: state.trails.trailsArray.find(
            (trail) => trail.featured
        ),
        isLoading: state.trails.isLoading,
        errMsg: state.trails.errMsg
    };
};
