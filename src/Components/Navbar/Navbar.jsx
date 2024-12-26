import React, { useState } from "react";
import "./Navbar.css"
import Logo from "../../img/1.png"
import Toggle from "../Toggle/Toggle";
import {Link} from "react-scroll"
import About from "../About/About";
import Service from "../MyService/Service";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import { themeContext } from "../../Context";
import { useContext } from "react";

function Navbar()
{
        const theme = useContext(themeContext);
        const darkMode = theme.state.darkMode;

    const [mobile,setmobile] = useState(false)

    return(
        <div className="n-wrapper">
            <div className="n-left">
                <img src={Logo} alt="" />
                <div className="n-name"> Naveen</div>
               <Toggle></Toggle>
            </div>
            <div className="n-right">
                <div className= {mobile? ".nav-links-mobile" : "n-list" } onClick={()=>setmobile(false)}>
                    <ul style={{listStyle:"none"}} style={{color: darkMode? 'black':""}}>
                    <Link spy={true} to="Navbar" activeClass="activeClass" smooth={true}><li>Home</li>
                    </Link>
                    <Link spy={true} to="About"  smooth={true}><li>About</li>
                    </Link>
                    <Link spy={true} to="Service"  smooth={true}> <li>Service</li>
                    </Link>
                    <Link spy={true} to="Portfolio"  smooth={true}><li>Project</li>
                    </Link>
                    <Link spy={true} to="Skills"  smooth={true}><li>Skills</li>
                    </Link>
                    
                    </ul>
                </div>
                <button className="button n-button">Contact </button>
            </div>
            <button className="mobile-menu-icon" onClick={()=>setmobile(!mobile)} style={{color: darkMode? 'white':""}} > 
                {mobile? <i class="fa-solid fa-x"></i>: <i class="fa-solid fa-bars"></i>  }
                </button>
        </div>
    )
}

export default Navbar