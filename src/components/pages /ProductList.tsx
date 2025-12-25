import React, { useEffect, useState } from 'react';
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';
import Card from '../../ui/Card';
import Button from '../../ui/Button';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 상품 목록 API 호출
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-list">
      <Sidebar currentPath="/products" />
      <main className="main-content">
        <Header user={{ name: '사용자', level: 1 }} />
        <Card>
          <h2>상품 목록</h2>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <strong>{product.name}</strong> - {product.sku}
                <Button>상세보기</Button>
                <Button>수정</Button>
                <Button>삭제</Button>
              </li>
            ))}
          </ul>
        </Card>
      </main>
    </div>
  );
};

export default ProductList;
