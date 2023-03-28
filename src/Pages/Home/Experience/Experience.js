import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Experience = () => {
  const [experience, setExperience] = useState();
  const [exBackend, setExBackend] = useState();

  useEffect(() => {
    fetch("experience.json")
      .then((res) => res.json())
      .then((data) => setExperience(data));
  }, []);

  useEffect(() => {
    fetch("exBackend.json")
      .then((res) => res.json())
      .then((data) => setExBackend(data));
  }, []);

  return (
    <section className="px-10 md:px-20 lg:px-40 md:py-12 my-20" id="experience">
      <div className="text-center">
        <h6 className="capitalize text-xs">What skills i have</h6>
        <h3 className="text-3xl text-rose-500 font-bold mt-3 capitalize">
          Experience
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center mt-20">

        <div className="border border-gray-500 h-96 rounded-3xl text-center">
          <h3 className="text-rose-500 font-bold my-6 text-xl">
            Frontend Development
          </h3>
          <ul className="px-12 grid grid-cols-2">
            {experience?.map((ex) => (
            <li className="flex text-left gap-6 justify-start my-4">
            <span className="text-rose-500 text-lg">
              <FaCheckCircle />
            </span>
            <div>
              <h4 className="text-lg">{ex?.skill}</h4>
              <small className="text-sm text-slate-400">{ex?.level}</small>
            </div>
          </li>
            ))}
          </ul>
        </div>

        <div className="border border-gray-500 h-96 rounded-3xl text-center">
          <h3 className="text-rose-500 font-bold my-6 text-xl">
            Backend Development
          </h3>
          <ul className="px-12 grid grid-cols-2">
            {exBackend?.map((ex) => (
            <li className="flex text-left gap-6 justify-start my-4">
            <span className="text-rose-500 text-lg">
              <FaCheckCircle />
            </span>
            <div>
              <h4 className="text-lg">{ex?.skill}</h4>
              <small className="text-sm text-slate-400">{ex?.level}</small>
            </div>
          </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;
