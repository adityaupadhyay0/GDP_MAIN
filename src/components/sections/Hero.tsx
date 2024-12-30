import React from 'react';
import { ChevronDown } from 'lucide-react';
import GradientText from '../ui/GradientText';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />
        <img
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80"
          alt="Tech background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Growth Driven <GradientText>Pioneers</GradientText>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Where Innovation Meets Excellence in Technology, Design, and Creativity
        </p>
        <div className="flex gap-4 justify-center">
          
          
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  );
};

export default Hero;