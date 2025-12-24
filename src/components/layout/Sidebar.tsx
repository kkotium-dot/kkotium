import React from 'react';

interface SidebarProps {
  currentPath: string;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPath }) => {
  const menuItems = [
    { icon: '🏠', label: '대시보드', path: '/' },
    { icon: '🌸', label: '상품 관리', path: '/products' },
    { icon: '➕', label: '빠른 등록', path: '/products/new' },
    { icon: '📊', label: '통계', path: '/stats' },
    { icon: '🏆', label: '내 성과', path: '/achievements' },
    { icon: '⚙️', label: '설정', path: '/settings' },
  ];

  return (
    <aside className="sidebar">
      <Logo />
      <nav>
        {menuItems.map((item) => (
          <MenuItem key={item.path} {...item} active={currentPath === item.path} />
        ))}
      </nav>
      <KkottiWidget />
    </aside>
  );
};

export default Sidebar;
