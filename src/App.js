import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Service from "./Components/MyService/Service";
import Portfolio from "./Components/Portfolio/Portfolio";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import "./App.css";
import { themeContext } from "./Context";
import { useContext } from "react";


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{background : darkMode? 'black':'',color : darkMode? 'white':''}} >
      <Navbar></Navbar>
      <Intro></Intro>
      <About></About>
      <Service></Service>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
