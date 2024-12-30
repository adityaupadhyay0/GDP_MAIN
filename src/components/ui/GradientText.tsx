import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ children, className = '' }) => {
  return (
    <span className={`bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;