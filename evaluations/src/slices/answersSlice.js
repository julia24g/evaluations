import { createSlice } from '@reduxjs/toolkit';
import questionData from '../staticdata/questionData';

// Set initial state
const transformedData = {};
questionData.forEach(({ role, category, level, key, question, relatedPEOCapabilities, relatedPEOBehaviours }) => {
  if (!transformedData[role]) {
      transformedData[role] = {};
  }
  if (!transformedData[role][category]) {
      transformedData[role][category] = {};
  }
  if (!transformedData[role][category][level]) {
      transformedData[role][category][level] = {};
  }

  transformedData[role][category][level][key] = {
      question,
      relatedPEOCapabilities,
      relatedPEOBehaviours,
      answer: 0
  };
});

const initialState = {
  answers: transformedData
};

// Create the slice
const answerSlice = createSlice({
  name: 'answers', // Name of the slice
  initialState,
  reducers: {
    changeAnswer: (state, action) => { 
      const { role, category, level, questionKey, answer } = action.payload;
      if (
        state.answers[role] &&
        state.answers[role][category] &&
        state.answers[role][category][level] &&
        state.answers[role][category][level][questionKey]
      ) {
        state.answers[role][category][level][questionKey].answer = answer;
      } else {
        console.error("Invalid path in answers state:", action.payload);
      }
    },
  },

});

// Export actions
export const { changeAnswer } = answerSlice.actions;

// Export the reducer to be added to the Redux store
export default answerSlice.reducer;
