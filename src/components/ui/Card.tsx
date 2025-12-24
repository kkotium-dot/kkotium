import React from 'react';

interface CardProps {
  variant?: 'default' | 'scalloped' | 'gradient';
  padding?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ variant = 'default', padding = 'md', children, onClick }) => {
  return (
    <div
      className={`card card-${variant} card-padding-${padding}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
