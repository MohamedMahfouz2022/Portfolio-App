"use client"
/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
import Social from "@/components/Social"
import Photo from "@/components/Photo"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <motion.section className="h-full"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: .7, duration: 0.4, ease: "easeInOut" }
      }}>
      <div className="container mx-auto h-full ">
        <div className="flex flex-col-reverse xl:flex-row items-center justify-around xl:pt-20 xl:pb-20">
          <div className="flex flex-col gap-5 items-center xl:items-start ">
            {/* text content */}
            <h2 className="">Front End Web Developer</h2>
            <h1 className="text-3xl">Hello I'm </h1>
            <h1 className="text-3xl text-accent">Mohammad Mahfouz</h1>
            <p className="text-center xl:text-start max-w-[500px] mb-8 text-white/80 ">I excel at crafting digital experiences and I am proficient in various programming languages and technologies.</p>
            {/* button and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" className="uppercase flex items-center gap-2 ">
                <a href="/Muhammad Mahfouz Moawad Hadib CV.pdf" download="Muhammad Mahfouz CV" target="_blank">Download CV </a>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyle="flex gap-4" iconStyle="text-2xl hover:text-accent transition-colors" />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="">
            <Photo />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Home
