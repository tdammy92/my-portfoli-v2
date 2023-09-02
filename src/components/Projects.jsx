import React from "react";
import { Project_data } from "../common/data";
import Project from "./Project";

function Projects() {
  return (
    <section
      name="project"
      id="project"
      className="max-w-5xl px-6 py-4 mx-auto mt-6 min-h-screen font-Poppins"
    >
      <div>
        <p></p>
        <h3 className="text-4xl text-center">Projects</h3>
      </div>
      <div>
        {Project_data?.map((project, index) => (
          <Project key={index} index={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
