import React, {useState, useEffect} from "react";
import { FaLink, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Works = () => {
    const [projects, setProjects] = useState();

    useEffect(() => {
      AOS.init();
    }, [])

    useEffect(() => {
        fetch('projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])

  return (
    <section className="px-10 md:px-20 lg:px-40 md:py-12 my-20" id="works">
      <div className="text-center" data-aos="fade-up">
        <h6 className="capitalize text-xs">My Recent</h6>
        <h3 className="text-3xl text-rose-500 font-bold mt-3 capitalize">
          Projects
        </h3>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-20 gap-6" data-aos="fade-up">
          {
            projects?.map(project => <div className="!z-5 relative flex rounded-[20px] md:max-w-[1200px] 
            border border-gray-500 bg-clip-border shadow-3xl shadow-shadow-500 flex-col w-full wrap
            cursor-pointer">
            <div className="w-full">
              <div className="relative w-full">
                <img
                  src={project?.img}
                  className="mb-3 h-48 w-full rounded-t-xl 3xl:h-full 3xl:w-full object-top object-cover"
                  alt=""
                />
              </div>
              <div className="mb-3 px-4  3xl:p-![18px] flex items-center justify-between md:items-start">
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
              <div className="flex flex-col lg:flex-row items-center justify-end gap-3 !p-4 3xl:p-![18px]">
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
