import React from "react"
import "./Service.css"
import Heartemoji from "../../img/heartemoji.png"
import Card from "../Card/Card"
import Glass from "../../img/glasses.png"
import Emoji from "../../img/humble.png"
import Resume from "../resumePortfolio.pdf"
import { themeContext } from "../../Context";
import { useContext } from "react";

function Service()
{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="services" id="Service">
         {/* leftSide */}
        <div className="left-side">
            <div className="awesome">
            <span style={{color: darkMode? 'white':""}}>My Awesome </span>
            <span>Services</span>
            <span  style={{color: darkMode? 'white':""}}>I build a scalable Website like E-Commerce,<br /> Portfolio and Mobile Application </span>
             <a href={Resume} download={Resume}><button className="button s-button">Downoad CV</button></a>
             <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>           
            </div>
        </div>
        {/* rightSide */}
        
        <div className="cards" >
           <div className="card" id="IdCard1">
            <Card
            emoji = {Heartemoji}
            heading = {"FrontEnd Developer"}
            detail = {"Html, Css, Java Script, TailwindCss, React"}
            ></Card>
           </div>    

             {/*Second card  */}
             <div  className="card" id="IdCard2" style={{left:"-4rem",top:"12rem"}}>
            <Card
            emoji = {Glass}
            heading = {"Mobile Web Developer"}
            detail = {"Bild a scalable website like e-commerce and music app."}
            ></Card>
           </div>

           {/* Third card     */}
           <div  className="card" id="IdCard3" >
            <Card
            emoji = {Emoji}
            heading = {"Full Stack Devoloper"}
            detail = {"To build a authentication website using MERN"}
            ></Card>
           </div>   
           <div className="blur s-blur2"></div> 
        </div>
        </div>
    )   
}

export default Service
