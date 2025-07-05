import React from 'react';
import { Github, Linkedin, Instagram, Layers, User } from 'lucide-react';

const SocialFooterSection = () => {
  return (
    <section className="lg:mt-86 lg:mr-70 mt-15 mr-60 ">
      <div className="flex justify-center items-center">
        <div className="flex space-x-8">
          {/* GitHub */}
          <a 
            href="https://github.com/Wangariiisharon?tab=repositories" 
            className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/sharon-mwangi-656a17233/" 
            className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          
          {/* Profile/About */}
          <a 
            href="#" 
            className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            aria-label="Profile"
          >
            <User size={28} />
          </a>

        </div>
      </div>
    </section>
  );
};

export default SocialFooterSection;