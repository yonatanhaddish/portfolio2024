import React from "react";
import "./index.css";

function Resume() {
  return (
    <div className="resume-parent">
      <div className="skills">
        <h4>
          Languages: CSS, HTML, JavaScript, SQL, Haskell, Plutus, Java, Ansible,
          Linux and Unix OS
        </h4>
        <h4>
          BackEnd: Express, Node.js, MongoDB, MySQL, GraphQL, Jest, APIs,
          Postgres, MSSQL
        </h4>
        <h4>FrontEnd: React, Angular</h4>
        <h4>
          Tools: Git & GitHub, Bitbucket, Ansible Automation Tower, SSH, Github
          Actions
        </h4>
      </div>
      <div className="experience">
        <div id="td-01">
          <h4>December 2023 - July 2024</h4>
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
        <div id="td-02">
          <h4>December 2022 - December 2023</h4>
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
        <div id="snapbrillia">
          <h4>December 2021 - September 2022</h4>
          <h2>Full Stack Web3 Developer | Snapbrillia</h2>
          <ul>
            <li>
              Doing some research on developing a new technology web3 app using
              Haskell programming language.
            </li>
          </ul>
        </div>
        <div id="angish">
          <h4>August 2018 - July 2019</h4>
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
