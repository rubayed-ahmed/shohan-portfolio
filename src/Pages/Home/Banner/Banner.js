import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import deved from "../../../assets/dev-ed-wave.png";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {

  return (
    <div id="home">
      <div className="px-10 md:px-20 lg:px-40 md:py-12">
        <section className="min-h-screen relative">
          <div className="text-center p-10 py-10">
            <span className="text-lg">Hello, I'm</span>
            <h2 className="text-5xl py-2 text-rose-500 font-medium dark:text-rose-400 md:text-6xl">
              Rubayed Ahmed
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-xl">
              Web Developer and Designer.
            </h3>
            <p className="text-md py-5 leading-8 text-slate-400 dark:text-gray-200 max-w-xl mx-auto 
            md:text-lg">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
            <div className="flex justify-center gap-6 py-3">
              <a className="bg-rose-500 hover:bg-transparent border border-rose-500 transition-all 
              duration-300 ease-linear py-2 px-6 rounded" href="resume.pdf" download="resume.pdf">Resume</a>
              <button className="border border-rose-500 hover:bg-rose-500 transition-all duration-300 ease-linear py-2 px-6 rounded">Let's Talk</button>
            </div>

            <div className="mx-auto bg-gradient-to-b from-rose-500 rounded-full w-80 h-80 
            relative overflow-hidden mt-8 md:h-96 md:w-96">
              <img src={deved} layout="fill" objectFit="cover" alt="" className="mt-24"/>
            </div>
            <ul className="social absolute top-[50%]">
                <Link to="https://www.linkedin.com/in/rubayed-ahmed-a7b49121b/" target="_blank" className="my-4 block sm:text-xl md:text-2xl text-rose-500 cursor-pointer hover:text-white transition-all
                 duration-300 ease-linear"><FaLinkedinIn/></Link>
                <Link to="https://github.com/rubayed-ahmed" target="_blank" className="my-4 block sm:text-xl md:text-2xl text-rose-500 cursor-pointer hover:text-white transition-all
                 duration-300 ease-linear"><FaGithub/></Link>
                <Link to="https://www.facebook.com/ahmrubayed/" target="_blank" className="my-4 block sm:text-xl md:text-2xl text-rose-500 cursor-pointer hover:text-white transition-all 
                duration-300 ease-linear"><FaFacebook/></Link>
            </ul>
          </div>
        </section>
        {/* <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-rose-500"> agencies </span>
              consulted for <span className="text-rose-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <img src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section> */}
        {/* <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-rose-500"> agencies </span>
              consulted for <span className="text-rose-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web1}
            />
            </div>
            <div className="basis-1/3 flex-1">
              <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web2}
            />
            </div>
            <div className="basis-1/3 flex-1">
              <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web3}
            />
            </div>
            <div className="basis-1/3 flex-1">
              <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web4}
            />
            </div>
            <div className="basis-1/3 flex-1">
              <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web5}
            />
            </div>
            <div className="basis-1/3 flex-1">
              <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web6}
            />
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default Banner;
