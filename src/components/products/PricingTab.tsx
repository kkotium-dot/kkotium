import React from 'react';

interface PricingTabProps {
  formData: any;
  setFormData: any;
}

const PricingTab: React.FC<PricingTabProps> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pricing-tab">
      <input
        type="number"
        name="supplierPrice"
        value={formData.supplierPrice}
        onChange={handleChange}
        placeholder="공급처 가격"
      />
      <input
        type="number"
        name="salePrice"
        value={formData.salePrice}
        onChange={handleChange}
        placeholder="판매가"
      />
      <input
        type="number"
        name="shippingFee"
        value={formData.shippingFee}
        onChange={handleChange}
        placeholder="배송비"
      />
      <input
        type="number"
        name="supplierShippingFee"
        value={formData.supplierShippingFee}
        onChange={handleChange}
        placeholder="공급처 배송비"
      />
      <input
        type="number"
        name="supplierReturnFee"
        value={formData.supplierReturnFee}
        onChange={handleChange}
        placeholder="공급처 반품비"
      />
    </div>
  );
};

export default PricingTab;
