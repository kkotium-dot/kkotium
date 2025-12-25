import React, { useState } from 'react';
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';
import Button from '../../ui/Button';
import Card from '../../ui/Card';

const KkotiScoreAI: React.FC = () => {
  const [input, setInput] = useState({
    margin: 0,
    difficulty: 0,
    competition: 0,
    risk: 0,
    turnover: 0,
    seasonality: 0,
    cs: 0,
    trend: 0,
    photo: 0,
    brand: 0,
  });
  const [result, setResult] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: Number(value) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('/api/ai/kkoti-score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    })
      .then(response => response.json())
      .then(data => setResult(data))
      .catch(error => console.error('Error calculating Kkoti score:', error));
  };

  return (
    <div className="kkoti-score-ai">
      <Sidebar currentPath="/ai/kkoti-score" />
      <main className="main-content">
        <Header user={{ name: '사용자', level: 1 }} />
        <Card>
          <h2>AI 꼬띠 점수 평가</h2>
          <form onSubmit={handleSubmit}>
            <label>
              마진율:
              <input type="number" name="margin" value={input.margin} onChange={handleChange} />
            </label>
            <label>
              판매 난이도:
              <input type="number" name="difficulty" value={input.difficulty} onChange={handleChange} />
            </label>
            <label>
              경쟁 강도:
              <input type="number" name="competition" value={input.competition} onChange={handleChange} />
            </label>
            <label>
              배송 리스크:
              <input type="number" name="risk" value={input.risk} onChange={handleChange} />
            </label>
            <label>
              재고 회전율:
              <input type="number" name="turnover" value={input.turnover} onChange={handleChange} />
            </label>
            <label>
              계절성:
              <input type="number" name="seasonality" value={input.seasonality} onChange={handleChange} />
            </label>
            <label>
              CS 난이도:
              <input type="number" name="cs" value={input.cs} onChange={handleChange} />
            </label>
            <label>
              트렌드 적합성:
              <input type="number" name="trend" value={input.trend} onChange={handleChange} />
            </label>
            <label>
              사진 난이도:
              <input type="number" name="photo" value={input.photo} onChange={handleChange} />
            </label>
            <label>
              브랜드 적합성:
              <input type="number" name="brand" value={input.brand} onChange={handleChange} />
            </label>
            <Button type="submit">평가</Button>
          </form>
          {result && (
            <div>
              <p>총점: {result.totalScore}</p>
              <p>피드백: {result.feedback}</p>
              <p>추천: {result.recommendation}</p>
            </div>
          )}
        </Card>
      </main>
    </div>
  );
};

export default KkotiScoreAI;
