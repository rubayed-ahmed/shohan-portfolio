import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../Shared/Header/Header";

function ProjectDetails() {
  const project = useLoaderData();
  const {
    project_name,
    project_link,
    img,
    project_overview,
    github_client,
    github_server,
    tools,
  } = project;

  console.log(project);
  return (
    <section className="px-10 md:px-20 lg:px-40 md:py-12 my-20">
      <Header />
      <div className="text-center">
        <h3 className="text-5xl text-center">{project_name}</h3>
        <p className="my-12 w-4/5 mx-auto leading-8">
          This page contains the case study of{" "}
          <span className="font-bold">{project_name}</span> Open-Source Project
          which includes the Project Overview, Tools Used and Live Links to the
          official product.
        </p>
        <Link
          to={project_link}
          className="bg-[#58E3C4] text-black transition-all 
              duration-300 ease-linear py-2 px-6 rounded "
        >
          Project Link
        </Link>
      </div>
      <div>
        <img src={img} alt="Project" className="h-full w-full mt-32" />
        <>
          <h4 className="text-2xl my-12">Project Overview</h4>
          <p>{project_overview}</p>
        </>
        <>
          <h4 className="text-2xl my-12">Tools used</h4>
          <ul className="flex gap-6">
            {tools?.map((tool) => (
              <li className="bg-[#EBEBEB] text-black py-3 px-6 rounded">
                {tool}
              </li>
            ))}
          </ul>
        </>
        <>
          <h4 className="text-2xl my-12">See Live</h4>
          <Link
            to={project_link}
            className="bg-[#58E3C4] text-black transition-all 
              duration-300 ease-linear py-2 px-6 rounded mr-4"
          >
            Github Client
          </Link>
          <Link
            to={project_link}
            className="bg-[#58E3C4] text-black transition-all 
              duration-300 ease-linear py-2 px-6 rounded "
          >
            Github Server
          </Link>
        </>
      </div>
    </section>
  );
}

export default ProjectDetails;
