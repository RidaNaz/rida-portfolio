import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-600 py-20">
        PORTFOLIO
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-5 px-10">
        <ProjectCard
          src="/portfolio-web.jpg"
          title="My Portfolio Web"
          description="Welcome to my portfolio website built on Next.js! Here, you'll find a showcase of my professional skills, cretificates & projects."
        />
        <ProjectCard
          src="/45-questions.jpg"
          title="45 Questions Assignment"
          description="https://github.com/RidaNaz/
          assignment_45_ques.git"
        />
        <ProjectCard
          src="/calculator.jpg"
          title="Calculator"
          description="https://github.com/RidaNaz/
          project_calculator.git"
        />
        <ProjectCard
          src="/number-guessing-game.jpg"
          title="Number Guessing Game"
          description="https://github.com/RidaNaz/
          project_number_guessing_game.git"
        />
      </div>
      <br />
      <div className="h-full w-full flex flex-col md:flex-row gap-5 px-10">
        <ProjectCard
          src="/atm.jpg"
          title="ATM"
          description="https://github.com/RidaNaz/
          project_atm.git"
        />
        <ProjectCard
          src="/currency-converter.jpg"
          title="Currency Converter"
          description="https://github.com/RidaNaz/
          project_currency_converter.git"
        />
        <ProjectCard
          src="/word-counter.jpg"
          title="Word Counter"
          description="https://github.com/RidaNaz/
          project_word_counter.git"
        />
        <ProjectCard
          src="/student-managemnt-system.jpg"
          title="Student Management System"
          description="https://github.com/RidaNaz/
          project_student_management_system.git"
        />
      </div>
      <br />
      <div className="h-full w-full flex flex-col md:flex-row gap-5 px-10">
        <ProjectCard
          src="/adventure-game.jpg"
          title="Adventure Game"
          description="https://github.com/RidaNaz/
          project_adventure_game.git"
        />
        <ProjectCard
          src="/quiz.jpg"
          title="Quiz"
          description="https://github.com/RidaNaz/
         project_quiz.git"
        />
        <ProjectCard
          src="/countdown-timer.jpg"
          title="Countdown Timer"
          description="https://github.com/RidaNaz/
          project_countdown_timer.git"
        />
        <ProjectCard
          src="/oop-mybank.jpg"
          title="OOP MyBank"
          description="https://github.com/RidaNaz/
          project_oop_mybank.git"
        />
      </div>
    </div>
  );
};

export default Projects;