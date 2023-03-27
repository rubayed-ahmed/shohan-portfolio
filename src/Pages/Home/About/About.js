import React, {useEffect} from "react";
import { FaAward, FaUsers, FaFolderOpen } from "react-icons/fa";
import me from "../../../assets/me.jpg";

const About = () => {
  useEffect(() => {
    let style1 = document.createElement("style")
    let style2 = document.createElement("style")
    let after = document.getElementById("after-te1")
    let before = document.getElementById("before-te1")
    const setKeyframesRules = (n, start = 0) => {
      let steps = ""
      for (let i = start; i <= n; i++) {
        let percent = (i / n) * 100
        let random1 = `${Math.random()*150}px`
        let random2 = `${Math.random()*150}px`
        steps = steps.concat(`${percent}% { clip: rect(${random1}, 9999px, ${random2}, 0) } `)
      }
      return steps
    }
    let keyframes1 = `@keyframes glitch-anim-1 { ${setKeyframesRules(24)} }`
    let keyframes2 = `@keyframes glitch-anim-2 { ${setKeyframesRules(32, 2)} }`
    style1.innerHTML = keyframes1
    style2.innerHTML = keyframes2
    after.appendChild(style1)
    before.appendChild(style2)
    after.style.animation = "glitch-anim-1 2.5s infinite linear alternate-reverse"
    before.style.animation = "glitch-anim-2 3s infinite linear alternate-reverse"
  }, [])
  return (
    <section id="about" className="px-10 md:px-20 lg:px-40 md:py-12 my-20">
    <div className="h-full flex justify-center items-center">
      <h1 className="text-white text-4xl font-bold uppercase relative inline-block">
        <span id="before-te1" className="absolute top-0 left-0.5 w-full h-full bg-transparent" 
        style={{ textShadow: "-2px 0 #F43F5E", clipPath: "rect(24px, 550px, 90px, 0)" }} aria-hidden="true">About Me</span> {/* glitch::before */}
        About Me
        <span id="after-te1" className="absolute top-0 -left-0.5 w-full h-full bg-transparent" 
        style={{ textShadow: "-2px 0 spin(#F43F5E, 180)", clipPath: "rect(85px, 550px, 140px, 0)" }} aria-hidden="true">About Me</span> {/* glitch::after */}
      </h1>
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
