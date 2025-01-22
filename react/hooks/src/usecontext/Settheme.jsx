import React, { createContext, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const Themecontext = createContext()

// create provider
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")

    const themechange = () => {
        setTheme((set) => (set === "light" ? "dark" : "light"))
    }
    return (
        <Themecontext.Provider value={{ theme, themechange }}>
            {children}
        </Themecontext.Provider>
    )
}

const ChangeTheme = () => {
    const { theme, themechange } = useContext(Themecontext)

    const darktheme = {
        backgroundColor: "black",
        color: "white"
    }
    const lighttheme = {
        backgroundColor: "white",
        color: "black"
    }
    return (
        <>
            <div style={theme === "light" ? lighttheme : darktheme}>
                <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} onClick={themechange}></FontAwesomeIcon>
                <p>current theme : {theme}</p>
            </div>
        </>
    )
}

const Settheme = () => {
    return (
        <>
            <ThemeProvider>
                <ChangeTheme />
            </ThemeProvider>
        </>
    )
}
export default Settheme;