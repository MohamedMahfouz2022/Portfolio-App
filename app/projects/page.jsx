"use client"
import { FaHtml5, FaCss3, FaJs, FaNodeJs } from "react-icons/fa"
import Link from "next/link"
import { motion } from "framer-motion"

// list of project
const listOfProject = [
  {
    num: "01",
    category: "Frontend",
    title: "blogr-landing-page |",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsa!",
    stack: [{ icon: <FaHtml5 /> }, { icon: <FaCss3 /> }, { icon: <FaJs /> }],

    live: "live demo",
    urlLive: "https://mohamedmahfouz2022.github.io/blogr-landing-page-main/",
    github: "Github link",
    urlGithub: "https://github.com/MohamedMahfouz2022/blogr-landing-page-main.git",
  },
  {
    num: "02",
    category: "Frontend",
    title: "To-do-list |",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsa!",
    stack: [{ icon: <FaHtml5 /> }, { icon: <FaCss3 /> }, { icon: <FaJs /> }],

    live: "live demo",
    urlLive: "https://mohamedmahfouz2022.github.io/To-Do-List/",
    github: "Github link",
    urlGithub: "https://github.com/MohamedMahfouz2022/To-Do-List",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Weather-Journal App |",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsa!",
    stack: [{ icon: <FaHtml5 /> }, { icon: <FaCss3 /> }, { icon: <FaJs /> }, { icon: <FaNodeJs /> }],

    live: "live demo",
    urlLive: "https://mohamedmahfouz2022.github.io/Weather-Journal-App/ ",
    github: "Github link",
    urlGithub: "https://github.com/MohamedMahfouz2022/Weather-Journal-App",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Landing Page project |",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsa!",
    stack: [{ icon: <FaHtml5 /> }, { icon: <FaCss3 /> }, { icon: <FaJs /> }],

    live: "live demo",
    urlLive: "https://mohamedmahfouz2022.github.io/cd0428-landing-page-main/",
    github: "Github link",
    urlGithub: "https://github.com/MohamedMahfouz2022/cd0428-landing-page-main ",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Safari |",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsa!",
    stack: [{ icon: <FaHtml5 /> }, { icon: <FaCss3 /> }, { icon: <FaJs /> }],

    live: "live demo",
    urlLive: "https://mohamedmahfouz2022.github.io/safari/",
    github: "Github link",
    urlGithub: "https://github.com/MohamedMahfouz2022/safari",
  },
  {
    num: "06",
    category: "Frontend",
    title: "Social links project |",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsa!",
    stack: [{ icon: <FaHtml5 /> }, { icon: <FaCss3 /> }],

    live: "live demo",
    urlLive: "https://mohamedmahfouz2022.github.io/social-links-profile-main/ ",
    github: "Github link",
    urlGithub: "https://github.com/MohamedMahfouz2022/social-links-profile-main ",
  },
]

const Projects = () => {
  return <motion.section className="container mx-auto" initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: .7, duration: 0.4, ease: "easeInOut" }
    }}>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {listOfProject.map((project, index) => {
        return (
          <div key={index} className="mx-auto my-5 max-w-xs rounded-xl text-white shadow 
						bg-[#232329] p-3 hover:-translate-y-3 transition-all duration-500 ease-in-out">
            {/* titel card */}
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between w-fit rounded-md bg-blue-100 px-3 py-1 text-sm text-primary text-center font-bold">
                  {project.category}
                </div>
                <p className="text-xl">{project.title}</p>
                <span className="flex flex-row gap-3">{project.stack.map((icons, index) => { return (<span key={index}>{icons.icon}</span>) })}</span>
              </div>
              {/* num of cards */}
              <div className="px-3 text-5xl leading-none font-extrabold text-opacity-50 rotate-12 ">{project.num}
              </div>
            </div>

            {/* project description */}
            <p className="my-3 text-gray-400">{project.description}</p>

            {/* url link */}
            <div className="flex flex-row gap-3">
              <Link href={project.urlLive} target="_blank" className="">
                <span className="text-accent hover:text-accent-hover"> {project.live} </span>
              </Link>
              <Link href={project.urlGithub} target="_blank" className="">
                <span className="text-accent hover:text-accent-hover"> {project.github} </span>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  </motion.section>

}

export default Projects