import React from 'react';

interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlocked: boolean;
  unlockedAt?: Date;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface BadgeDisplayProps {
  badge: Badge;
  onClick?: () => void;
}

const BadgeDisplay: React.FC<BadgeDisplayProps> = ({ badge, onClick }) => {
  return (
    <div
      className={`badge-card ${!badge.unlocked ? 'badge-locked' : `badge-${badge.rarity}`}`}
      onClick={onClick}
    >
      <div className="badge-icon">{badge.unlocked ? badge.icon : '🔒'}</div>
      <h4>{badge.name}</h4>
      <p>{badge.description}</p>
      {badge.unlocked && badge.unlockedAt && (
        <span className="unlocked-date">{badge.unlockedAt.toLocaleDateString()}</span>
      )}
    </div>
  );
};

export default BadgeDisplay;
