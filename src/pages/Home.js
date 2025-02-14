import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import "./Home.css";

const roles = ["Application Developer", "Software Engineer", "Tech Enthusiast"];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Home Section */}
      <Element name="home">
        <div className="home-container">
          <motion.h1 
            initial={{ opacity: 0, y: -10, x: -20 }} 
            animate={{ opacity: 1, y: 20, x: 20 }} 
            transition={{ duration: 1.5 }} 
            className="hi-text">
            Hi, I'm
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: -20, x: -30 }} 
            animate={{ opacity: 1, y: 10, x: 10 }} 
            transition={{ duration: 1.5, delay: 0.5 }} 
            className="name-text">
            Ananya Arun Hosamani
          </motion.h2>

          {/* Role Text */}
          <motion.h3 
            key={index} 
            initial={{ opacity: 0, y: 250, x: -350 }} 
            animate={{ opacity: 1, y: 300, x: -350 }} 
            exit={{ opacity: 0, x: 80 }} 
            transition={{ duration: 0.8 }} 
            className="role-text enhanced-role-text">
            {roles[index]}
          </motion.h3>

          {/* Introduction Section */}
          <motion.div 
            initial={{ opacity: 1, y: 10 }} 
            animate={{ opacity: 1, y: -150 }} 
            transition={{ duration: 1.5, delay: 1 }} 
            className="intro-section">
            <h2 className="intro-title">Let me introduce myself</h2>
            <p className="intro-text">
            I’m passionate about building impactful software solutions, specializing in application development, software engineering, and problem-solving. I have a strong foundation in full-stack development, designing efficient, scalable systems that enhance user experience. With hands-on experience in projects involving machine learning, cloud computing, and deep learning, I’m always looking for new challenges to innovate and grow. My goal is to deliver high-quality, maintainable code while staying up-to-date with the latest industry trends.
            </p>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="image-section" 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.5 }}>
            <img 
              src="https://img.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487.jpg"
              alt="Ananya Arun" 
              className="profile-image" />
          </motion.div>
        </div>
      </Element>

      {/* Contact Me Section */}
      <Element name="contact">
        <div className="contact-section">
          <h2>Contact Me</h2>
          <p>Email: <a href="mailto:ananyarun17@gmail.com">ananyarun17@gmail.com</a></p>
          <p>LinkedIn: <a href="www.linkedin.com/in/ananya-arun-3712ba293" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/ananya-arun-3712ba293</a></p>
          <p>GitHub: <a href="https://github.com/Ananya-Arun" target="_blank" rel="noopener noreferrer">github.com/ananya-arun</a></p>
        </div>
      </Element>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Ananya Arun Hosamani | All Rights Reserved</p>
        <div className="footer-links">
          <a href="www.linkedin.com/in/ananya-arun-3712ba293" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Ananya-Arun" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:ananyarun17@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
