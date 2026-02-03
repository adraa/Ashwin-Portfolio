import React from 'react';

interface StatusPillProps {
  icon?: React.ReactNode;
  text: string;
  dotColor?: string;
}

export const StatusPill: React.FC<StatusPillProps> = ({ icon, text, dotColor }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#E5E5E5] rounded-full hover:border-nikeBlack transition-colors duration-300">
      {dotColor && (
        <span className="relative flex h-2.5 w-2.5">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColor}`}></span>
          <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${dotColor}`}></span>
        </span>
      )}
      {icon && <span className="text-nikeBlack">{icon}</span>}
      <span className="text-xs font-bold uppercase tracking-wide text-nikeBlack">{text}</span>
    </div>
  );
};