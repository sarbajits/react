import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const [themeButton, setThemeButton] = useState("dark_mode");

    return (
        <ThemeContext.Provider value={{ theme, setTheme, themeButton, setThemeButton }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
