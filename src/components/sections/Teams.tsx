import React from 'react';
import { teams } from '../../constants/teams';
import TeamCard from '../ui/TeamCard';

const Teams = () => {
  return (
    <section id="teams" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <TeamCard key={team.id} {...team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;