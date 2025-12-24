import React from 'react';

interface Quest {
  id: string;
  title: string;
  description: string;
  progress: number;
  target: number;
  completed: boolean;
}

interface DailyQuestProps {
  quests?: Quest[];
}

const DailyQuest: React.FC<DailyQuestProps> = ({ quests = [] }) => {
  const defaultQuests: Quest[] = [
    {
      id: '1',
      title: '상품 3개 등록하기',
      description: '오늘 상품 3개를 등록하세요',
      progress: 0,
      target: 3,
      completed: false,
    },
    {
      id: '2',
      title: 'AI 상품명 5개 생성',
      description: 'AI로 상품명을 5개 생성하세요',
      progress: 0,
      target: 5,
      completed: false,
    },
  ];

  const questList = quests.length > 0 ? quests : defaultQuests;

  return (
    <div className="daily-quest">
      <h3>📋 데일리 퀘스트</h3>
      {questList.map((quest) => (
        <div key={quest.id} className="quest-card">
          <h4>{quest.title}</h4>
          <p>{quest.description}</p>
          <div className="quest-progress">
            <div
              className="quest-progress-bar"
              style={{ width: `${(quest.progress / quest.target) * 100}%` }}
            />
            <span>
              {quest.progress} / {quest.target}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyQuest;
