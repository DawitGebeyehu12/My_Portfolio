import React from 'react';

const Projects = ({ theme }) => {
  const projects = [
    {
      name: " QR Code Generator",
      description: "This project is a QR Code Generator built using React.js. Users can input text, and the app will generate a customized QR code. Additionally, users can change the QR code color, set a background color, and even upload a custom background image for the QR code.",
      image: "/images/project-1.png",
      github: "https://github.com/DawitGebeyehu12/QR-code-generator"
    },
    {
      name: "Expense Tracker",
      description: "This project is a React.js based Expense Tracker that helps users manage their personal finances by tracking their income and expenses. Users can add new transactions, view a summary of their balance, income, and expenses, and delete transactions.",
      image: "/images/project-2.png",
      github: "https://github.com/DawitGebeyehu12/Expense_Tracker"
    },
    {
      name: "Todolist",
      description: "This project is a simple yet feature-rich Todo List application built using React.js. The app allows users to add tasks with specific due dates and times, manage task statuses (active, completed, overdue), and filter tasks by their state. It also tracks the remaining time for each task and highlights urgent or overdue tasks.",
      image: "/images/project-3.png",
      github: "https://github.com/DawitGebeyehu12/Todolist"
    },
    {
      name: "Tic Tac Toe",
      description: "This is a simple implementation of the classic Tic Tac Toe game built using React. The game allows two players to take turns marking the cells in a 3x3 grid with 'X' and 'O'. The first player to align three marks in a row (horizontally, vertically, or diagonally) wins. If all the cells are filled without a winner, the game ends in a tie.",
      image: "/images/project-4.png",
      github: "https://github.com/DawitGebeyehu12/Tic-Tac-Toe"
    }
  ];

  return (
    <section id="projects" className="w-full">
      <div className="text-center mb-8">
        <h1 className="title">Projects</h1>
      </div>
      <div className="experience-details-container">
        <div className="projects-container">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${theme === 'dark' ? 'dark' : ''}`}
            >
             
             
             <div className="project-content">

             <div className="project-image-container">
               <img 
                    src={project.image} 
                     alt={`Project ${index + 1}`} 
                     className="project-img w-full h-[300px] object-cover" // Added sizing classes
               />
             </div>
                <div className="project-info">
                  <h2 className="project-title">
                    {project.name}
                  </h2>
                  <p className="project-description">
                    {project.description}
                  </p>
                  <div className="btn-container">
                    <button 
                      className="btn btn-color-2 project-btn"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      Github
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;