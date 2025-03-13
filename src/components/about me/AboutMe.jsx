import React from "react";
import img from "../../assets/formal-removebg-preview.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const AboutMe = () => {
  AOS.init();
  return (
    <section
      id="abouteME"
      className="flex flex-col  mt-10 md:flex-row items-center justify-center min-h-screen px-6 lg:px-28 md:px-20"
    >
      {/* pic */}
      <div
        className="relative  w-72 h-72 lg:w-[500px] md:w-[420px] lg:h-96 md:h-64"
        data-aos="fade-down"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white to-[#ff0051] rounded-[30%] blur-lg"></div>
        <img
          src={img}
          alt="Sowrov Kumar Nath"
          className="relative w-full h-full object-cover rounded-[30%] border-4 border-[#ff0051] shadow-lg"
        />
      </div>
      <div
        data-aos="fade-up"
        className="lg:ml-12 md:ml-5 text-center md:text-left mt-8 md:mt-0"
      >
        <h1 className="text-3xl  md:text-4xl lg:text-5xl font-bold">
          <span className=" text-black">Hello I'm</span>
          <br />
          <p className="text-[#ff0051] my-3 lg:text-6xl">
            Sowrov Kumar Nath<span className="text-black">, A</span>
          </p>
          {/* <span className="text-black "> Frontend Developer</span> */}
          <TypeAnimation
            sequence={[
              "Front-end Developer.",
              1000,
              "Graphics Designer.",
              1000,
              "MERN Stack Developer.",
              1000,
              "Photgrapher.",
              1000,
            ]}
            style={{
              fontSize: "1em",
              backgroundImage: "linear-gradient(to right, #FFC300, #1f2937)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            repeat={Infinity}
          />
        </h1>
        <p className=" mt-4 text-base md:text-base lg:text-lg text-gray-600">
          I am passionate about building interactive and scalable web
          applications. Proficient in React, JavaScript, and modern front-end
          technologies.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="/your-cv.pdf"
            download
            className="px-6 py-3 hvr-float-shadow shadow  text-[#ff001e] bg-[#ECF0F3] border-2 border-[#ff001e] font-bold rounded-lg custom-hover hover:text-white hover:bg-[#ff0051]"
          >
            Download CV
          </a>
          <div className="flex items-center justify-center gap-4 text-[#ff0051] text-2xl">
            <a
              href="https://www.linkedin.com/in/sowrov-kumar-nath-91a959354/"
              target="_blank"
            >
              <FaLinkedin></FaLinkedin>
            </a>

            <a href="https://www.facebook.com/sowrov.nath.14" target="_blank">
              <FaFacebook></FaFacebook>
            </a>
            <a href="https://github.com/developerSowrov" target="_blank">
              <FaGithub></FaGithub>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
