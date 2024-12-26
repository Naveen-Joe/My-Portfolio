import React, { useState } from "react";
import "./Contact.css"
import  emailjs from "@emailjs/browser";
import { useRef } from "react";
import { themeContext } from "../../Context";
import { useContext } from "react";

function Contact()
{
      const form = useRef();
      const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_007', 'template_007', form.current, {
        publicKey: 'WwTIxKMGJ0E_duNN9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true)        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span style={{color: darkMode? 'white':""}}>Get In Touch</span>
                    <span>Contact Me</span>
                    <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail} >
                    <input type="text" name="user_name" placeholder="Name" className="user" />
                    <input type="text" name="user_email" placeholder="Email" className="user" />
                    <textarea type="text" name="message" placeholder="Message" className="user" />
                    <input type="submit" value="Send" className="button" />
                    <span>{done && "Thanks for contacting me"}</span>
                    <div className="blur c-blur1" style={{background:"var(--purple)"}}></div>
                </form>
            </div>
        </div>
    )
}
export default Contact