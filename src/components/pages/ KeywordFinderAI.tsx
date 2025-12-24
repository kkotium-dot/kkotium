import React, { useState } from 'react';
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';
import Button from '../../ui/Button';
import Card from '../../ui/Card';

const KeywordFinderAI: React.FC = () => {
  const [input, setInput] = useState({
    productName: '',
    category: '',
  });
  const [result, setResult] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('/api/ai/keywords', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
      .then(response => response.json())
      .then(data => setResult(data.keywords))
      .catch(error => console.error('Error finding keywords:', error));
  };

  return (
    <div className="keyword-finder-ai">
      <Sidebar currentPath="/ai/keywords" />
      <main className="main-content">
        <Header user={{ name: '사용자', level: 1 }} />
        <Card>
          <h2>AI 키워드 추천</h2>
          <form onSubmit={handleSubmit}>
            <label>
              상품명:
              <input type="text" name="productName" value={input.productName} onChange={handleChange} />
            </label>
            <label>
              카테고리:
              <input type="text" name="category" value={input.category} onChange={handleChange} />
            </label>
            <Button type="submit">추천</Button>
          </form>
          <ul>
            {result.map((item, index) => (
              <li key={index}>
                <strong>{item.keyword}</strong> (검색량: {item.searchVolume}, 경쟁도: {item.competition}, 황금도: {item.goldenScore})
              </li>
            ))}
          </ul>
        </Card>
      </main>
    </div>
  );
};

export default KeywordFinderAI;
