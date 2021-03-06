import React from 'react';

//function to check users apperance preference
// this func will be used in themeProvider for initial state hook
const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
        
    } const storedPrefs = window.localStorage.getItem("color-theme")
    if (typeof storedPrefs === "string") {
        return storedPrefs
    }

    const userMedia = window.matchMedia("(prefers-color-scheme:dark)");
    if (userMedia.matches) {
        return "dark"
    }

    return "light"
}

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
    const [theme, setTheme] = React.useState(getInitialTheme)

    //this func takes theme as params
    const rawSetTheme = (rawTheme) => {
        const root = window.document.documentElement
        const isDark = rawTheme === "dark"

        root.classList.remove(isDark ? "light" : "dark")
        root.classList.add(rawTheme)

        localStorage.setItem("color-theme", rawTheme)
    }

    if (initialTheme) {
        rawSetTheme(initialTheme)
    }


    React.useEffect(() => {
        rawSetTheme(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}