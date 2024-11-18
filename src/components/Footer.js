import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>StackVerse</h2>
        <p>Empowering developers, one stack at a time.</p>
        <div className="social-links">
          <a href="https://www.instagram.com/stack_verse/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.instagram.com/stack_verse/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/stack_verse/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 StackVerse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
