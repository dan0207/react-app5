import { useEffect, useState } from "react"
import ContextComponent from "../context/ContextComponent"


function ThemeProvider({ children }) {
    const [darkMode, setdarkMode] = useState(false)

    const toggleDarkTheme = () => {
        setdarkMode(!darkMode)
    }

    useEffect(() => {
        const htmlElement = document.querySelector('html');
        htmlElement.setAttribute('data-bs-theme',
            darkMode ? 'dark' : 'light');
    }, [darkMode])


    return (
        <ContextComponent.Provider value={{ darkMode, toggleDarkTheme }}>{children}</ContextComponent.Provider>
    )
}


export default ThemeProvider


