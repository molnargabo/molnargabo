import { useState } from "react";
import themeContext from "../context/themeContext";
const ThemeState = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <themeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {props.children}
    </themeContext.Provider>
  );
};

export default ThemeState;
