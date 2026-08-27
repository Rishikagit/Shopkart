import { createContext, useReducer } from "react";

// 1. Create Context
export const ThemeContext = createContext();

// 2. Initial state
const initialState = {
  theme: "light",
};

// function to handle state changes based on dispatched actions
function themeReducer(state, action) {
  console.log("Reducer function is running");
  console.log("Current State:", state);
  console.log("Action received:", action);

  switch (action.type) {
    case "TOGGLE_THEME":
      console.log("TOGGLE_THEME case is running");

      const newTheme =
        state.theme === "light" ? "dark" : "light";

      console.log("New Theme:", newTheme);

      return {
        theme: newTheme,
      };
  }
}

// 
export function ThemeProvider({ children }) {
  console.log("ThemeProvider function is running");
  
  const [state, dispatch] = useReducer(
    themeReducer,
    initialState
  );

  console.log("Current Theme:", state.theme);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}