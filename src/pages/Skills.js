import React from "react";
import "./Skills.css"; 
import { FaCode, FaDatabase, FaNetworkWired, FaCogs, FaPython, FaReact, FaNodeJs, FaHtml5, FaJava, FaUsers, FaCheckCircle } from "react-icons/fa";

const technicalSkills = [
  { name: "Data Structures & Algorithms", icon: <FaCogs /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Computer Networks", icon: <FaNetworkWired /> },
  { name: "OOPS", icon: <FaCogs /> },
  { name: "Operating Systems", icon: <FaCogs /> }
];

const programmingLanguages = [
  { name: "C", icon: <FaCode /> },
  { name: "C++", icon: <FaCode /> },
  { name: "Java (Basics)", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "React.js", icon: <FaReact /> }
];

const softSkills = [
  { name: "Good Communication Skills", icon: <FaUsers /> },
  { name: "Team Player", icon: <FaCheckCircle /> },
  { name: "Hardworking", icon: <FaCheckCircle /> }
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>

      {/* Technical Skills Section */}
      <div className="skills-section">
        <h3 className="section-title">Technical Skills</h3>
        <div className="skills-grid">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h4>{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Programming Languages Section */}
      <div className="skills-section">
        <h3 className="section-title">Programming Languages</h3>
        <div className="skills-grid">
          {programmingLanguages.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h4>{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="skills-section">
        <h3 className="section-title">Soft Skills</h3>
        <div className="skills-grid">
          {softSkills.map((skill, index) => (
            <div key={index} className="skill-card soft-skill">
              <div className="skill-icon">{skill.icon}</div>
              <h4>{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
