import React, { useState } from 'react';

interface MarginCalculatorProps {
  formData: any;
  setFormData: any;
}

const MarginCalculator: React.FC<MarginCalculatorProps> = ({ formData, setFormData }) => {
  const [showDetails, setShowDetails] = useState(false);

  const calculateMargin = () => {
    const naverCommissionRate = 5.7;
    const naverCommission = formData.salePrice * (naverCommissionRate / 100);
    const shippingFee = formData.shippingFee;
    const supplierShippingFee = formData.supplierShippingFee;
    const supplierReturnFee = formData.supplierReturnFee;

    const totalCost = formData.supplierPrice + supplierShippingFee + supplierReturnFee;
    const actualRevenue = formData.salePrice - naverCommission - shippingFee;
    const netProfit = actualRevenue - totalCost;
    const netMarginRate = (netProfit / actualRevenue) * 100;

    return { netProfit, netMarginRate };
  };

  const { netProfit, netMarginRate } = calculateMargin();

  return (
    <div className="margin-calculator">
      <div className="margin-summary">
        <div className="profit">
          <h3>순이익</h3>
          <p>{netProfit.toLocaleString()}원</p>
        </div>
        <div className="margin-rate">
          <h3>마진율</h3>
          <p>{netMarginRate.toFixed(1)}%</p>
        </div>
      </div>
      <button onClick={() => setShowDetails(!showDetails)}>
        자세히 {showDetails ? '▲' : '▼'}
      </button>
      {showDetails && (
        <div className="margin-details">
          <p>네이버 수수료: {formData.salePrice * 0.057}원</p>
          <p>배송비: {formData.shippingFee}원</p>
          <p>공급처 배송비: {formData.supplierShippingFee}원</p>
          <p>공급처 반품비: {formData.supplierReturnFee}원</p>
        </div>
      )}
    </div>
  );
};

export default MarginCalculator;
