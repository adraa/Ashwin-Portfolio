import React from 'react';
import { Card } from './Card';
import { RESUME_DATA } from '../constants';
import { ShieldCheck, FileText, Award } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 border-b border-gray-200 pb-8">
           <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tighter text-nikeBlack">Expertise</h2>
           <p className="mt-2 font-medium text-lg text-nikeGray">Tools & Technologies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Tech Skills */}
          <Card className="bg-nikeLightGray rounded-sm p-8 h-full">
            <div className="mb-6 text-nikeBlack">
              <ShieldCheck size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-2xl font-bold uppercase mb-6 tracking-tight">Cybersecurity</h3>
            <ul className="space-y-3">
              {RESUME_DATA.skills.filter(s => s.category === 'Tech').map(skill => (
                <li key={skill.name} className="flex items-center text-nikeBlack font-bold text-sm uppercase tracking-wide border-b border-gray-300 pb-2 last:border-0">
                  {skill.name}
                </li>
              ))}
            </ul>
          </Card>

          {/* Management */}
          <Card className="bg-nikeLightGray rounded-sm p-8 h-full">
             <div className="mb-6 text-nikeBlack">
              <FileText size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-2xl font-bold uppercase mb-6 tracking-tight">Management</h3>
            <ul className="space-y-3">
              {RESUME_DATA.skills.filter(s => s.category === 'Management').map(skill => (
                <li key={skill.name} className="flex items-center text-nikeBlack font-bold text-sm uppercase tracking-wide border-b border-gray-300 pb-2 last:border-0">
                  {skill.name}
                </li>
              ))}
            </ul>
          </Card>

           {/* Certifications */}
           <Card className="bg-nikeBlack text-white rounded-sm p-8 h-full hover:bg-gray-900">
             <div className="mb-6 text-white">
              <Award size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-2xl font-bold uppercase mb-6 tracking-tight">Certifications</h3>
            <ul className="space-y-3">
              {RESUME_DATA.skills.filter(s => s.category === 'Cert').map(skill => (
                <li key={skill.name} className="flex items-center font-bold text-sm uppercase tracking-wide border-b border-gray-700 pb-2 last:border-0 opacity-90">
                  {skill.name}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};