import React from 'react'
import './ToggleMode.css'
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleMode = (props) => {
    const { theme, setTheme } = props;
    const ToggleTheme = () => {
        theme === "#f7f7f7" ? setTheme("#15202b") : setTheme("#f7f7f7")
    }

    return (
        <div className="toggle">
            <button onClick={ToggleTheme}>
                {theme === "#f7f7f7" ? <FaSun className="FaSun" /> : <FaMoon className="FaMoon" />}
            </button>
        </div>
    )
}

export default ToggleMode