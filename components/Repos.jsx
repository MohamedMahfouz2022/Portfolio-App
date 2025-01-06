"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs } from "react-icons/fa";

const Repos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/MohamedMahfouz2022/repos"
                  );
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        My GitHub Projects
      </h1>
      <div
        className="h-[70vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  overflow-scroll scroll-smooth "
        style={{ scrollbarWidth: "none" }}
      >
        {repos.map((repo, index) => (
          <motion.div
            key={index}
            className=" mx-auto my-5 max-w-xs min-w-80 rounded-xl text-white shadow 
						bg-[#232329] p-3 hover:-translate-y-3 transition-all duration-500 ease-in-out hover:scale-50 "
            initial={{ opacity: 0, rotate: -10 }}
            animate={{
              opacity: 1,
              rotate: 0,
              transition: {
                delay: 0.85,
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
          >
            {/* -------------- */}
            {/* titel and num card */}
            <div className="flex flex-row justify-between items-center">
              {/* titel*/}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between w-fit rounded-md bg-blue-100 px-3 py-1 text-sm text-primary text-center font-bold">
                  Frontend
                </div>
                <p className="text-xl">{repo.name} |</p>
                <span className="flex flex-row gap-3 text-accent">
                  <FaHtml5 /> | <FaCss3 /> | <FaJs />
                </span>
              </div>

              {/* num of cards */}
              <div className="px-3 text-5xl leading-none font-extrabold text-opacity-50 rotate-12 ">
                {index + 1}
              </div>
            </div>
            {/* -------------- */}

            {/* project description */}
            <p className="my-3 text-gray-400">
              {repo.description || repo.created_at}
            </p>

            {/* url link */}
            <div className="flex flex-row gap-3">
              {repo.homepage && (
                <Link href={repo.homepage} target="_blank" className="">
                  <span className="text-accent hover:text-accent-hover">
                    live Demo
                  </span>
                </Link>
              )}
              {repo.html_url && (
                <Link href={repo.html_url} target="_blank" className="">
                  <span className="text-accent hover:text-accent-hover">
                    View on GitHub
                  </span>
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Repos;
