import React, { useEffect, useState } from 'react';
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';
import Button from '../../ui/Button';
import Card from '../../ui/Card';

const ProductCopy: React.FC = () => {
  const [product, setProduct] = useState({
    name: '',
    sku: '',
    category: '',
    supplier: '',
    supplierPrice: 0,
    salePrice: 0,
    margin: 0,
    shippingStrategy: '',
    freeShippingThreshold: 0,
    shippingFee: 0,
    supplierShippingFee: 0,
    supplierReturnFee: 0,
    hasOptions: false,
    optionName: '',
    optionValues: [],
    mainImage: '',
    additionalImages: [],
    description: '',
    keywords: [],
    tags: [],
    internalNote: '',
    internalTags: [],
    kKotiScore: 0,
    status: '',
  });

  useEffect(() => {
    // 상품 상세 API 호출
    const productId = window.location.pathname.split('/').pop();
    fetch(`/api/products/${productId}`)
      .then(response => response.json())
      .then(data => {
        // 상품 복사용 데이터 설정
        const copiedProduct = { ...data, id: '', sku: '', name: `${data.name} (복사)` };
        setProduct(copiedProduct);
      })
      .catch(error => console.error('Error fetching product:', error));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 상품 복사 API 호출
    fetch(`/api/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error copying product:', error));
  };

  return (
    <div className="product-copy">
      <Sidebar currentPath={`/products/${product.id}/copy`} />
      <main className="main-content">
        <Header user={{ name: '사용자', level: 1 }} />
        <Card>
          <h2>상품 복사</h2>
          <form onSubmit={handleSubmit}>
            <label>
              상품명:
              <input type="text" name="name" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
            </label>
            <label>
              SKU:
              <input type="text" name="sku" value={product.sku} onChange={(e) => setProduct({ ...product, sku: e.target.value })} />
            </label>
            <label>
              카테고리:
              <input type="text" name="category" value={product.category} onChange={(e) => setProduct({ ...product, category: e.target.value })} />
            </label>
            <label>
              공급처:
              <input type="text" name="supplier" value={product.supplier} onChange={(e) => setProduct({ ...product, supplier: e.target.value })} />
            </label>
            <label>
              공급처 가격:
              <input type="number" name="supplierPrice" value={product.supplierPrice} onChange={(e) => setProduct({ ...product, supplierPrice: Number(e.target.value) })} />
            </label>
            <label>
              판매가:
              <input type="number" name="salePrice" value={product.salePrice} onChange={(e) => setProduct({ ...product, salePrice: Number(e.target.value) })} />
            </label>
            <label>
              마진율:
              <input type="number" name="margin" value={product.margin} onChange={(e) => setProduct({ ...product, margin: Number(e.target.value) })} />
            </label>
            <label>
              배송 전략:
              <input type="text" name="shippingStrategy" value={product.shippingStrategy} onChange={(e) => setProduct({ ...product, shippingStrategy: e.target.value })} />
            </label>
            <label>
              무료 배송 기준:
              <input type="number" name="freeShippingThreshold" value={product.freeShippingThreshold} onChange={(e) => setProduct({ ...product, freeShippingThreshold: Number(e.target.value) })} />
            </label>
            <label>
              배송비:
              <input type="number" name="shippingFee" value={product.shippingFee} onChange={(e) => setProduct({ ...product, shippingFee: Number(e.target.value) })} />
            </label>
            <label>
              공급처 배송비:
              <input type="number" name="supplierShippingFee" value={product.supplierShippingFee} onChange={(e) => setProduct({ ...product, supplierShippingFee: Number(e.target.value) })} />
            </label>
            <label>
              공급처 반품비:
              <input type="number" name="supplierReturnFee" value={product.supplierReturnFee} onChange={(e) => setProduct({ ...product, supplierReturnFee: Number(e.target.value) })} />
            </label>
            <label>
              옵션 유무:
              <input type="checkbox" name="hasOptions" checked={product.hasOptions} onChange={(e) => setProduct({ ...product, hasOptions: e.target.checked })} />
            </label>
            <label>
              옵션명:
              <input type="text" name="optionName" value={product.optionName} onChange={(e) => setProduct({ ...product, optionName: e.target.value })} />
            </label>
            <label>
              옵션값:
              <input type="text" name="optionValues" value={product.optionValues.join(',')} onChange={(e) => setProduct({ ...product, optionValues: e.target.value.split(',') })} />
            </label>
            <label>
              메인이미지:
              <input type="text" name="mainImage" value={product.mainImage} onChange={(e) => setProduct({ ...product, mainImage: e.target.value })} />
            </label>
            <label>
              추가이미지:
              <input type="text" name="additionalImages" value={product.additionalImages.join(',')} onChange={(e) => setProduct({ ...product, additionalImages: e.target.value.split(',') })} />
            </label>
            <label>
              설명:
              <textarea name="description" value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} />
            </label>
            <label>
              키워드:
              <input type="text" name="keywords" value={product.keywords.join(',')} onChange={(e) => setProduct({ ...product, keywords: e.target.value.split(',') })} />
            </label>
            <label>
              태그:
              <input type="text" name="tags" value={product.tags.join(',')} onChange={(e) => setProduct({ ...product, tags: e.target.value.split(',') })} />
            </label>
            <label>
              내부노트:
              <textarea name="internalNote" value={product.internalNote} onChange={(e) => setProduct({ ...product, internalNote: e.target.value })} />
            </label>
            <label>
              내부태그:
              <input type="text" name="internalTags" value={product.internalTags.join(',')} onChange={(e) => setProduct({ ...product, internalTags: e.target.value.split(',') })} />
            </label>
            <label>
              꼬띠 점수:
              <input type="number" name="kKotiScore" value={product.kKotiScore} onChange={(e) => setProduct({ ...product, kKotiScore: Number(e.target.value) })} />
            </label>
            <label>
              상태:
              <input type="text" name="status" value={product.status} onChange={(e) => setProduct({ ...product, status: e.target.value })} />
            </label>
            <Button type="submit">복사</Button>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default ProductCopy;
