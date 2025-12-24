import React from 'react';

interface HeaderProps {
  user: any;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>🌸 꽃틔움 가든</h1>
      </div>
      <div className="header-right">
        <LevelBadge level={user.level} />
        <NotificationBell count={notifications.length} />
        <ProfileMenu user={user} />
      </div>
    </header>
  );
};

export default Header;
