import "./Portfolio.css"
import Project1 from "../../img/project0.jpeg"
import Project2 from "../../img/project1.jpg"
import Project3 from "../../img/project2.jpeg"
import Project4 from "../../img/project3.png"
import Project5 from "../../img/projct4.png"
import Project6 from "../../img/project5.png"
import Project7 from "../../img/project6.jpeg"
import Project8 from "../../img/project7.jpeg"
import { Typed } from "react-typed"

function Portfolio()
{
    return(
        <div className="portfolio" id="Portfolio">
            {/* heading */}
            <span>Recent Projects</span>
            <span>Portfolio</span>

            <div className="container">
                <div className="container1">
                    <img src={Project3} alt="" />
                    <a className="button" href=""><i class="fa-brands fa-github"></i></a>
                    <a href=""><button className="button p-btn">Demo</button></a>
                </div>
                <div className="container1">
                    <img src={Project8} alt="" />
                    <a className="button" href=""><i class="fa-brands fa-github"> </i></a>
                    <a href=""><button className="button p-btn">Demo</button></a>
                </div>
                <div className="container1">
                    <img src={Project1} alt="" />
                    <a className="button" href=""><i class="fa-brands fa-github"></i></a>
                    <a href=""><button className="button p-btn ">Demo</button></a>
                </div>
            </div>
            <a href="" target="_blank"><button className="button m-btn">More Project</button></a>
        </div>
    )
}

export default Portfolio