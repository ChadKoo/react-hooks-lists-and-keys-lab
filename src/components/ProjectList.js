import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

 
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      {projects.map((projectItem)=>
      <div id="project-list" key={projectItem.id}>
        {projectItem.name}
      </div>
    )}
      </div>
  );
}


export default ProjectList;
