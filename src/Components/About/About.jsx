import React from "react";
import "./About.css"
import { themeContext } from "../../Context";
import { useContext } from "react";
import Resume from "../resumePortfolio.pdf"

function About()
{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
 return(
    <div className="about" id="About">
      
        <h1 className="about-1" style={{color: darkMode? 'black':""}}>About Me </h1>
        <p>Hi, I'm Naveen, a MERN Stack Developer with a passion for building dynamic and user-friendly web applications. I specialize in React.js for front-end, Node.js and Express.js for back-end, and MongoDB for efficient data management. I love solving challenges with clean, scalable code and staying updated with the latest in web development. Let’s create something amazing together!</p>
        <a href={Resume} download={Resume} ><button className="button i-button">Download Resume</button></a>
      
    </div>
 )   
}

export default About