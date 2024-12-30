import React from 'react';
import { upcomingEvents } from '../../constants/events';
import * as Icons from 'lucide-react';

const Events = () => {
  return (
    <section id="events" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => {
            const Icon = Icons[event.icon as keyof typeof Icons];
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:bg-gray-700"
              >
                <div className="text-purple-500 mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 mb-2">{event.date}</p>
                <p className="text-gray-400 mb-4">{event.location}</p>
                <p className="text-gray-300">{event.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;