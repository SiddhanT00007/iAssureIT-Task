import React, { useEffect, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon , } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";


const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 0) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  }, []);

  return (
    <>
    <div className="container">
      <header className={isScrolled ? 'scrolled' : 'header'}>
        <div className="mail-container header-top">
          
            <FontAwesomeIcon className="envelop" icon={faMobile} /><p className="text-light my-3">+91 12345 67890</p> 
          <p className="mx-3"></p>
            <FontAwesomeIcon className="envelop" icon={faEnvelope} /><p className="text-light my-3">info@company.com</p> 

            
          
        </div>
      </header>
      </div>
      <div className="container-fluid">
      <header className="topbar">
        <nav className="navbar">
          <h2 className="logo"> LOGO  </h2>
          <div className="nav-links">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT US</a>
            <a href="#services">SERVICES</a>
            <a href="#testimonials">TESTIMONIALS</a>
            <a href="#blog">BLOGS</a>
            <a href="#contact">CONTACT</a>
        </div>
        </nav>
      </header>
      </div>
      </>
  );
};

export default Header;
