"use client";
import React, { createContext, useReducer, useContext, useEffect } from "react";


const initialState = {
  userInfo: {},
  assessmentId: null, 
  questionsArray: [],
  questionsMapping: {},
  answers: {},
  categories: [],
  resultStore: {}
};

const safeParse = (key, fallback) => {
  if (typeof window === "undefined") {
    return fallback;
  }
  
  try {
    const item = localStorage.getItem(key);
    return item && item !== "undefined" ? JSON.parse(item) : fallback;
  } catch (error) {
    console.error(`Error parsing localStorage key "${key}":`, error);
    return fallback;
  }
};


const storedState = {
  userInfo: safeParse("userInfo", null),
  role: safeParse("role", null),
  assessmentId: safeParse("assessmentId", null),
  questionsArray: safeParse("questionsArray", []),
  questionsMapping: safeParse("questionsMapping", {}),
  answers: safeParse("answers", {}),
  categories: safeParse("categories", [])
};

const userReducer = (state, action) => {
  let newState = state;

  switch (action.type) {
    case "SET_USER_INFO":
      newState = { ...state, userInfo: action.payload || {} };
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      break;
    case "SET_ASSESSMENT":
      newState = { ...state, assessmentId: action.payload };
      localStorage.setItem("assessmentId", JSON.stringify(action.payload));
      break;
    case "CLEAR_ASSESSMENT":
      newState = { ...state, assessmentId: null };
      localStorage.removeItem("assessmentId");
      break;
    case "SET_QUESTIONS_ARRAY":
      newState = { ...state, questionsArray: action.payload || [] };
      localStorage.setItem("questionsArray", JSON.stringify(action.payload));
      break;
    case "SET_QUESTIONS_MAPPING":
      newState = { ...state, questionsMapping: action.payload || {} };
      localStorage.setItem("questionsMapping", JSON.stringify(action.payload));
      break;
    case "SET_ANSWERS":
      newState = { ...state, answers: action.payload || {} };
      localStorage.setItem("answers", JSON.stringify(action.payload));
      break;
    case "UPDATE_ANSWERS":
      newState = { ...state, answers: { ...state.answers, ...action.payload } };
      localStorage.setItem("answers", JSON.stringify(newState.answers));
      break;
    case "CLEAR_ANSWERS":
      newState = { ...state, answers: {} };
      localStorage.removeItem("answers");
      break;
    case "SET_CATEGORIES":
      newState = { ...state, categories: action.payload || [] };
      localStorage.setItem("categories", JSON.stringify(action.payload));
      break;
    case "SET_RESULTSTORE":
      newState = { ...state, resultStore: action.payload || {} };
      localStorage.setItem("resultStore", JSON.stringify(action.payload));
      break;
    case "LOGOUT":
      localStorage.removeItem("userInfo");
      localStorage.removeItem("assessmentId");
      localStorage.removeItem("answers");
      localStorage.removeItem("resultStore");
      return initialState;
    default:
      return state;
  }

  return newState;
};

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, storedState);

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    localStorage.setItem("assessmentId", JSON.stringify(state.assessmentId));
    localStorage.setItem("questionsArray", JSON.stringify(state.questionsArray));
    localStorage.setItem("questionsMapping", JSON.stringify(state.questionsMapping));
    localStorage.setItem("answers", JSON.stringify(state.answers));
    localStorage.setItem("categories", JSON.stringify(state.categories));
    localStorage.setItem("resultStore", JSON.stringify(state.resultStore));
  }, [state]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
