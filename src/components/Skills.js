import React from "react";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-container">
        <h1 className="devsk-h1">Developer Skills</h1>

        <div className="skills">
          <div className="skill-div">
            <h4>Front End</h4>
            <ul>
              <li>HTML</li>
              <li>CSS/SCSS/SASS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>jQuery</li>
              <li>Material-UI</li>
              <li>React-Bootstrap</li>
              <li>EJS</li>
              <li>GitHub</li>
            </ul>
          </div>
          <div className="skill-div">
            <h4>Back End</h4>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Python</li>
              <li>Django</li>
              <li>PostgreSQL</li>
              <li>Heroku</li>
            </ul>
          </div>
          <div className="skill-div">
            <h4>Test/Deployment</h4>
            <ul>
              <li></li>
              <li>Chai/Mocha</li>
              <li>Heroku</li>
              <li>Docker</li>
              <li>Netlify</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;