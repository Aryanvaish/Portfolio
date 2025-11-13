import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiGithub, SiGmail, SiLinkedin, SiX } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { Timeline } from "@/components/timeline";
import { ContactForm } from "@/components/contact-form";
import { CreativeHero } from "@/components/creative-hero";
import { MouseFollower } from "@/components/mouse-follower";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">

              <div className="relative lg:w-fit w-[280px] lg:mt-0 mt-7 px-4 py-2 text-lg font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 sm:max-w-none sm:px-6 sm:py-2 text-left">
                <span className="relative z-10 block text-xs sm:text-sm leading-snug">
                  Creating Web Experiences that Connect, Engage, and Inspire.
                </span>
              </div>

            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Aryan Vaish
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              Enthusiastic Software Engineer exploring the future of the web through modern frameworks and creative UI solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link target="_blank" rel="noopener noreferrer" href="/aryan_vaish_resume.pdf?v5" >
                <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                  <span className="relative z-10 flex items-center">
                    Download Resume{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
              <Link href="#projects">
                <Button className="bg-white text-black hover:bg-gray-200">
                  View Projects
                </Button>
              </Link>
            </div>
            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com/Aryanvaish"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-white"
                >
                  <SiGithub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/aryan-vaish-3758b3262/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-white"
                >
                  <SiLinkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link
                href="https://x.com/AryanVaish"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-white"
                >
                  <SiX className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="mailto:aryavaish144@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-white"
                >
                  <SiGmail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="lg:py-20 py-14 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="My background and journey"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <Image
                  src="/profile-picture.jpg?v=2"
                  alt="Aryan Vaish"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex lg:items-center items-start gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I’m a passionate Software Engineer with 3+ years of experience building modern, responsive, and high-performance web applications.
                  Skilled in React.js, Next.js, TypeScript, and Tailwind CSS, I focus on turning ideas into scalable, user-centered digital products that make an impact.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  My journey began with a curiosity for technology that grew into a passion for creating web experiences that are intuitive, efficient, and accessible.
                  I believe great development combines logic, empathy, and attention to detail.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  I’m eager to collaborate on meaningful projects that challenge me to grow and build seamless, performance-driven solutions with precision and purpose.
                </p>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Aryan Vaish</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">aryanvaish144@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Delhi, India</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">
                      Open to opportunities
                    </div>
                  </div>
                </div>


                <div className="mt-8">
                  <Link
                    href="/aryan_vaish_resume.pdf?v5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">
                      Download Resume
                    </Button>
                  </Link>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="lg:py-20 py-14 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" />

          <div className="mt-20 space-y-24">
            {/* Frontend Development */}
            <div>
              <h3 className="text-2xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Frontend Development
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:gap-10 gap-5 place-items-center">
                {[
                  { name: "React.js", icon: "skills_icons/react.svg" },
                  { name: "Next.js", icon: "skills_icons/nextjs.svg" },
                  { name: "JavaScript (ES6+)", icon: "skills_icons/javascript.svg" },
                  { name: "TypeScript", icon: "skills_icons/typescript.svg" },
                  { name: "HTML5", icon: "skills_icons/html.svg" },
                  { name: "CSS3", icon: "skills_icons/css.svg" },
                  { name: "Bootstrap", icon: "skills_icons/bootstrap.svg" },
                  { name: "Tailwind CSS", icon: "skills_icons/tailwind.svg" },
                  { name: "Framer Motion", icon: "skills_icons/framer.svg" },
                  { name: "GSAP", icon: "skills_icons/gsap.svg" },
                  { name: "jQuery", icon: "skills_icons/jquery.svg" },
                  { name: "Axios", icon: "skills_icons/axios.svg" },
                  { name: "Redux Toolkit", icon: "skills_icons/redux.svg" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 overflow-hidden lg:w-52 lg:h-52 w-40 h-40 transition-all duration-500 hover:scale-110"
                  >
                    {/* Hover glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-300"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-md bg-zinc-800/80 p-3">
                        <img
                          loading="lazy"
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <p className="text-zinc-200 text-center text-sm sm:text-base font-medium">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div>
              <h3 className="text-2xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Tools & Platforms
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:gap-10 gap-5 place-items-center">
                {[
                  { name: "Git", icon: "tools_icons/git.svg" },
                  { name: "GitHub", icon: "tools_icons/github.svg" },
                  { name: "Vercel", icon: "tools_icons/vercel.svg" },
                  { name: "Netlify", icon: "tools_icons/netlify.svg" },
                  { name: "Figma", icon: "tools_icons/figma.svg" },
                  { name: "Zeplin", icon: "tools_icons/zeplin.svg" },
                  { name: "Adobe XD", icon: "tools_icons/xd.svg" },
                  { name: "Adobe Photoshop", icon: "tools_icons/photoshop.svg" },
                  { name: "Postman", icon: "tools_icons/postman.svg" },
                  { name: "VS Code", icon: "tools_icons/vscode.svg" },
                ].map((tool) => (
                  <div
                    key={tool.name}
                    className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 overflow-hidden lg:w-52 lg:h-52 w-40 h-40 transition-all duration-500 hover:scale-110"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-md bg-zinc-800/80 p-3">
                        <img
                          src={tool.icon}
                          alt={tool.name}
                          className={`w-full h-full object-contain transition-transform duration-300 group-hover:scale-110
                ${tool.name === "GitHub" || tool.name === "Vercel"
                              ? "invert brightness-0"
                              : ""
                            }`}
                        />
                      </div>
                      <p className="text-zinc-200 text-center text-sm sm:text-base font-medium">
                        {tool.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="lg:py-20 py-14 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Financial Express — Events Platform",
                description:
                  "Delivered high-quality event websites with exceptional performance, accessibility, enhancing overall audience engagement.",
                tags: ["JavaScript", "jQuery", "HTML", "Bootstrap"],
                image: "/projects/fe-events.jpeg",
                demoUrl: "https://www.financialexpress.com/events/",
              },
              {
                title: "FE B2B - Business Verticals",
                description:
                  "Built a scalable B2B portal featuring intuitive design, smooth navigation, and enhanced performance for business audiences.",
                tags: ["Next.js", "TypeScript", "Tailwind CSS"],
                image: "/projects/feb2b.png",
                demoUrl: "https://www.financialexpressb2b.com/",
              },
              {
                title: "MoviesFlix",
                description:
                  "Developed an interactive movie discovery app powered by JavaScript, enabling users to explore trending titles with a clean, responsive UI.",
                tags: ["JavaScript", "HTML", "CSS"],
                image: "/projects/moviesflix.jpeg",
                demoUrl: "https://aryanvaish-moviesflix.vercel.app/",
              },
              {
                title: "BMI Calculator",
                description:
                  "Built an interactive BMI calculator with dynamic result computation and a responsive, accessible interface.",
                tags: ["Next.js", "TypeScript", "Tailwind CSS"],
                image: "/projects/bmi.png",
                demoUrl: "https://aryanvaish-bmi-calculator.vercel.app/",
              },
            ].map((project) => (
              <div key={project.title} className="flex flex-col h-full">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  demoUrl={project.demoUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Experience Section */}
      <section id="experience" className="lg:py-20 py-14 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="My professional journey"
          />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="lg:py-20 py-16 pb-0 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  {
                    name: "Email",
                    icon: <SiGmail className="h-5 w-5 text-zinc-200" />,
                    href: "mailto:aryanvaish144@gmail.com",
                    label: "aryanvaish144@gmail.com",
                  },
                  {
                    name: "LinkedIn",
                    icon: <SiLinkedin className="h-5 w-5 text-zinc-200 scale-110" />, // scaled for balance
                    href: "https://www.linkedin.com/in/aryan-vaish-3758b3262/",
                    label: "linkedin.com/in/aryan-vaish-3758b3262",
                  },
                  {
                    name: "GitHub",
                    icon: <SiGithub className="h-5 w-5 text-zinc-200" />,
                    href: "https://github.com/Aryanvaish",
                    label: "github.com/Aryanvaish",
                  },
                  {
                    name: "Twitter",
                    icon: <SiX className="h-5 w-5 text-zinc-200" />,
                    href: "https://x.com/AryanVaish",
                    label: "x.com/AryanVaish",
                  },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-800 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500">{item.name}</div>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:underline break-all"
                      >
                        {item.label}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex lg:items-center items-start gap-2">
                  <div className="w-3 min-w-3 h-3 lg:mt-0 mt-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Available for freelance work and full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>
            <ContactForm />
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="w-full text-center py-4 mt-6 mb-5 text-xs text-gray-500 font-light flex flex-col items-center gap-1">
        <span className="flex items-center gap-1">
          Created by
          <a href="https://github.com/Aryanvaish" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-400 hover:text-gray-200 transition-colors">
            Aryan Vaish
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.2c-3.338.726-4.033-1.416-4.033-1.416-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.304.763-1.604-2.665-.304-5.466-1.333-5.466-5.932 0-1.31.467-2.382 1.235-3.222-.124-.303-.536-1.527.117-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.288-1.553 3.293-1.23 3.293-1.23.655 1.649.243 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.805 5.625-5.476 5.921.431.372.815 1.102.815 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.296 24 12c0-6.63-5.373-12-12-12z" />
            </svg>
          </a>
        </span>
        <span className="text-[10px] text-gray-400">
          © {new Date().getFullYear()} Aryan's Portfolio. All rights reserved.
        </span>
      </footer>


    </div>
  );
}
