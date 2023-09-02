import React from "react";
import { ProjectType } from "../common/data";
import { BsBrowserChrome, BsGithub } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";

function Project({ project, index }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 my-20 items-center">
      <div>
        <img
          className="rounded-lg"
          src={project?.projectImage}
          alt={project?.name}
          srcSet=""
        />
      </div>
      <div>
        <h4 className="text-2xl">{project?.name}</h4>
        <p className="text-base text-gray-600">{project?.description}</p>
        <div className="flex gap-2 my-3">
          {project?.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="inline-flex items-center rounded-xl bg-white px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-black"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="font-Poppins text-xl flex gap-4 my-2">
          <a
            href={project?.repo}
            target="_blank"
            rel="no"
            className="cursor-pointer"
          >
            {project?.type === ProjectType.WEB ? (
              <span className="text-black  flex gap-1 items-center">
                <BsBrowserChrome />
                <p>View</p>
              </span>
            ) : (
              <span className="text-black flex gap-1 items-center">
                <FaDownload />
                <p>Download</p>
              </span>
            )}
          </a>
          <a href={project?.repo} target="_blank" rel="no" className="">
            <span className="text-black flex gap-1 items-center">
              <BsGithub />
              <p>Code</p>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
