import { createContext } from "react";

export const themes = {
    primary: {
        background: '#000',
        color: '#EFEFEF'
    },
    secondary: {
        background: '#EFEFEF',
        color: '#000'
    }
}

export const ThemeContext = createContext(themes.secondary)