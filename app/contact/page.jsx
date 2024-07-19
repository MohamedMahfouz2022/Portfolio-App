"use client";
/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+20)1013495432",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mohamedmahfouz.m2",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Damanhour, Beheira, Egypt",
  },
];
import { motion } from "framer-motion";
const contact = () => {
  return (
    <motion.section
      className="py-5"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.7, duration: 0.4, ease: "easeInOut" },
      }}
    >
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row gap-[25px]">
          {/* form */}
          <div className="xl:w-[50%] order-2 xl:order-none">
            <form className="flex flex-col gap-5 p-7 bg-[#27272c] rounded-lg">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                ex voluptatibus quae blanditiis est hic.
              </p>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="fistname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              {/* text area */}
              <Textarea className="h-[100px]" placeholder="Type your message here."></Textarea>
              {/* btn */}
              <Button size="md" className="max-w-40">Send message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (

                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default contact;
