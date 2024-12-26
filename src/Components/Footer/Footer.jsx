import React from "react";
import "./Footer.css"
import Wave from "../../img/wave.png"
import Insta from "../../img/instagram.png"
import FaceBook from "../../img/Facebook.png"
import Github from "../../img/github.png"
function Footer()
{
    return(
        <div className="footer">
            <img src={Wave} alt="" style={{width:"100%"}}/>
            <div className="f-content">
                <span>Naveenvjv007@gmail.com</span>
                <div className="f-icons">
                <a target="_blank" href="https://www.instagram.com/joe_officl/?hl=en"> <img src={Insta} alt=""/></a>
                  <img src={FaceBook} alt="" />
                 <a href="https://github.com/" target="_blank"><img src={Github} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer