import React from 'react';
import * as Icons from 'lucide-react';

interface TeamCardProps {
  name: string;
  description: string;
  icon: keyof typeof Icons;
  color: string;
  bgColor: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, description, icon, color, bgColor }) => {
  const Icon = Icons[icon];

  return (
    <div className={`rounded-xl p-6 ${bgColor} backdrop-blur-sm transition-all duration-300 hover:scale-105`}>
      <div className={`${color} mb-4`}>
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default TeamCard;