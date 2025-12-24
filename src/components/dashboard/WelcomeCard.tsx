import React from 'react';

interface WelcomeCardProps {
  userName: string;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ userName }) => {
  return (
    <div className="welcome-card">
      <h2>안녕하세요, {userName}님! 🌸</h2>
      <p>오늘도 꽃틔움 가든에서 멋진 상품을 가꿔보세요.</p>
    </div>
  );
};

export default WelcomeCard;
