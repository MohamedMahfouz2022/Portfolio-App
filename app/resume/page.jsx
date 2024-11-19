"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

// about data
const about = {
	titlt: "About Me",
	des: (
		<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 flex flex-col gap-5 leading-loose">
			<span className="text-accent"> I am Muhammad Mahfouz</span> A driven and
			enthusiastic front-end developer with a strong passion for crafting
			user-centric interfaces that are both visually appealing and remarkably
			intuitive. With a keen eye for detail and a knack for innovation, I am
			committed to delivering exceptional user experiences that seamlessly blend
			functionality and aesthetics.
		</p>
	),
};
const expiriance = {
	titlt: "My Experience",
	des: (
		<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 flex flex-col gap-5 leading-loose">
			<span className="text-accent">Front-End Development:</span> I possess a
			comprehensive understanding of front-end technologies, including HTML,
			CSS, JavaScript, and popular frameworks like React and Angular. I am
			proficient in creating responsive and cross-browser compatible web
			applications that cater to a diverse range of users and devices.
		</p>
	),
};
const passion = {
	titlt: "My Passion",
	des: (
		<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 flex flex-col gap-5 leading-loose ">
			<span className="text-accent">I am deeply passionate</span> about the
			world of front-end development and the transformative power of technology
			to enhance user experiences. I am constantly seeking new challenges and
			opportunities to expand my knowledge and refine my skills. I am also an
			active member of the developer community, regularly engaging in
			discussions, sharing insights, and collaborating with fellow developers.
		</p>
	),
};
const Resume = () => {
	return (
		<motion.section className="min-h-[80vh] flex items-center justify-center py-6 xl:py-0"
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: .7, duration: 0.4, ease: "easeInOut" }
			}}>
			<div className="container mx-auto">
				<Tabs
					defaultValue="about"
					className="flex flex-col xl:flex-row xl:gap-[60px] justify-center">
					{/* side heder content */}
					<div>
						<div className="flex flex-col gap-6 my-10 ">
							<h1 className="text-4xl font-bold my-3 mx-auto xl:mx-0">
								Why hire me ?
							</h1>
							<p className="text-white/60 ">
								I believe Im the right person for this role because I have adeep understanding of React.js and Next.js framework, which allows me to build fast and efficient web application.
								I have a strong sense of design and user experience, which makes me keen to deliver interactive interfaces that engage and retain users.
								I also love teamwork and adhere to best coding practices, which enhances collaboration with team members and contributes to improved productivity.
							</p>
						</div>
						<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
							<motion.div initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { delay: 1, duration: 0.8, ease: "easeInOut" }
								}}>
								<TabsTrigger className="w-full" value="about">
									{about.titlt}
								</TabsTrigger>
							</motion.div>
							<motion.div initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { delay: 1.3, duration: 0.8, ease: "easeInOut" }
								}}>
								<TabsTrigger className="w-full" value="expiriance">
									{expiriance.titlt}
								</TabsTrigger>
							</motion.div>
							<motion.div initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { delay: 1.6, duration: 0.8, ease: "easeInOut" }
								}}>
								<TabsTrigger className="w-full" value="passion">
									{passion.titlt}
								</TabsTrigger>
							</motion.div>
						</TabsList>
					</div>
					{/* main content */}
					<div className="min-h-[70vh] w-full pt-10">
						<TabsContent value="about" className="w-full">
							<motion.div initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { delay: .3, duration: 0.4, ease: "easeInOut" }
								}}>
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold my-3">{about.titlt}</h3>
									{about.des}
								</div>
							</motion.div>
						</TabsContent>
						<TabsContent value="expiriance" className="w-full">
							<motion.div initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { delay: .3, duration: 0.4, ease: "easeInOut" }
								}}>
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold my-3">{expiriance.titlt}</h3>
									{expiriance.des}
								</div>
							</motion.div>
						</TabsContent>
						<TabsContent value="passion" className="w-full">
							<motion.div initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { delay: .3, duration: 0.4, ease: "easeInOut" }
								}}>

								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold my-3">{passion.titlt}</h3>
									{passion.des}
								</div>
							</motion.div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.section>
	);
};

export default Resume;
