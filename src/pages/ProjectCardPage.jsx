// import React from "react";
// import ProjectCard from "../components/ProjectCard/ProjectCard";

// function ProjectCard() {
//     return <ProjectCard key={key} projectData={projectData} />;
// }

import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";

const ProjectCardPage = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects`)
      .then((results) => {
        console.log("results", results);
        return results.json();
      })
      .then((data) => {
        console.log("data", data);
        setProjectList(data);
      });
  }, []);
  return (
    <div id="project-list">
      {projectList.map((projectData, key) => {
        return <ProjectCard key={key} projectData={projectData} />;
      })}
    </div>
  );
};

export default ProjectCardPage;
