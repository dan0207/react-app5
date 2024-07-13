// import PropTypes from 'prop-types'

import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

function ThemeDropdown() {
    const {theme, toggleTheme} = useContext(ThemeContext)

    const lightTheme = () => {
        toggleTheme('light')
    }

    const darkTheme = () => {
        toggleTheme('dark')
    }

    return (
        <>
            <div className="dropdown">
                <button className="btn btn-md dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Theme
                </button>
                <ul className="dropdown-menu dropdown-menu-end text-center">
                    <li><button onClick={lightTheme} className="dropdown-item">Light</button></li>
                    <li><button onClick={darkTheme} className="dropdown-item">Dark</button></li>
                </ul>
            </div>
        </>
    )
}

ThemeDropdown.propTypes = {}

export default ThemeDropdown
