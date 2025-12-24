import React from 'react';

interface ShippingTabProps {
  formData: any;
  setFormData: any;
}

const ShippingTab: React.FC<ShippingTabProps> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="shipping-tab">
      <select
        name="shippingStrategy"
        value={formData.shippingStrategy}
        onChange={handleChange}
      >
        <option value="free">무료배송</option>
        <option value="conditional">조건부 무료배송</option>
        <option value="paid">유료배송</option>
      </select>
      <input
        type="number"
        name="freeShippingThreshold"
        value={formData.freeShippingThreshold}
        onChange={handleChange}
        placeholder="무료배송 기준 금액"
      />
      <input
        type="number"
        name="shippingFee"
        value={formData.shippingFee}
        onChange={handleChange}
        placeholder="배송비"
      />
    </div>
  );
};

export default ShippingTab;
