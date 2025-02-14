import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Project.css";

const projects = [
    {
      id: 1,
      title: "Human Disposition Adaptation With Reference Frame",
      description: "A deep learning project analyzing human disposition changes.",
      details: [
        "Developed an image-processing-based project to generate a new image with a different pose using one input image and a target pose.",
        "Extracted keypoints from the target image using MediaPipe.",
        "Implemented a deep learning architecture consisting of an Encoder (input image), Positional Encoder (KeyPoints of target image), and Decoder."
      ],
      image: process.env.PUBLIC_URL + "/images/human-disposition.png", // Change the filename accordingly
    },
    {
      id: 2,
      title: "Yoga Pose Estimation",
      description: "Using VGG16 for accurate yoga pose detection.",
      details: [
        "Developed a deep learning model based on VGG16 architecture for yoga pose estimation.",
        "Achieved an accuracy of **97.30%** with a validation loss of **52.82%**.",
        "Fine-tuned the model for yoga poses and validated it on new images, expanding pose prediction from **3 to 6 different poses**."
      ],
      image: process.env.PUBLIC_URL + "/images/yoga-pose.png", // Change the filename accordingly
    },
    {
      id: 3,
      title: "Movie Ticket Booking System",
      description: "A web-based ticket booking and management system.",
      details: [
        "Developed an online movie ticket booking system using **Java Swing**.",
        "Implemented **user authentication, movie selection, theater choices, and seat booking features**.",
        "Integrated **MySQL database** for managing user data, movie schedules, and booking details.",
        "Built using **NetBeans IDE**, ensuring a **user-friendly interface and automated booking process**."
      ],
      image: process.env.PUBLIC_URL + "/images/movie-ticket.jpg", // Change the filename accordingly
    },
  ];
  

const Project = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="projects-container">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: -30 }}
        transition={{ duration: 1 }}
        className="project-title"
      >
        My Projects
      </motion.h1>

      {/* Tabs for Switching */}
      <div className="project-tabs">
        {projects.map((project) => (
          <button
            key={project.id}
            className={`tab-button ${activeTab === project.id ? "active" : ""}`}
            onClick={() => setActiveTab(project.id)}
          >
            {project.title}
          </button>
        ))}
      </div>

      {/* Display Active Tab Content */}
      <div className="project-content">
        {projects.map(
          (project) =>
            activeTab === project.id && (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={project.image} alt={project.title} className="project-image" />
                <h2>{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <ul className="project-details">
                  {project.details.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};

export default Project;
