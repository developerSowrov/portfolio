import React from "react";
import pro1 from "../../assets/worktrakpro.png";
import pro2 from "../../assets/Screenshot 2025-03-13 001432.png";
import pro3 from "../../assets/Screenshot 2025-03-13 001519.png";
import { FaGithub, FaGofore } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Project = () => {
  return (
    <div id="projects" className="px-10 md:px-20 lg:px-28">
      <h2 className="text-center  text-3xl md:text-4xl font-bold mt-8 mb-10 text-black">
        Existing Project
      </h2>
      <div className="flex bg-white flex-col lg:flex-row gap-7 mb-14  rounded-xl shadow-xl p-5">
        {/* img */}
        <div className="">
          <img src={pro1} alt="" className="rounded-xl" />
        </div>
        {/* data */}
        <div className=" ">
          <h3 className="text-black text-xl font-semibold mb-2">Project 1</h3>
          <h1 className="text-[#ff0051] text-3xl font-bold mb-2">
            Work Trac Pro.
          </h1>
          <p className="text-gray-600 text-base mb-5">
            WorkTrackPro is an efficient employee work tracking and payment
            management system. It allows businesses to assign tasks, track work
            hours, and manage salaries seamlessly.
          </p>
          <div className="grid grid-cols-2 md:flex  gap-2 ">
            <div className="badge badge-lg bg-[#ECF0F3] border-2 border-black text-black">
              React
            </div>
            <div className="badge badge-lg bg-[#ECF0F3] border-2 border-black text-black">
              JavaScript
            </div>
            <div className="badge badge-lg bg-[#ECF0F3] border-2 border-black text-black">
              Tailwind
            </div>
            <div className="badge badge-lg bg-[#ECF0F3] border-2 border-black text-black">
              MongoDB
            </div>
          </div>
          <div className="text-black flex gap-3 text-base mt-4">
            <a
              href="https://github.com/developerSowrov/Work_Track_Pro."
              className="flex gap-2 items-center justify-center text-black font-semibold font-mono"
            >
              <FaGithub className="text-3xl text-black"></FaGithub>Girhub Repo.
            </a>
            <a
              href="https://worktrackpro-200b4.web.app/"
              className="flex gap-2 items-center justify-center text-black font-semibold font-mono "
            >
              <BsBoxArrowUpRight className="text-2xl text-black" />
              Live View
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-7 bg-white mb-14  rounded-xl shadow-xl p-5">
        <div className=" lg:hidden block">
          <img src={pro2} alt="" className="rounded-xl" />
        </div>
        {/* data */}
        <div className=" ">
          <h3 className="text-black text-xl font-semibold mb-2">Project 2</h3>
          <h1 className="text-[#ff0051] text-3xl font-bold mb-2">TalkZy</h1>
          <p className="text-gray-600 text-base mb-5">
            TalkZy is an interactive language learning platform where anyone can
            learn and teach languages. Users can explore, purchase, and add paid
            courses in various languages to their favorites list. The platform
            offers a simple and engaging language learning experience.
          </p>
          <div className=" grid grid-cols-2 md:flex text-center gap-2 ">
            <div className="badge badge-lg bg-[#ECF0F3] border-2 border-black text-black">
              React
            </div>
            <div className="badge badge-lg bg-[#ECF0F3] border-2 border-black text-black">
              JavaScript
            </div>
            <div className="badge badge-lg bg-[#ECF0F3] border-2 border-black text-black">
              Tailwind
            </div>
            <div className="badge badge-lg bg-[#ECF0F3] border-2 border-black text-black">
              MongoDB
            </div>
          </div>
          <div className="text-black flex gap-3 text-base mt-4">
            <a
              href="https://github.com/developerSowrov/TalkZy"
              className="flex gap-2 items-center justify-center text-black font-semibold font-mono"
            >
              <FaGithub className="text-3xl text-black"></FaGithub>Girhub Repo.
            </a>
            <a
              href="https://talkzy-2c24c.web.app/"
              className="flex gap-2 items-center justify-center text-black font-semibold font-mono "
            >
              <BsBoxArrowUpRight className="text-2xl text-black" />
              Live View
            </a>
          </div>
        </div>
        {/* img */}

        <div className="hidden lg:block">
          <img src={pro2} alt="" className="rounded-xl" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-7 bg-white mb-14  rounded-xl shadow-xl p-5">
        {/* img */}
        <div className="">
          <img src={pro3} alt="" className="rounded-xl" />
        </div>
        {/* data */}
        <div className=" ">
          <h3 className="text-black text-xl font-semibold mb-2">Project 3</h3>
          <h1 className="text-[#ff0051] text-3xl font-bold mb-2">
            Path Finder Pro.
          </h1>
          <p className="text-gray-600 text-base mb-5">
            Pathfinder Pro helps students build their future with scholarship
            guidance, resume preparation, mock interviews, and career
            counseling, offering free and paid courses with counselor details,
            ratings, and course durations.
          </p>
          <div className=" grid grid-cols-2 md:flex gap-2 ">
            <div className="badge badge-lg bg-[#ECF0F3] border-2 border-black text-black">
              React
            </div>
            <div className="badge badge-lg bg-[#ECF0F3] border-2 border-black text-black">
              JavaScript
            </div>
            <div className="badge badge-lg bg-[#ECF0F3] border-2 border-black text-black">
              Tailwind
            </div>
            <div className="badge badge-lg bg-[#ECF0F3] border-2 border-black text-black">
              MongoDB
            </div>
          </div>
          <div className="text-black flex gap-3 text-base mt-4">
            <a
              href="https://github.com/developerSowrov/pathfinderpro"
              className="flex gap-2 items-center justify-center text-black font-semibold font-mono"
            >
              <FaGithub className="text-3xl text-black"></FaGithub>Girhub Repo.
            </a>
            <a
              href="https://career-council-41908.web.app/"
              className="flex gap-2 items-center justify-center text-black font-semibold font-mono "
            >
              <BsBoxArrowUpRight className="text-2xl text-black" />
              Live View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
