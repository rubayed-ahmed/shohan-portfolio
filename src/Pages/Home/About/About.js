import React from "react";
import { FaAward, FaUsers, FaFolderOpen } from "react-icons/fa";
import me from "../../../assets/me.jpg";

const About = () => {
  return (
    <section id="about" className="px-10 md:px-20 lg:px-40 md:py-12 my-20">
      <div className="text-center">
        <h6 className="capitalize text-sm">Get to know</h6>
        <h3 className="text-3xl text-rose-500 font-bold mt-3 capitalize">
          About me
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-6 justify-center items-center mt-20">
        <div className="">
          <div className="w-[70%] h-96 rounded-3xl bg-gradient-to-r from-transparent to-rose-500 aspect-square">
            <img src={me} className="w-full h-96 object-cover rounded-3xl rotate-[10deg] hover:rotate-0 overflow-hidden transition-all duration-200 ease-linear" alt="" />
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-3 gap-6 items-center text-center">
            <div className="bg-rose-500 px-12 py-8 rounded-2xl">
              <FaAward className="w-full text-3xl" />
              <h5 className="mt-4 mb-1 text-lg">Experience</h5>
              <span>3 years+</span>
            </div>
            <div className="bg-rose-500 px-12 py-8 rounded-2xl">
              <FaUsers className="w-full text-3xl" />
              <h5 className="mt-4 mb-1 text-lg">Clients</h5>
              <span>220+</span>
            </div>
            <div className="bg-rose-500 px-12 py-8 rounded-2xl">
              <FaFolderOpen className="w-full text-3xl" />
              <h5 className="mt-4 mb-1 text-lg">Projects</h5>
              <span>120+</span>
            </div>
          </div>
          <p className="mt-6 mb-12 text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            unde at cumque dignissimos, fugiat necessitatibus earum quibusdam
            delectus sequi aspernatur eligendi numquam saepe deleniti minima ad
            vero molestiae, ipsam repudiandae repellendus aut sit quis? Amet
            tempore saepe minima commodi nam. Quaerat sed, distinctio optio
            dolorem odio voluptate delectus nesciunt excepturi.
          </p>
          <a
            className="bg-rose-500 hover:bg-transparent border border-rose-500 transition-all 
              duration-300 ease-linear py-2 px-6 rounded"
            href="/"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
