import React, {useState} from 'react'

export const ThemeContext = React.createContext(null);


export  const ThemeContextProvider = (props) => {
    const color = 'cyan'
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () => {
      setDarkMode(!darkMode);
    }

    return(
        <ThemeContext.Provider value={{
            setDarkMode,
            handleClick,
            darkMode,
            color
        }}>
  
            {props.children}
        
        </ThemeContext.Provider>
    )
}


