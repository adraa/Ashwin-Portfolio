import React from 'react';
import { Card } from './Card';
import { RESUME_DATA } from '../constants';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="experience">
      <div className="mb-16 border-b border-gray-200 pb-8">
        <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tighter text-nikeBlack">Experience</h2>
        <p className="mt-2 font-medium text-lg text-nikeGray">My professional journey.</p>
      </div>

      <div className="grid gap-4">
        {RESUME_DATA.experience.map((job, index) => (
          <Card key={index} className="flex flex-col md:flex-row md:items-start gap-8 bg-white border-b border-gray-200 rounded-none px-0 py-12 hover:bg-white">
            <div className="md:w-1/3">
              <h3 className="font-heading text-3xl font-bold uppercase text-nikeBlack leading-none">{job.company}</h3>
              <div className="flex flex-col mt-2">
                 <span className="text-nikeBlack font-bold text-sm">{job.duration}</span>
                 <span className="text-nikeGray text-sm">{job.location}</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h4 className="font-heading text-xl font-bold uppercase text-nikeBlack mb-4 tracking-wide">{job.role}</h4>
              <p className="text-nikeBlack leading-relaxed text-base md:text-lg max-w-2xl">
                {job.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};