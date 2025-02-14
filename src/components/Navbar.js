import React from "react";
import { Link as RouterLink } from "react-router-dom"; // React Router Link for Skills, Projects, and Home
import { Link as ScrollLink } from "react-scroll";  // React Scroll Link for Contact
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const menuItems = [
    { name: "Home", path: "/", isScrollLink: false }, // Route to Home page
    { name: "Skills", path: "/skills", isScrollLink: false }, // Route to Skills page
    { name: "Projects", path: "/projects", isScrollLink: false }, // Route to Projects page
    { name: "Contact", target: "contact", isScrollLink: true }, // Scroll to Contact section
  ];

  return (
    <nav className="navbar">
      <div className="logo">My Portfolio</div>
      <ul className="nav-menu">
        {menuItems.map((item, index) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            {item.isScrollLink ? (
              // Scroll behavior for Contact
              <ScrollLink 
                to={item.target}  // Scroll to the section with this target
                smooth={true}      // Smooth scroll
                duration={500}     // Duration of the scroll in ms
                offset={-50}       // Optional: Adjust scroll position
              >
                {item.name}
              </ScrollLink>
            ) : (
              // React Router Link for Home, Skills, and Projects
              <RouterLink to={item.path}>
                {item.name}
              </RouterLink>
            )}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
