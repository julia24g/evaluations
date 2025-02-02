import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  userId: null,
  assessmentId: null, 
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, userId: action.payload };
    case "SET_ASSESSMENT":
      return { ...state, assessmentId: action.payload };
    case "CLEAR_ASSESSMENT":
      return { ...state, assessmentId: null };
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
