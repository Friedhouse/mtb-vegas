import { createSlice } from '@reduxjs/toolkit';
import { COMMENTS } from '../app/shared/COMMENTS';

const initialState = {
    commentsArray: COMMENTS
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            console.log(action.payload);
            console.log(state.commentsArray);
            const newComment = {
                id: state.commentsArray.length + 1,
                ...action.payload
            };
            state.commentsArray.push(newComment);
        }
    }
});

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

export const selectCommentsByTrailId = (trailId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.trailId === parseInt(trailId)
    );
};
