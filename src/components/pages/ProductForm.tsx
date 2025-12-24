import React, { useState } from 'react';
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';
import Button from '../../ui/Button';
import Card from '../../ui/Card';

const ProductForm: React.FC = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 상품 등록 로직 구현
    console.log(product);
  };

  return (
    <div className="product-form">
      <Sidebar currentPath="/products/new" />
      <main className="main-content">
        <Header user={{ name: '사용자', level: 1 }} />
        <Card>
          <h2>상품 등록</h2>
          <form onSubmit={handleSubmit}>
            <label>
              상품명:
              <input type="text" name="name" value={product.name} onChange={handleChange} />
            </label>
            <label>
              SKU:
              <input type="text" name="sku" value={product.sku} onChange={handleChange} />
            </label>
            <label>
              카테고리:
              <input type="text" name="category" value={product.category} onChange={handleChange} />
            </label>
            <label>
              공급처:
              <input type="text" name="supplier" value={product.supplier} onChange={handleChange} />
            </label>
            <label>
              공급처 가격:
              <input type="number" name="supplierPrice" value={product.supplierPrice} onChange={handleChange} />
            </label>
            <label>
              판매가:
              <input type="number" name="salePrice" value={product.salePrice} onChange={handleChange} />
            </label>
            <label>
              마진율:
              <input type="number" name="margin" value={product.margin} onChange={handleChange} />
            </label>
            <label>
              배송 전략:
              <input type="text" name="shippingStrategy" value={product.shippingStrategy} onChange={handleChange} />
            </label>
            <label>
              무료 배송 기준:
              <input type="number" name="freeShippingThreshold" value={product.freeShippingThreshold} onChange={handleChange} />
            </label>
            <label>
              배송비:
              <input type="number" name="shippingFee" value={product.shippingFee} onChange={handleChange} />
            </label>
            <label>
              공급처 배송비:
              <input type="number" name="supplierShippingFee" value={product.supplierShippingFee} onChange={handleChange} />
            </label>
            <label>
              공급처 반품비:
              <input type="number" name="supplierReturnFee" value={product.supplierReturnFee} onChange={handleChange} />
            </label>
            <label>
              옵션 유무:
              <input type="checkbox" name="hasOptions" checked={product.hasOptions} onChange={(e) => setProduct({ ...product, hasOptions: e.target.checked })} />
            </label>
            <label>
              옵션명:
              <input type="text" name="optionName" value={product.optionName} onChange={handleChange} />
            </label>
            <label>
              옵션값:
              <input type="text" name="optionValues" value={product.optionValues.join(',')} onChange={(e) => setProduct({ ...product, optionValues: e.target.value.split(',') })} />
            </label>
            <label>
              메인이미지:
              <input type="text" name="mainImage" value={product.mainImage} onChange={handleChange} />
            </label>
            <label>
              추가이미지:
              <input type="text" name="additionalImages" value={product.additionalImages.join(',')} onChange={(e) => setProduct({ ...product, additionalImages: e.target.value.split(',') })} />
            </label>
            <label>
              설명:
              <textarea name="description" value={product.description} onChange={handleChange} />
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
              <textarea name="internalNote" value={product.internalNote} onChange={handleChange} />
            </label>
            <label>
              내부태그:
              <input type="text" name="internalTags" value={product.internalTags.join(',')} onChange={(e) => setProduct({ ...product, internalTags: e.target.value.split(',') })} />
            </label>
            <label>
              꼬띠 점수:
              <input type="number" name="kKotiScore" value={product.kKotiScore} onChange={handleChange} />
            </label>
            <label>
              상태:
              <input type="text" name="status" value={product.status} onChange={handleChange} />
            </label>
            <Button type="submit">상품 등록</Button>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default ProductForm;
