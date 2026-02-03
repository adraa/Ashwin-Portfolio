import React, { forwardRef } from 'react';
import { RESUME_DATA } from '../constants';

// eslint-disable-next-line react/display-name
export const Summary = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section ref={ref} className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
            <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tighter text-nikeBlack shrink-0 md:w-1/3 leading-none">
                The<br/>Profile
            </h2>
            <div className="md:w-2/3">
                <h3 className="text-2xl md:text-4xl font-bold text-nikeBlack leading-tight mb-8">
                    A proactive learner with a strong foundation in forensic tools and problem solving.
                </h3>
                <p className="text-lg text-nikeGray leading-relaxed max-w-prose">
                    {RESUME_DATA.summary}
                </p>
            </div>
        </div>
      </div>
    </section>
  );
});