'use client'
import React,{useState,useEffect} from 'react';
import { ExternalLink } from "lucide-react";



export default function ViewResume() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
  
    const openPDFInNewTab = () => {
      if (isClient) {
        window.open('/resume.pdf', '_blank');
      }
    };
  return (
    <div className="flex flex-row mt-4">
      <button
        onClick={openPDFInNewTab}
        className="py-3 text-white font-semibold text-teal-300 hover:text-teal-700 transition-colors"
      >
        View Full Resume
      </button>   
      <a href="" target="_blank" rel="noopener noreferrer" className='text-teal-300 hover:text-teal-700 text-white'>
            <ExternalLink size={16} className="" />
      </a>

    </div>
  );
}  