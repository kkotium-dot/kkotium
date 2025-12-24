import React from 'react';
import GardenBackground from './gamification/GardenBackground';
import WelcomeCard from './dashboard/WelcomeCard';
import DailyQuest from './dashboard/DailyQuest';

interface DashboardProps {
  userLevel: number;
  userName: string;
}

const Dashboard: React.FC<DashboardProps> = ({ userLevel, userName }) => {
  return (
    <div className="dashboard-container">
      <GardenBackground level={userLevel} />
      <section className="welcome-section">
        <WelcomeCard userName={userName} />
      </section>
      <section className="quest-section">
        <DailyQuest />
      </section>
    </div>
  );
};

export default Dashboard;
