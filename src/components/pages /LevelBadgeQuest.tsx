import React, { useState, useEffect } from 'react';
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';
import Card from '../../ui/Card';
import Button from '../../ui/Button';

const LevelBadgeQuest: React.FC = () => {
  const [user, setUser] = useState({
    level: 1,
    exp: 0,
    badges: [],
    quests: [],
  });

  useEffect(() => {
    // 사용자 정보 API 호출
    fetch('/api/user/me')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user:', error));
  }, []);

  const handleQuestComplete = (questId: string) => {
    // 퀘스트 완료 API 호출
    fetch(`/api/quests/${questId}/complete`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error completing quest:', error));
  };

  return (
    <div className="level-badge-quest">
      <Sidebar currentPath="/achievements" />
      <main className="main-content">
        <Header user={{ name: '사용자', level: 1 }} />
        <Card>
          <h2>내 성과</h2>
          <p>레벨: {user.level}</p>
          <p>경험치: {user.exp}</p>
          <h3>배지</h3>
          <ul>
            {user.badges.map((badge, index) => (
              <li key={index}>{badge.name} ({badge.icon})</li>
            ))}
          </ul>
          <h3>퀘스트</h3>
          <ul>
            {user.quests.map((quest, index) => (
              <li key={index}>
                {quest.title} - {quest.progress}/{quest.target}
                <Button onClick={() => handleQuestComplete(quest.id)}>완료</Button>
              </li>
            ))}
          </ul>
        </Card>
      </main>
    </div>
  );
};

export default LevelBadgeQuest;
