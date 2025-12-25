import React, { useState } from 'react';
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';
import Button from '../../ui/Button';
import Card from '../../ui/Card';

const QuickRegister: React.FC = () => {
  const [product, setProduct] = useState({
    name: '',
    supplier: '',
    supplierPrice: 0,
    salePrice: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 빠른 상품 등록 API 호출
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then(response => response.json())
      .then(data => {
        console.log('상품 등록 완료:', data);
        alert('상품이 등록되었습니다!');
        setProduct({ name: '', supplier: '', supplierPrice: 0, salePrice: 0 });
      })
      .catch(error => console.error('Error registering product:', error));
  };

  return (
    <div className="quick-register">
      <Sidebar currentPath="/products/new" />
      <main className="main-content">
        <Header user={{ name: '사용자', level: 1 }} />
        <Card>
          <h2>⚡ 빠른 등록</h2>
          <p>필수 정보만 입력하고 10초 만에 상품을 등록하세요!</p>
          <form onSubmit={handleSubmit}>
            <label>
              상품명:
              <input 
                type="text" 
                name="name" 
                value={product.name} 
                onChange={handleChange} 
                placeholder="예: 무선 블루투스 이어폰"
                required
              />
            </label>
            <label>
              공급처:
              <input 
                type="text" 
                name="supplier" 
                value={product.supplier} 
                onChange={handleChange} 
                placeholder="예: 도매꾹"
                required
              />
            </label>
            <label>
              공급처 가격:
              <input 
                type="number" 
                name="supplierPrice" 
                value={product.supplierPrice} 
                onChange={handleChange} 
                placeholder="0"
                required
              />
            </label>
            <label>
              판매가:
              <input 
                type="number" 
                name="salePrice" 
                value={product.salePrice} 
                onChange={handleChange} 
                placeholder="0"
                required
              />
            </label>
            <Button type="submit">🚀 등록하기</Button>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default QuickRegister;
