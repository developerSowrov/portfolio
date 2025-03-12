import React from "react";
import Banner from "../../components/banner/Banner";
import AboutMe from "../../components/about me/AboutMe";
import Heading from "../../components/heading/Heading";

import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "../../components/skills/Skills";
const Home = () => {
  AOS.init();
  return (
    <div>
      <Banner></Banner>
      <div
        data-aos="fade-up"
        className="text-center  w-3/6 mt-40 mx-auto text-black font-bold md:text-4xl text-3xl"
      >
        Who I Am <span className="text-[#ff0051] text-4xl md:text-5xl">??</span>
      </div>
      <div
        data-aos="fade-up"
        className="text-gray-600 w-4/6 text-center mx-auto mt-2 md:text-lg text-base"
      >
        "Let’s explore my journey, passion, and skills as a frontend developer,
        crafting dynamic, responsive, and user-friendly web experiences." 🚀
      </div>
      <AboutMe></AboutMe>
      <Skills></Skills>
    </div>
  );
};

export default Home;
