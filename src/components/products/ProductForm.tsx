import React, { useState } from 'react';

interface ProductFormState {
  name: string;
  supplier: string;
  category: string;
  sku: string;
  supplierPrice: number;
  salePrice: number;
  shippingStrategy: 'free' | 'conditional' | 'paid';
  freeShippingThreshold: number;
  shippingFee: number;
  supplierShippingFee: number;
  supplierReturnFee: number;
  hasOptions: boolean;
  optionName: string;
  optionValues: string[];
  mainImage: File | null;
  additionalImages: File[];
  description: string;
  keywords: string[];
  tags: string[];
  internalNote: string;
  internalTags: string[];
}

const ProductForm: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [formData, setFormData] = useState<ProductFormState>({
    name: '',
    supplier: '',
    category: '',
    sku: '',
    supplierPrice: 0,
    salePrice: 0,
    shippingStrategy: 'free',
    freeShippingThreshold: 0,
    shippingFee: 0,
    supplierShippingFee: 0,
    supplierReturnFee: 0,
    hasOptions: false,
    optionName: '',
    optionValues: [],
    mainImage: null,
    additionalImages: [],
    description: '',
    keywords: [],
    tags: [],
    internalNote: '',
    internalTags: [],
  });

  const tabs = [
    { label: '기본정보', component: BasicInfoTab },
    { label: '가격&마진', component: PricingTab },
    { label: '배송', component: ShippingTab },
    { label: '옵션', component: OptionsTab },
    { label: '이미지', component: ImagesTab },
    { label: '상세설명', component: DescriptionTab },
    { label: '키워드', component: KeywordsTab },
    { label: '메모', component: NotesTab },
  ];

  const handleTabChange = (index: number) => {
    setCurrentTab(index);
  };

  const handleSave = () => {
    // 폼 저장 로직
  };

  const handleSaveDraft = () => {
    // 임시 저장 로직
  };

  const handleCancel = () => {
    // 취소 로직
  };

  const handleExport = () => {
    // 엑셀 생성 로직
  };

  return (
    <div className="product-form">
      <div className="tab-nav">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(index)}
            className={currentTab === index ? 'active' : ''}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[currentTab].component({ formData, setFormData })}
      </div>
      <div className="footer">
        <button onClick={handleCancel}>취소</button>
        <button onClick={handleSaveDraft}>임시저장</button>
        <button onClick={handleSave}>저장</button>
        <button onClick={handleExport}>엑셀 생성</button>
      </div>
    </div>
  );
};

export default ProductForm;
