import React,{ useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const Header = () => {
  const {darkMode,handleClick,color} = useContext(ThemeContext);


  return (
    <div className="Header">
      <h1 style={{color}}>ReactHooks</h1>
      <button type="button" onClick={handleClick}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  );
}

export default Header;



