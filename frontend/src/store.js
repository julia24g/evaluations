import { configureStore } from '@reduxjs/toolkit';
import { loadFromLocalStorage, saveToLocalStorage } from './utils/localStorageHelper';

// const persistedState = loadFromLocalStorage();

// const store = configureStore({
//     reducer: {
//         answers: answersReducer,
//     },
//     preloadedState: persistedState
// });

// store.subscribe(() => {
//     saveToLocalStorage(store.getState());
//   });  

// console.log(store.getState())

// export default store;
