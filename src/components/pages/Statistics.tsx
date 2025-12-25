import React, { useEffect, useState } from 'react';
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';
import Card from '../../ui/Card';

const Statistics: React.FC = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalSales: 0,
    avgMargin: 0,
    topProducts: [],
    recentSales: [],
  });

  useEffect(() => {
    // 통계 데이터 API 호출
    fetch('/api/stats')
      .then(response => response.json())
      .then(data => setStats(data))
      .catch(error => console.error('Error fetching stats:', error));
  }, []);

  return (
    <div className="statistics">
      <Sidebar currentPath="/stats" />
      <main className="main-content">
        <Header user={{ name: '사용자', level: 1 }} />
        <Card>
          <h2>📊 통계</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>총 상품 수</h3>
              <p>{stats.totalProducts}</p>
            </div>
            <div className="stat-item">
              <h3>총 판매 수</h3>
              <p>{stats.totalSales}</p>
            </div>
            <div className="stat-item">
              <h3>평균 마진율</h3>
              <p>{stats.avgMargin}%</p>
            </div>
          </div>
          <h3>인기 상품</h3>
          <ul>
            {stats.topProducts.map((product, index) => (
              <li key={index}>
                {product.name} - 판매 {product.salesCount}개
              </li>
            ))}
          </ul>
          <h3>최근 판매</h3>
          <ul>
            {stats.recentSales.map((sale, index) => (
              <li key={index}>
                {sale.productName} - {sale.date}
              </li>
            ))}
          </ul>
        </Card>
      </main>
    </div>
  );
};

export default Statistics;
