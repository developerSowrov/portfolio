import React from "react";
import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaNpm,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiCanva,
  SiDaisyui,
  SiFirebase,
  SiJsonwebtokens,
  SiMongodb,
  SiNetlify,
  SiReactrouter,
  SiVercel,
} from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";

const Skills = () => {
  return (
    <section className="px-6 lg:px-28 md:px-20 pb-48">
      <div
        data-aos="fade-up"
        className="text-center  m-10 w-3/6 mt-40 mx-auto text-black font-bold md:text-3xl text-3xl"
      >
        I Work With...
      </div>

      {/* Frontend */}
      <div data-aos="fade-up" className="mb-10">
        <h2 className="text-2xl font-bold text-black  text-center mb-6">Frontend</h2>
        <div className="grid grid-cols-4 gap-8">
          {[{ icon: FaReact, label: "React" },
            { icon: FaJs, label: "JavaScript" },
            { icon: RiTailwindCssFill, label: "Tailwind" },
            { icon: FaBootstrap, label: "Bootstrap" },
            { icon: SiDaisyui, label: "Daisy UI" },
            { icon: SiReactrouter, label: "React Router" },
            { icon: FaHtml5, label: "HTML" },
            { icon: FaCss3, label: "CSS" }].map(({ icon: Icon, label }, idx) => (
              <SkillCard key={idx} Icon={Icon} label={label} />
            ))}
        </div>
      </div>

      {/* Backend */}
      <div data-aos="fade-up" className="mb-10">
        <h2 className="text-2xl font-bold text-black  text-center mb-6">Backend</h2>
        <div className="grid grid-cols-4 gap-8">
          {[{ icon: SiMongodb, label: "MongoDB" },
            { icon: SiExpress, label: "Express JS" },
            { icon: FaNodeJs, label: "Node JS" },
            { icon: SiFirebase, label: "Firebase" },
            { icon: SiJsonwebtokens, label: "JWT" }].map(({ icon: Icon, label }, idx) => (
              <SkillCard key={idx} Icon={Icon} label={label} />
            ))}
        </div>
      </div>

      {/* Development Tools */}
      <div data-aos="fade-up" className="mb-10">
        <h2 className="text-2xl text-black  font-bold text-center mb-6">Development Tools</h2>
        <div className="grid grid-cols-4 gap-8">
          {[{ icon: FaGitAlt, label: "Git" },
            { icon: FaGithub, label: "GitHub" },
            { icon: FaNpm, label: "NPM" },
            { icon: VscVscode, label: "VS Code" },
            { icon: SiVercel, label: "Vercel" },
            { icon: SiNetlify, label: "Netlify" }].map(({ icon: Icon, label }, idx) => (
              <SkillCard key={idx} Icon={Icon} label={label} />
            ))}
        </div>
      </div>

      {/* Design & Graphics */}
      <div data-aos="fade-up" className="mb-10">
        <h2 className="text-2xl text-black font-bold text-center mb-6">Design & Graphics</h2>
        <div className="grid grid-cols-4 gap-8">
          {[{ icon: DiIllustrator, label: "Adobe Illustrator" },
            { icon: DiPhotoshop, label: "Adobe Photoshop" },
            { icon: SiCanva, label: "Canva" }].map(({ icon: Icon, label }, idx) => (
              <SkillCard key={idx} Icon={Icon} label={label} />
            ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ Icon, label }) => (
  <div className="px-5 py-3 hvr-float-shadow gap-x-5 text-[#ff001e] bg-[#ECF0F3] border-2 border-[#ff001e] rounded-lg custom-hover hover:text-white hover:bg-[#ff0051]">
    <div className="text-center">
      <Icon className="mx-auto text-6xl" />
    </div>
    <div className="text-center text-3xl mt-1">{label}</div>
  </div>
);

export default Skills;
