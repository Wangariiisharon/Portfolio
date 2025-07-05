import React from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  stars?: number;
}

const projects: Project[] = [
  {
    title: 'Launchkit.Built a Saas Boilerplate with Next.js',
    description:
      'Modern and scalable SaaS Starter Kit designed to jumpstart your product development. It comes wih certain important features so users dont have to write the boilerplate code, instead they could focus on building the core feature!',
    image: 'LAUNCHKIT', // Replace with actual image path
    link: 'https://summerix-git-main-wangariiisharons-projects.vercel.app/auth/sign-in',
    tags: ['Javascript', 'Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
  },

];

export default function Projects ()  {
  return (
    <div className=" text-white px-4 py-10 space-y-10 font-nunito hover:text-teal-300 hover:bg-slate-800 tracking-wide rounded-lg max-w-4xl"> 
      {projects.map((project, idx) => (
        <div key={idx} className="flex gap-4 items-start pr-15">
          {/* <img
            src={project.image}
            alt={project.title}
            className="w-40 h-28 object-cover rounded-md"
          /> */}
        <span className="font-bold text-gray-300 bg-gray-600 w-40 h-28 object-cover rounded-md flex place-items-center">{project.image}</span>

          <div>
            <a
              href={project.link}
              className="text-base font-semibold hover:underline inline-flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title} <span>↗</span>
            </a>
            <p className="mt-2 text-slate-300 text-xs md:text-base mr-10">{project.description}</p>
            {project.stars !== undefined && (
              <div className="mt-2 text-xs">⭐ {project.stars}</div>
            )}
            {project.tags.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-4">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-3 py-1 bg-teal-900/30 text-teal-300 rounded-full text-xs border border-teal-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

