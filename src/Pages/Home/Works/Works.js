import React, {useState, useEffect} from "react";
import { FaLink, FaGithub } from "react-icons/fa";

const Works = () => {
    const [projects, setProjects] = useState()

    useEffect(() => {
        fetch('projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])

    console.log(projects)

  return (
    <section className="px-10 md:px-20 lg:px-40 md:py-12 my-20" id="works">
      <div className="text-center">
        <h6 className="capitalize text-xs">My Recent Works</h6>
        <h3 className="text-3xl text-rose-500 font-bold mt-3 capitalize">
          Portfolio
        </h3>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center mt-20">
          {
            projects?.map(project => <div className="!z-5 relative flex rounded-[20px] max-w-[300px] 
            border border-gray-500 bg-clip-border shadow-3xl shadow-shadow-500 flex-col w-full 
            !p-4 3xl:p-![18px] cursor-pointer">
            <div className="w-full">
              <div className="relative w-full">
                <img
                  src={project?.img}
                  className="mb-3 h-48 w-full rounded-xl 3xl:h-full 3xl:w-full object-top object-cover"
                  alt=""
                />
                <button className="absolute top-3 right-3 flex items-center justify-center rounded-full p-2 text-brand-500 hover:cursor-pointer">
                  <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
              <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-navy-700">
                    {project?.project_name}
                  </h3>
                  <p className="text-gray-400 text-xs leading-6">
                    {project?.desc.length > 100 ? <>
                    {project.desc.slice(0, 100) + "..."} 
                    </> : project.desc.length} 
                  </p>
                </div>

              </div>
              <div className="flex items-center md:items-center gap-3">
                <div className="flex">
                <a href={project?.live} target="_blank" rel="noreferrer" className="border flex items-center gap-2
                 border-rose-500 hover:bg-rose-500 transition-all duration-300 ease-linear 
                 py-2 px-6 rounded">
                   <span className="text-lg"> <FaGithub/></span> 
                   Github
                  </a>
                </div>
                  <a href={project?.live} target="_blank" rel="noreferrer" className="bg-rose-500 flex items-center gap-2
                  hover:bg-transparent border border-rose-500 transition-all duration-300 ease-linear py-2 px-6 rounded">
                    <span className="text-lg"> <FaLink/></span> 
                    Live Demo
                  </a>
              </div>
            </div>
          </div>)
          }

        </div>
    </section>
  );
};

export default Works;
