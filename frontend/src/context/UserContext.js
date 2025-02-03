import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  userId: null,
  role: null,
  assessmentId: null, 
  questionsArray: [],
  questionsMapping: {},
  answers: {},
  categories: []
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, userId: action.payload };
    case "SET_ROLE":
      return { ...state, role: action.payload };
    case "SET_ASSESSMENT":
      return { ...state, assessmentId: action.payload };
    case "CLEAR_ASSESSMENT":
      return { ...state, assessmentId: null };
    case "SET_QUESTIONS_ARRAY":
      return { ...state, questionsArray: action.payload || [] };
    case "SET_QUESTIONS_MAPPING":
      return { ...state, questionsMapping: action.payload || {} };
    case "SET_ANSWERS":
      return { ...state, answers: action.payload || {} };
    case "UPDATE_ANSWERS":
      return { ...state, answers: { ...state.answers, ...action.payload } };
    case "CLEAR_ANSWERS":
      return { ...state, answers: null };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
