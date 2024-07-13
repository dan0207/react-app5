import { useContext } from "react";
import ContextComponent from "../context/ContextComponent";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function ThemeSwitch() {
    const { darkMode, toggleDarkTheme } = useContext(ContextComponent)
    return (
        <>
            <div className="form-check form-switch d-flex align-items-center">
                <input onChange={toggleDarkTheme} className="form-check-input" type="checkbox" role="button" id="flexSwitchCheckDefault" />
                <label className="form-check-label fs-4 ps-1" htmlFor="flexSwitchCheckDefault">
                    {darkMode ? <MdDarkMode /> : <CiLight />}
                </label>
            </div>
        </>
    )
}

export default ThemeSwitch