"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	TooltipProvider,
	Tooltip,
	TooltipTrigger,
	TooltipContent,
} from "@radix-ui/react-tooltip";
import {
	FaBootstrap,
	FaCss3,
	FaGithub,
	FaHtml5,
	FaJs,
	FaNodeJs,
	FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
// core data
const core = {
	title: "CORE SKILLS",
	des: (
		<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 flex flex-col gap-5 leading-loose">
			<span className="text-accent">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, suscipit
				?
			</span>
		</p>
	),
	coreSkills: [
		{
			icon: <FaHtml5 />,
			name: "Html 5",
			delayIcon: .9
		},
		{
			icon: <FaCss3 />,
			name: "Css 3",
			delayIcon: 1
		},
		{
			icon: <FaJs />,
			name: "Java script",
			delayIcon: 1.1
		},
		{
			icon: <FaBootstrap />,
			name: "Bootstrap.css",
			delayIcon: 1.2
		},
		{
			icon: <SiTailwindcss />,
			name: "Tailwind.css",
			delayIcon: 1.3
		},
	],
};
const advanced = {
	title: "ADVANCED SKILLS",
	des: (
		<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 flex flex-col gap-5 leading-loose">
			<span className="text-accent">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, suscipit
				?
			</span>
		</p>
	),
	advcSkills: [
		{
			icon: <FaGithub />,
			name: "Github",
			delayIcon: .9
		},
		{
			icon: <FaNodeJs />,
			name: "Node.js",
			delayIcon: 1
		},
		{
			icon: <FaReact />,
			name: "React.js",
			delayIcon: 1.1
		},
		{
			icon: <SiNextdotjs />,
			name: "Next.js",
			delayIcon: 1.2
		},
	],
};

const skills = () => {
	return (
		<motion.section className=" flex items-center justify-center py-6 xl:py-0"
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: .7, duration: 0.4, ease: "easeInOut" }
			}}>
			<div className="container mx-auto">
				<Tabs
					defaultValue="core"
					className="flex flex-col xl:flex-row xl:gap-[60px] justify-center"
				>
					{/* side heder content */}
					<div>
						<div className="flex flex-col gap-6 my-10">
							<h1 className="text-4xl font-bold my-3 mx-auto xl:mx-0">
								My Skills
							</h1>
							<p className="text-white/60 mx-auto xl:mx-0">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
								suscipit ?
							</p>
						</div>

						<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
							<motion.div initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { delay: 1, duration: 0.8, ease: "easeInOut" }
								}}>
								<TabsTrigger className="w-full" value="core">
									{core.title}
								</TabsTrigger>
							</motion.div>
							<motion.div initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { delay: 1.5, duration: 0.8, ease: "easeInOut" }
								}}>
								<TabsTrigger className="w-full" value="advanced">
									{advanced.title}
								</TabsTrigger>
							</motion.div>
						</TabsList>
					</div>

					{/* main content */}
					<div className="min-h-[70vh] w-full pt-10">
						{/* Core */}
						<TabsContent value="core" className="w-full ">
							{/* title */}
							<div className="flex flex-col gap-[10px] text-center xl:text-left">
								<h3 className="text-4xl font-bold my-3">{core.title}</h3>
								{core.des}
							</div>

							{/* list of core icon*/}
							<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:gap-[30px] gap-3 my-10">
								{core.coreSkills.map((skill, index) => {
									return (
										<motion.li key={index}
											initial={{ translateY: 50, opacity: 0 }}
											animate={{
												opacity: 1,
												translateY: 0,
												transition: { delay: skill.delayIcon, duration: .8, ease: "easeInOut" }
											}}>
											<TooltipProvider delayDuration={100}>
												<Tooltip>
													<TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
														<div className=" text-6xl group-hover:text-accent transition-all duration-300">
															{skill.icon}
														</div>
													</TooltipTrigger>
													<TooltipContent>
														<p className="bg-white w-max py-1 px-5 font-bold text-primary rounded">
															{skill.name}
														</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</motion.li>
									);
								})}
							</ul>
						</TabsContent>

						{/* advanced */}
						<TabsContent value="advanced" className="w-full ">
							{/* title */}
							<div className="flex flex-col gap-[10px] text-center xl:text-left">
								<h3 className="text-4xl font-bold my-3">{advanced.title}</h3>
								{advanced.des}
							</div>

							{/* list of advanced icon */}
							<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:gap-[30px] gap-3 my-10">
								{advanced.advcSkills.map((skill, index) => {
									return (
										<motion.li key={index}
											initial={{ translateY: 50, opacity: 0 }}
											animate={{
												opacity: 1,
												translateY: 0,
												transition: { delay: skill.delayIcon, duration: .8, ease: "easeInOut" }
											}}>
											<TooltipProvider delayDuration={100}>
												<Tooltip>
													<TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
														<div className=" text-6xl group-hover:text-accent transition-all duration-300">
															{skill.icon}
														</div>
													</TooltipTrigger>
													<TooltipContent>
														<p className="bg-white w-max py-1 px-5 font-bold text-primary rounded">
															{skill.name}
														</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</motion.li>
									);
								})}
							</ul>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.section>
	);
};

export default skills;
