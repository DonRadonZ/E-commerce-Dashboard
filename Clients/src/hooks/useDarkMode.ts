import { useContext } from "react"
import { DarkModeContext } from "../contexts/DarkModeContext"

function useDarkMode() {
    const context = useContext(DarkModeContext);
    if(context === undefined) throw new Error
    ('DarkModeContext was outside of DarkmodeProvider')
    return context;
}

export default useDarkMode
