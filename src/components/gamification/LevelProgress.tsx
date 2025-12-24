import React from 'react';

interface LevelProgressProps {
  level: number;
  exp: number;
  nextLevelExp: number;
}

const LevelProgress: React.FC<LevelProgressProps> = ({ level, exp, nextLevelExp }) => {
  const progress = (exp / nextLevelExp) * 100;
  const levelTitle = getLevelTitle(level);
  const remaining = nextLevelExp - exp;

  return (
    <div className="level-progress">
      <div className="level-info">
        <div className="level-icon">{getLevelIcon(level)}</div>
        <div className="level-text">
          <h3>Level {level}</h3>
          <p>{levelTitle}</p>
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
        <span className="progress-text">{progress.toFixed(0)}%</span>
      </div>
      <p className="remaining">다음 레벨까지: {remaining}개 상품</p>
    </div>
  );
};

function getLevelTitle(level: number): string {
  if (level <= 5) return '🌱 새싹 정원사';
  if (level <= 10) return '🌷 튤립 정원사';
  if (level <= 20) return '🌺 정원 마스터';
  return '🌸 꽃틔움 명인';
}

function getLevelIcon(level: number): string {
  if (level <= 5) return '🌱';
  if (level <= 10) return '🌷';
  if (level <= 20) return '🌺';
  return '🌸';
}

export default LevelProgress;
