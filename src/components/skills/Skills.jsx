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
  SiExpress,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";

const Skills = () => {
  return (
    <section id="skills" className="px-4 sm:px-8 md:px-16 lg:px-28 pb-24">
      <h2 className="text-center text-3xl md:text-4xl font-bold mt-16 text-black">
        I Work With...
      </h2>

      {/* Skill Sections */}
      {skillCategories.map(({ title, skills }) => (
        <div key={title} className="mb-12" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-black text-center mb-6">
            {title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 gap-6">
            {skills.map(({ icon: Icon, label }) => (
              <SkillCard key={label} Icon={Icon} label={label} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

const SkillCard = ({ Icon, label }) => (
  <div className="p-5 shadow-lg text-[#ff001e] bg-[#ECF0F3] border-2 border-[#ff001e] rounded-lg text-center transition-transform duration-300 hover:scale-105 hover:text-white hover:bg-[#ff0051]">
    <Icon className="mx-auto text-5xl sm:text-6xl" />
    <p className="text-lg sm:text-xl mt-2">{label}</p>
  </div>
);

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { icon: FaReact, label: "React" },
      { icon: FaJs, label: "JavaScript" },
      { icon: RiTailwindCssFill, label: "Tailwind" },
      { icon: FaBootstrap, label: "Bootstrap" },
      { icon: SiDaisyui, label: "Daisy UI" },
      { icon: SiReactrouter, label: "React Router" },
      { icon: FaHtml5, label: "HTML" },
      { icon: FaCss3, label: "CSS" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: SiMongodb, label: "MongoDB" },
      { icon: SiExpress, label: "Express JS" },
      { icon: FaNodeJs, label: "Node JS" },
      { icon: SiFirebase, label: "Firebase" },
      { icon: SiJsonwebtokens, label: "JWT" },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      { icon: FaGitAlt, label: "Git" },
      { icon: FaGithub, label: "GitHub" },
      { icon: FaNpm, label: "NPM" },
      { icon: VscVscode, label: "VS Code" },
      { icon: SiVercel, label: "Vercel" },
      { icon: SiNetlify, label: "Netlify" },
    ],
  },
  {
    title: "Design & Graphics",
    skills: [
      { icon: DiIllustrator, label: "Illustrator" },
      { icon: DiPhotoshop, label: "Photoshop" },
      { icon: SiCanva, label: "Canva" },
    ],
  },
];

export default Skills;
