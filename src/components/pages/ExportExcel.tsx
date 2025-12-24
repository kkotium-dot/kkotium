import React, { useState } from 'react';
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';
import Button from '../../ui/Button';
import Card from '../../ui/Card';

const ExportExcel: React.FC = () => {
  const [products, setProducts] = useState([]);

  const handleExport = () => {
    // 상품 목록 API 호출
    fetch('/api/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        // 엑셀 파일 생성 및 다운로드 로직 구현
        const csvContent = [
          ['상품명', 'SKU', '카테고리', '공급처', '공급처 가격', '판매가', '마진율', '배송 전략', '무료 배송 기준', '배송비', '공급처 배송비', '공급처 반품비', '옵션 유무', '옵션명', '옵션값', '메인이미지', '추가이미지', '설명', '키워드', '태그', '내부노트', '내부태그', '꼬띠 점수', '상태'].join(','),
          ...data.map(product => [
            product.name,
            product.sku,
            product.category,
            product.supplier,
            product.supplierPrice,
            product.salePrice,
            product.margin,
            product.shippingStrategy,
            product.freeShippingThreshold,
            product.shippingFee,
            product.supplierShippingFee,
            product.supplierReturnFee,
            product.hasOptions,
            product.optionName,
            product.optionValues.join(','),
            product.mainImage,
            product.additionalImages.join(','),
            product.description,
            product.keywords.join(','),
            product.tags.join(','),
            product.internalNote,
            product.internalTags.join(','),
            product.kKotiScore,
            product.status
          ].join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'products.csv';
        link.click();
      })
      .catch(error => console.error('Error exporting products:', error));
  };

  return (
    <div className="export-excel">
      <Sidebar currentPath="/products/export" />
      <main className="main-content">
        <Header user={{ name: '사용자', level: 1 }} />
        <Card>
          <h2>엑셀 내보내기</h2>
          <Button onClick={handleExport}>내보내기</Button>
        </Card>
      </main>
    </div>
  );
};

export default ExportExcel;
