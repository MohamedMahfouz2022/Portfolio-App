"use client";
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+20)1013495432",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mohamedmahfouz.m2@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Damanhour, Beheira, Egypt",
  },
];

const Contact = () => {
  // ١. الـ state لكل حقل
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  // ٢. دالة تحديث الـ state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ٣. دالة الإرسال على واتساب
  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstname, lastname, email, phone, message } = formData;

    const whatsappNumber = "201013495432"; // كود مصر + الرقم

    const text = 
`👤 Name: ${firstname} ${lastname}
📧 Email: ${email}
📞 Phone: ${phone}
💬 Message: ${message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <motion.section
      className="py-5"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.7, duration: 0.4, ease: "easeInOut" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[25px]">
          {/* form */}
          <div className="xl:w-[50%] order-2 xl:order-none">
            {/* ٤. ربط الفورم بـ handleSubmit */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-7 bg-[#27272c] rounded-lg"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I'm a passionate and dedicated software developer with strong
                skills in web technologies and a keen eye for detail. I love
                solving problems and turning ideas into reality. Whether you
                need a fresh website, a custom application, or just some
                technical support, I'm ready to contribute and deliver
                high-quality results. Let's build something amazing together
              </p>

              {/* ٥. الـ inputs مربوطة بالـ state */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* ٦. الـ textarea مربوطة بالـ state */}
              <Textarea
                className="h-[100px]"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
                required
              />

              {/* ٧. زرار الإرسال */}
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[50px] h-[50px] xl:w-[70px] xl:h-[70px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="xl:text-xl sm:text-sm">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
