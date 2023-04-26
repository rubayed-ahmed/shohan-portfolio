import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import deved from "../../../assets/dev-ed-wave.png";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div id="home">
      <div className="md:px-20 lg:px-40 md:py-12">
        <section className="relative">
          <div className="text-center p-10 py-10">
            <span className="text-lg">Hello, I'm</span>
            <h2 className="text-4xl md:text-6xl py-2 text-rose-500 font-medium dark:text-rose-400">
              Salahddin Khan Shohan
            </h2>
            <h3 className="text-md md:text-xl py-2 dark:text-white">
              Author, Writer, Programmer
            </h3>
            <p
              className="text-md py-5 leading-8 text-slate-400 dark:text-gray-200 max-w-xl mx-auto 
            md:text-lg"
            >
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
            <div className="flex justify-center gap-6 py-3">
              <a
                className="bg-rose-500 hover:bg-transparent border border-rose-500 transition-all 
              duration-300 ease-linear py-2 px-6 rounded"
                href="resume.pdf"
                download="resume.pdf"
              >
                Resume
              </a>
              <button className="border border-rose-500 hover:bg-rose-500 transition-all duration-300 ease-linear py-2 px-6 rounded">
                Let's Talk
              </button>
            </div>

            <div
              className="mx-auto bg-gradient-to-b from-rose-500 rounded-full w-80 h-80 
            relative overflow-hidden mt-8 md:h-96 md:w-96"
            >
              <img
                src={deved}
                layout="fill"
                objectFit="cover"
                alt=""
                className="mt-24"
              />
            </div>
            <ul className="social absolute top-[50%] left-[5%] md:left-0">
              <Link
                to="https://www.linkedin.com/in/rubayed-ahmed-a7b49121b/"
                target="_blank"
                className="my-4 block text-xl md:text-2xl text-rose-500 cursor-pointer hover:text-white transition-all
                 duration-300 ease-linear"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="https://github.com/rubayed-ahmed"
                target="_blank"
                className="my-4 block text-xl md:text-2xl text-rose-500 cursor-pointer hover:text-white transition-all
                 duration-300 ease-linear"
              >
                <FaGithub />
              </Link>
              <Link
                to="https://www.facebook.com/ShohanKhanDBZ"
                target="_blank"
                className="my-4 block text-xl md:text-2xl text-rose-500 cursor-pointer hover:text-white transition-all 
                duration-300 ease-linear"
              >
                <FaFacebook />
              </Link>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
