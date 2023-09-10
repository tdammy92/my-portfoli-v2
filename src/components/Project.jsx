import React from "react";
import { ProjectType } from "../common/data";
import { BsBrowserChrome, BsGithub } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";

function Project({ project, index }) {
  return (
    <div className="mx-5 sm:mx-10 md:mx-0 grid grid-cols-1 md:grid-cols-2 gap-x-12 my-12 md:my-20 items-center">
      <div className="mb-4 md:mb-0">
        <img
          className="rounded-lg"
          src={project?.projectImage}
          alt={project?.name}
          srcSet=""
        />
      </div>
      <div>
        <h4 className="text-2xl  dark:text-white">{project?.name}</h4>
        <p className="text-base text-gray-600 dark:text-gray-300">
          {project?.description}
        </p>
        <div className="flex gap-2 my-3 flex-wrap">
          {project?.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="inline-flex items-center rounded-xl bg-white px-2 py-1 text-xs font-medium text-black ring-1 ring-inset ring-black"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="font-Poppins text-xl flex gap-x-8 my-2 mt-5">
          <a
            href={project?.repo}
            target="_blank"
            rel="no"
            className="cursor-pointer"
          >
            {project?.type === ProjectType.WEB ? (
              <span className="text-black dark:text-white  flex gap-1 items-center">
                <BsBrowserChrome />
                <p>View</p>
              </span>
            ) : (
              <span className="text-black dark:text-white flex gap-1 items-center">
                <FaDownload />
                <p>Download</p>
              </span>
            )}
          </a>
          <a href={project?.repo} target="_blank" rel="no" className="">
            <span className="text-black dark:text-white flex gap-1 items-center">
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
