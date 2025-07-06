'use client'
import React from "react";
import AboutPage from "../about/page";
import Experience from "../experience/page";
import Projects from "../projects/page";
import ViewResume from "../viewResume";
import Socials from "../socials";

 export default function HomePage() {
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const experienceRef = React.useRef<HTMLDivElement>(null);
  const projectseRef = React.useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = React.useState<"about" | "experience" | "projects">(
    "about"
  );  
  // Function to scroll to a section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };  
  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Adjust based on when you want it to trigger
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === aboutRef.current) {
            setActiveSection("about");
          } else if (entry.target === experienceRef.current) {
            setActiveSection("experience");
          }
          else if (entry.target === projectseRef.current) {
            setActiveSection("projects");
          }
        }
      });
    }, observerOptions);

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (projectseRef.current) observer.observe(projectseRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (experienceRef.current) observer.unobserve(experienceRef.current);
      if (projectseRef.current) observer.unobserve(projectseRef.current);
    };
  }, []);

  // In your component


  return (
<div className="flex flex-col lg:flex-row lg:space-x-50 p-2 h-screen bg-[#0F172A] overflow-y-outo">
  {/* <!-- Sidebar (Not Scrollable) --> bg-gray-800*/}
  
  <aside className="text-white lg:ml-70 pt-15 h-full tracking-wide">
  <div className="flex flex-col font-nunito">
          <h1 className="text-lg md:text-2xl lg:text-5xl font-bold text-white">
            Sharon Mwangi
            </h1> 
            <h2 className="text-base md:text-lg lg:text-2xl text-white mt-3">
           Software Developer
        </h2>
        <h3 className="text-sm md:text-base lg:text-lg text-gray-400 mt-4">
          I build accessible, user focused digital <br /> experiences for the web. 
        </h3>
        </div>
         <nav className="hidden lg:block lg:mt-15 text-gray-400">
   <ul className="space-y-5">
    <li>
      <button
        onClick={() => scrollToSection(aboutRef)}
        className={`block transition-all duration-200 tracking-widest ${
          activeSection === "about"
            ? "text-white font-semibold text-sm"
            : "text-gray-400 text-sm"
        }`}
      >
        <span 
        // className="inline-block w-12 border-t border-gray-600 align-middle mr-2"
        className={`inline-block w-12 border-t border-gray-600 align-middle mr-2 ${
          activeSection === "about" ? "border-white w-16 font-semibold text-sm" : "border-gray-600"
        }`}
        ></span>
        ABOUT
      </button>
    </li>
    <li>
      <button
        onClick={() => scrollToSection(experienceRef)}
        className={`block transition-all duration-200 tracking-widest ${
          activeSection === "experience"
            ? "text-white font-semibold text-sm"
            : "text-gray-400 text-sm"
        }`}
      >
        <span 
           className={`inline-block w-12 border-t border-gray-600 align-middle mr-2 ${
            activeSection === "experience" ? "border-white w-16 font-semibold text-sm" : "border-gray-600"
          }`}
        ></span>
        EXPERIENCE
      </button>
    </li>
    <li>
      <button
        onClick={() => scrollToSection(projectseRef)}
        className={`block transition-all duration-200 tracking-widest ${
          activeSection === "projects"
            ? "text-white font-bold text-sm"
            : "text-gray-400 text-sm"
        }`}
      >
        <span 
  className={`inline-block w-12 border-t border-gray-600 align-middle mr-2 ${
    activeSection === "projects" ? "border-white w-16 font-semibold text-sm" : "border-gray-600"
  }`}        ></span>
        PROJECTS
      </button>
    </li>
  </ul>
</nav>

<div className="">
<Socials />
</div>
  </aside>

  {/* <!-- Scrollable Main Content --> */}
  <main className="flex-1 lg:overflow-y-auto lg:pt-15 pt-10">
    <div className="h-screen">
    <div ref={aboutRef}>
         <AboutPage />
       </div>
       <div ref={experienceRef}>
         <Experience />
         <ViewResume />
       </div>
       <div ref={projectseRef}>
        <Projects />
       </div>

       <footer className="mt-12 mb-12">
        <span className="text-gray-400 lg:text-sm text-sm md:text-sm tracking-wide font-nunito">
        <p>Built by me using Nextjs, Tailwind CSS and Deployed on vercel</p>
        <p><a href="https://www.brittanychang.com">Design by Brittany Chang</a></p>
        </span>
   
    </footer>
      

    </div>
  </main>
</div>


  );
}