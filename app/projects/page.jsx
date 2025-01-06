"use client";
// import { FaHtml5, FaCss3, FaJs, FaNodeJs } from "react-icons/fa";
// import Link from "next/link";
import { motion } from "framer-motion";
import Repos from "@/components/Repos";
// list of project
// const listOfProject = [
//   {
//     num: "01",
//     category: "Frontend",
//     title: "blogr-landing-page |",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsa!",
//     stack: [{ icon: <FaHtml5 /> }, { icon: <FaCss3 /> }, { icon: <FaJs /> }],

//     live: "live demo",
//     urlLive: "https://mohamedmahfouz2022.github.io/blogr-landing-page-main/",
//     github: "Github link",
//     urlGithub:
//       "https://github.com/MohamedMahfouz2022/blogr-landing-page-main.git",
//     delayCard: 0.85,
//   },
//   {
//     num: "02",
//     category: "Frontend",
//     title: "To-do-list |",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsa!",
//     stack: [{ icon: <FaHtml5 /> }, { icon: <FaCss3 /> }, { icon: <FaJs /> }],

//     live: "live demo",
//     urlLive: "https://mohamedmahfouz2022.github.io/To-Do-List/",
//     github: "Github link",
//     urlGithub: "https://github.com/MohamedMahfouz2022/To-Do-List",
//     delayCard: 0.9,
//   },
//   {
//     num: "03",
//     category: "Frontend",
//     title: "Zenbrew Coffee Site |",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsa!",
//     stack: [
//       { icon: <FaHtml5 /> },
//       { icon: <FaCss3 /> },
//       { icon: <FaJs /> },
//       { icon: <FaNodeJs /> },
//     ],

//     live: "live demo",
//     urlLive:
//       "https://zenbrew-coffee-site-git-main-muhammad-mahfouz-s-projects.vercel.app/",
//     github: "Github link",
//     urlGithub: "https://github.com/MohamedMahfouz2022/Zenbrew-Coffee-Site",
//     delayCard: 0.95,
//   },
//   {
//     num: "04",
//     category: "Frontend",
//     title: "Landing Page project |",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsa!",
//     stack: [{ icon: <FaHtml5 /> }, { icon: <FaCss3 /> }, { icon: <FaJs /> }],

//     live: "live demo",
//     urlLive: "https://mohamedmahfouz2022.github.io/cd0428-landing-page-main/",
//     github: "Github link",
//     urlGithub:
//       "https://github.com/MohamedMahfouz2022/cd0428-landing-page-main ",
//     delayCard: 1,
//   },
//   {
//     num: "05",
//     category: "Frontend",
//     title: "Safari |",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsa!",
//     stack: [{ icon: <FaHtml5 /> }, { icon: <FaCss3 /> }, { icon: <FaJs /> }],

//     live: "live demo",
//     urlLive: "https://mohamedmahfouz2022.github.io/safari/",
//     github: "Github link",
//     urlGithub: "https://github.com/MohamedMahfouz2022/safari",
//     delayCard: 1.1,
//   },
//   {
//     num: "06",
//     category: "Frontend",
//     title: "Restaurant-app |",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsa!",
//     stack: [
//       { icon: <FaHtml5 /> },
//       { icon: <FaCss3 /> },
//       { icon: <FaJs /> },
//       { icon: <FaNodeJs /> },
//     ],

//     live: "live demo",
//     urlLive: "https://restaurant-app-five-omega.vercel.app//",
//     github: "Github link",
//     urlGithub: "https://github.com/MohamedMahfouz2022/restaurant-app",
//     delayCard: 1.2,
//   },
// ];

const Projects = () => {
  return (
    <motion.section
      className="container mx-auto"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.7, duration: 0.4, ease: "easeInOut" },
      }}
    >
      <Repos />
    </motion.section>
  );
};

export default Projects;
