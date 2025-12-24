import React, { useState } from 'react';
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';
import Button from '../../ui/Button';
import Card from '../../ui/Card';

const MarginCalculator: React.FC = () => {
  const [input, setInput] = useState({
    supplierPrice: 0,
    salePrice: 0,
  });
  const [result, setResult] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: Number(value) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const margin = ((input.salePrice - input.supplierPrice) / input.salePrice) * 100;
    setResult({ margin: margin.toFixed(2) });
  };

  return (
    <div className="margin-calculator">
      <Sidebar currentPath="/margin/calculate" />
      <main className="main-content">
        <Header user={{ name: '사용자', level: 1 }} />
        <Card>
          <h2>마진 계산기</h2>
          <form onSubmit={handleSubmit}>
            <label>
              공급처 가격:
              <input type="number" name="supplierPrice" value={input.supplierPrice} onChange={handleChange} />
            </label>
            <label>
              판매가:
              <input type="number" name="salePrice" value={input.salePrice} onChange={handleChange} />
            </label>
            <Button type="submit">계산</Button>
          </form>
          {result && <p>마진율: {result.margin}%</p>}
        </Card>
      </main>
    </div>
  );
};

export default MarginCalculator;
