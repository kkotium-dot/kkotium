import React, { useState } from 'react';
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';
import Button from '../../ui/Button';
import Card from '../../ui/Card';

const ProductNameAI: React.FC = () => {
  const [input, setInput] = useState({
    category: '',
    keywords: '',
    target: '',
  });
  const [result, setResult] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // AI 상품명 생성 API 호출
    fetch('/api/ai/product-name', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
      .then(response => response.json())
      .then(data => setResult(data.names))
      .catch(error => console.error('Error generating product names:', error));
  };

  return (
    <div className="product-name-ai">
      <Sidebar currentPath="/ai/product-name" />
      <main className="main-content">
        <Header user={{ name: '사용자', level: 1 }} />
        <Card>
          <h2>AI 상품명 생성</h2>
          <form onSubmit={handleSubmit}>
            <label>
              카테고리:
              <input type="text" name="category" value={input.category} onChange={handleChange} />
            </label>
            <label>
              키워드:
              <input type="text" name="keywords" value={input.keywords} onChange={handleChange} />
            </label>
            <label>
              타겟층:
              <input type="text" name="target" value={input.target} onChange={handleChange} />
            </label>
            <Button type="submit">생성</Button>
          </form>
          <ul>
            {result.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> ({item.strategy})
              </li>
            ))}
          </ul>
        </Card>
      </main>
    </div>
  );
};

export default ProductNameAI;
