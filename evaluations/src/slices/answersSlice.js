import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
  answers: {}
};

// Create the slice
const answerSlice = createSlice({
  name: 'answers', // Name of the slice
  initialState,
  reducers: {
    changeAnswer: (state, action) => {
      const { questionKey, answer } = action.payload;
      state.answers[questionKey] = answer; // Update the answer for the question
    },
  },

});

// Export actions
export const { changeAnswer } = answerSlice.actions;

// Export the reducer to be added to the Redux store
export default answerSlice.reducer;
