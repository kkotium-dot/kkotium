import React from 'react';

interface BasicInfoTabProps {
  formData: any;
  setFormData: any;
}

const BasicInfoTab: React.FC<BasicInfoTabProps> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="basic-info-tab">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="상품명"
      />
      <input
        type="text"
        name="supplier"
        value={formData.supplier}
        onChange={handleChange}
        placeholder="공급처"
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="카테고리"
      />
      <input
        type="text"
        name="sku"
        value={formData.sku}
        onChange={handleChange}
        placeholder="SKU"
      />
    </div>
  );
};

export default BasicInfoTab;
