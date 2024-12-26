import React, { useContext } from "react";
import "./Intro.css"
import Github from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import Glass from "../../img/glassesimoji.png"
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Profile from "../../img/Profile.png"
import { themeContext } from "../../Context";

function Intro()
{


    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
   
    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color:darkMode?"white":""}}></span>                
                    <span>Hey! I Am</span>                    
                    <span>Naveen C </span>
                    <span> Mern Stack Developer and I build a scalable website  with HTML, CSS, JAVASCRIPT
                     and Framework Like REACT. </span>
                </div>
                <button className="button i-button">Hire Me</button>
                <div className="i-icons">
                    <a href="https://github.com/" target="-blank"><img src={Github} alt=""/></a>
                    <a href="https://www.linkedin.com/in/naveen-c-146167293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"><img src={LinkedIn} alt="" /></a>
                    <a href="https://www.instagram.com/joe_officl/?hl=en"><img src={Instagram} alt="" /></a>
                </div>
            </div>
            <div className="i-right">
                <img className="profile" src={Profile} alt="" />
                <img className="floating-div"  id="glass"         
                src={Glass} alt="" />
                <div className="web" style={{top:"-4%",left:"68%"}}>
                    <FloatingDiv image={Crown} txt1="Web" txt2="Developer" className="floating-div"/>
                </div>
                <div  className="best"  style={{top:"18rem",left:"0rem"}}>
                    <FloatingDiv image={Thumbup} txt1="Best Design" txt = "Award"></FloatingDiv>
                </div>
                {/* blur Div */}
                <div className="blur" style={
                    {
                        backgroundColor:"rgb(238 210 255)"
                    }
                    }></div>
                <div className="blur" style={
                    {
                        background:"#C1F5FF",
                        top:"17rem",
                        width:"21rem",
                        height:"11rem",
                        left:"-9rem"
                    }
                }></div>
            </div>
        </div>

    )
}

export default Intro