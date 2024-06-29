// StateProvider.js (example)
import React, { createContext, useContext, useReducer } from "react";

// Create a context for the state
export const StateContext = createContext();

// Wrap your app with this provider to provide the state globally
export const StateProvider = ({ reducer, initialState , children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Custom hook to use the state value and dispatch function
export const useStateValue = () => useContext(StateContext);
