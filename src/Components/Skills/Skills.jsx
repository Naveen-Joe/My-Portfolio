import React from "react";
import "./Skills.css"
import Skill1 from "../../img/Logo/Html.PNG"
import Skill2 from "../../img/Logo/CSS.PNG"
import Skill3 from "../../img/Logo/Javas.PNG"
import Skill4 from "../../img/Logo/Tailwind.PNG"
import Skill5 from "../../img/Logo/React.PNG"
import Skill6 from "../../img/Logo/MongoDb.PNG"
import Skill7 from "../../img/Logo/Firebase.PNG"
import Skill8 from "../../img/Logo/Node.PNG"
import Skill9 from "../../img/Logo/Github.PNG"
import Skill0 from "../../img/Logo/VsCode.PNG"
import { themeContext } from "../../Context";
import { useContext } from "react";

function Skills()
{
        const theme = useContext(themeContext);
        const darkMode = theme.state.darkMode;
    return(
        <div className="skill" id="Skills">
            <div className="skill-0">
            <span style={{color: darkMode? 'white':""}}>My</span>
            <span>Skills</span>
            </div>
            <div className="slider" style={{marginTop:'2rem'}}>
            <div className="s-container"  style={{color: darkMode? 'white':"", zIndex:"5"}}>
            <div className="skill-1">
                <img src={Skill1} alt=""/>
                <h1>HTML</h1>
            </div>
            <div className="skill-1">
                <img src={Skill2} alt="" />
                <h1>CSS</h1>
            </div>
            <div className="skill-1">
                <img src={Skill3} alt="" />
                <h1>Java Script</h1>
            </div>
            <div className="skill-1">
                <img src={Skill4} alt="" />
                <h1>Tailwind Css</h1>
            </div>
            <div className="skill-1">
                <img src={Skill5} alt="" />
                <h1>React Js</h1>
            </div>
            <div className="skill-1">
                <img src={Skill6} alt="" />
                <h1>Mongo DB</h1>
            </div>
            <div className="skill-1">
                <img src={Skill7} alt="" />
                <h1>Firebase</h1>
            </div>
            <div className="skill-1">
                <img src={Skill8} alt="" />
                <h1>Node Js</h1>
            </div>
            <div className="skill-1">
                <img src={Skill9} alt="" />
                <h1>GitHub</h1>
            </div>
            <div className="skill-1">
                <img src={Skill0} alt="" />
                <h1>Vs Code</h1>
            </div>
            <div className="skill-1">
                <img src={Skill1} alt=""/>
                <h1>HTML</h1>
            </div>
            <div className="skill-1">
                <img src={Skill2} alt="" />
                <h1>CSS</h1>
            </div>
            <div className="skill-1">
                <img src={Skill3} alt="" />
                <h1>Java Script</h1>
            </div>
            <div className="skill-1">
                <img src={Skill4} alt="" />
                <h1>Tailwind Css</h1>
            </div>
            <div className="skill-1">
                <img src={Skill5} alt="" />
                <h1>React Js</h1>
            </div>
            <div className="skill-1">
                <img src={Skill6} alt="" />
                <h1>Mongo DB</h1>
            </div>
            <div className="skill-1">
                <img src={Skill7} alt="" />
                <h1>Firebase</h1>
            </div>
            <div className="skill-1">
                <img src={Skill8} alt="" />
                <h1>Node Js</h1>
            </div>
            <div className="skill-1">
                <img src={Skill9} alt="" />
                <h1>GitHub</h1>
            </div>
            <div className="skill-1">
                <img src={Skill0} alt="" />
                <h1>Vs Code</h1>
            </div>
            <div className="skill-1">
                <img src={Skill1} alt=""/>
                <h1>HTML</h1>
            </div>
            <div className="skill-1">
                <img src={Skill2} alt="" />
                <h1>CSS</h1>
            </div>
            <div className="skill-1">
                <img src={Skill3} alt="" />
                <h1>Java Script</h1>
            </div>
            <div className="skill-1">
                <img src={Skill4} alt="" />
                <h1>Tailwind Css</h1>
            </div>
            <div className="skill-1">
                <img src={Skill5} alt="" />
                <h1>React Js</h1>
            </div>
            <div className="skill-1">
                <img src={Skill6} alt="" />
                <h1>Mongo DB</h1>
            </div>
            <div className="skill-1">
                <img src={Skill7} alt="" />
                <h1>Firebase</h1>
            </div>
            <div className="skill-1">
                <img src={Skill8} alt="" />
                <h1>Node Js</h1>
            </div>
            <div className="skill-1">
                <img src={Skill9} alt="" />
                <h1>GitHub</h1>
            </div>
            <div className="skill-1">
                <img src={Skill0} alt="" />
                <h1>Vs Code</h1>
            </div>
            </div>
            </div>

        </div>
    )
}

export default Skills