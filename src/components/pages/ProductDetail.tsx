import React, { useEffect, useState } from 'react';
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';
import Card from '../../ui/Card';
import Button from '../../ui/Button';

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // 상품 상세 API 호출
    const productId = window.location.pathname.split('/').pop();
    fetch(`/api/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, []);

  if (!product) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="product-detail">
      <Sidebar currentPath={`/products/${product.id}`} />
      <main className="main-content">
        <Header user={{ name: '사용자', level: 1 }} />
        <Card>
          <h2>{product.name}</h2>
          <p><strong>SKU:</strong> {product.sku}</p>
          <p><strong>카테고리:</strong> {product.category}</p>
          <p><strong>공급처:</strong> {product.supplier}</p>
          <p><strong>공급처 가격:</strong> {product.supplierPrice}</p>
          <p><strong>판매가:</strong> {product.salePrice}</p>
          <p><strong>마진율:</strong> {product.margin}</p>
          <p><strong>배송 전략:</strong> {product.shippingStrategy}</p>
          <p><strong>무료 배송 기준:</strong> {product.freeShippingThreshold}</p>
          <p><strong>배송비:</strong> {product.shippingFee}</p>
          <p><strong>공급처 배송비:</strong> {product.supplierShippingFee}</p>
          <p><strong>공급처 반품비:</strong> {product.supplierReturnFee}</p>
          <p><strong>옵션 유무:</strong> {product.hasOptions ? '있음' : '없음'}</p>
          <p><strong>옵션명:</strong> {product.optionName}</p>
          <p><strong>옵션값:</strong> {product.optionValues.join(', ')}</p>
          <p><strong>메인이미지:</strong> {product.mainImage}</p>
          <p><strong>추가이미지:</strong> {product.additionalImages.join(', ')}</p>
          <p><strong>설명:</strong> {product.description}</p>
          <p><strong>키워드:</strong> {product.keywords.join(', ')}</p>
          <p><strong>태그:</strong> {product.tags.join(', ')}</p>
          <p><strong>내부노트:</strong> {product.internalNote}</p>
          <p><strong>내부태그:</strong> {product.internalTags.join(', ')}</p>
          <p><strong>꼬띠 점수:</strong> {product.kKotiScore}</p>
          <p><strong>상태:</strong> {product.status}</p>
          <Button>수정</Button>
          <Button>삭제</Button>
        </Card>
      </main>
    </div>
  );
};

export default ProductDetail;
