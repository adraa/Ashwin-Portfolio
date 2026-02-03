import React from 'react';
import { RESUME_DATA } from '../constants';
import { Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-nikeBlack py-16 px-6 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
        <div>
          <h3 className="font-heading text-4xl font-bold uppercase tracking-tighter">{RESUME_DATA.name}</h3>
          <p className="text-sm text-gray-400 mt-2 font-medium uppercase tracking-wider">Engineered to the exact specifications of championship athletes.</p>
        </div>
        
        <div className="flex gap-8">
          <a href={`mailto:${RESUME_DATA.email}`} className="text-white hover:text-gray-400 transition-colors">
            <div className="flex items-center gap-2">
                <Mail size={24} />
                <span className="font-heading font-bold uppercase tracking-wider text-sm">Email</span>
            </div>
          </a>
          <a href={RESUME_DATA.linkedin} target="_blank" rel="noreferrer" className="text-white hover:text-gray-400 transition-colors">
            <div className="flex items-center gap-2">
                <Linkedin size={24} />
                <span className="font-heading font-bold uppercase tracking-wider text-sm">LinkedIn</span>
            </div>
          </a>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-xs text-gray-500 font-bold uppercase tracking-widest">
        © {new Date().getFullYear()} Ashwin Subramaniam. All rights reserved.
      </div>
    </footer>
  );
};