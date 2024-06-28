import React from "react";
import "./index.css";

function Resume() {
  return (
    <div className="resume-parent">
      <h1>Resume</h1>
      <div className="skills">
        <h3>Skills</h3>
        <p>
          <span className="skill-span">Languages:</span> CSS, HTML, JavaScript,
          SQL, Haskell, Plutus, Java, Ansible, Linux and Unix OS
        </p>
        <p>
          <span className="skill-span">BackEnd:</span> Express, Node.js,
          MongoDB, MySQL, GraphQL, Jest, APIs, Postgres, MSSQL
        </p>
        <p>
          <span className="skill-span">FrontEnd: </span>React, Angular
        </p>
        <p>
          <span className="skill-span">Tools:</span> Git & GitHub, Bitbucket,
          Ansible Automation Tower, SSH, Github Actions
        </p>
      </div>
      <div className="experience">
        <h3>Experience</h3>
        <div id="td-01" className="experience-single">
          <p>December 2023 - July 2024</p>
          <h2>Associate Software Engineer | Toronto-Dominion Bank</h2>
          <ul>
            <li>
              Collaborated in the development of a dynamic web application using
              Angular for the frontend and Node.js with MSSQL for the backend,
              resulting in a highly responsive and user-friendly interface.
            </li>
            <li>
              Collaborated in the development of a dynamic web application using
              React for the frontend and resulting in a highly responsive and
              user-friendly interface.
            </li>
            <li>
              Collaborated with cross-functional teams to deploy a Nodejs
              application into Azure clouds.
            </li>
          </ul>
        </div>
        <div id="td-02" className="experience-single">
          <p>December 2022 - December 2023</p>
          <h2>Associate Software Engineer | Toronto-Dominion Bank</h2>
          <ul>
            <li>Learned basics about Network, load balancer(F5)</li>
            <li>
              Learned and practised on basic Network LB Automation using Ansible
              and Ansible Tower Platform
            </li>
            <li>
              Learned on how to install and update software’s using ansible
              playbook into remote servers
            </li>
            <li>
              Learned how to retrieve data information of F5 Load balancer and
              servers using Ansible playbook and interact with them.
            </li>
            <li>
              Learned how to deploy a webpage using ansible into remote nodes
              (servers)
            </li>
          </ul>
        </div>
        <div id="snapbrillia" className="experience-single">
          <p>December 2021 - September 2022</p>
          <h2>Full Stack Web3 Developer | Snapbrillia</h2>
          <ul>
            <li>
              Doing some research on developing a new technology web3 app using
              Haskell programming language.
            </li>
          </ul>
        </div>
        <div id="angish" className="experience-single">
          <p>August 2018 - July 2019</p>
          <h2>FrontEnd Developer | Angish</h2>
          <ul>
            <li>
              Collaborated with customers to determine needs and work through
              design options
            </li>
            <li>
              Built layouts according to customers parameters using HTML5 and
              CSS3
            </li>
            <li>
              Improved and designed new layouts to achieve usability and
              performance objectives
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
