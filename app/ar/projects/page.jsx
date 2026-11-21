"use client";

import { motion } from "framer-motion";
import FeaturedProjects from "@/components/FeaturedProjects";
import Repos from "@/components/Repos";

const Projects = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.15, duration: 0.4, ease: "easeInOut" } }}
    >
      <FeaturedProjects locale="ar" />
      <Repos locale="ar" />
    </motion.main>
  );
};

export default Projects;
