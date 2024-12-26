import React from "react";
import "./Toggle.css"
import { themeContext } from "../../Context";
import { useContext } from "react";

function Toggle()
{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode
    
    const handleClick= () =>{
        theme.dispatch({type:'toggle'})
    }
    return(
        <div className="toggle" onClick={handleClick}>
           <i class="fa-solid fa-sun"></i>
            <i class="fa-regular fa-moon"></i>
            <div className="t-button"  style={darkMode? {left:'2px'}: {right:'2px'}}>
              
            </div>
        </div> 
   )
}

export default Toggle