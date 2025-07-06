import React from "react";
import { ExternalLink } from "lucide-react";

export default function ExperienceSection() {
    return (
      <div className="bg-[#0F172A] hover:text-teal-300 hover:bg-slate-800 text-white mt-12 py-4 tracking-wide  rounded-lg max-w-4xl">
        <p className="text-white font-bold text-sm lg:text-sm lg:hidden py-2 ml-2">EXPERIENCE</p>

        <div className="flex flex-col md:flex-row p-4 gap-8">
          {/* Date Range */}
          <div className="flex-shrink-0">
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wide">
              2024 — PRESENT
            </p>
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <div className="">
            <p className="text-xl text-sm font-semibold mb-4 flex flex-row">
                Full-stack Developer. Gessic
                <a href="https://gessic.com" target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} className="text-teal-300" />
          </a>
            </p>

            </div>
        
{/*             
            <p className="text-slate-300 leading-relaxed mb-6">
              Build and maintain critical components used to construct Klaviyo's
              frontend, across the whole product. Work closely with cross-
              functional teams, including developers, designers, and product
              managers, to implement and advocate for best practices in web
              accessibility.
            </p> */}
                 <p className="text-gray-400 text-sm  font-nunito">
        Developed and maintained a full-stack logistics management  platform using<br /> 
        Next.js and Firebase Firestore for real-time data handling. Implemented <br />
        secure authentication and role-based access control with Firebase Authentication<br />
        ,ensuring protected  user management. Built dynamic UI components for dashboard<br />
        analytics, trip management, and vehicle tracking, enhancing userexperience experience<br /> 
        and operational efficiency. Integrated server-side rendering (SSR) and static site<br /> 
        generation (SSG) in Next.js, improving performance and SEO. Created API endpoints<br />  
        for user management, trip scheduling, and vehicle maintenance using API  routes and <br />
        Firebase Functions. Optimized database queries and structured Firestore data for faster <br />
        retrieval, significantly improving system responsiveness.Developed export functionalities <br />
         for generating Excel and CSV reports, enabling businesses to analyze trip data and <br />
         operational insights.<br />
      </p>
            
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="px-3 py-1 bg-teal-900/30 text-teal-300 rounded-full text-sm border border-teal-700/50">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-teal-900/30 text-teal-300 rounded-full text-sm border border-teal-700/50">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-teal-900/30 text-teal-300 rounded-full text-sm border border-teal-700/50">
                React
              </span>
              <span className="px-3 py-1 bg-teal-900/30 text-teal-300 rounded-full text-sm border border-teal-700/50">
                Storybook
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }