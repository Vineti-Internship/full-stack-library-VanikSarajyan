import React from 'react';

export const themes = {
    light: {
        editButton: "#1f49c7",
        deleteButton: "#cc0000",
        addButton: '#59b300'
    },
    dark: {
        editButton: "#bbb",
        deleteButton: "#333",
        addButton: "#010101"
    }
}

export const ThemeContext = React.createContext({
    theme: themes.light,
    toggleTheme: () => {}
});