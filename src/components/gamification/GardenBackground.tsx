import React from 'react';

interface GardenBackgroundProps {
  level: number;
  products?: any[];
}

const GardenBackground: React.FC<GardenBackgroundProps> = ({ level, products = [] }) => {
  const gardenElements = generateGarden(level, products.length);

  return (
    <div className="garden-background">
      {gardenElements.map((element, index) => (
        <GardenElement key={index} type={element.type} position={element.position} />
      ))}
    </div>
  );
};

function generateGarden(level: number, productCount: number) {
  const elements = [];

  // 기본 잔디
  if (level >= 1) {
    elements.push({ type: 'grass', position: 'bottom' });
  }

  // 꽃 추가 (상품 수에 비례)
  const flowerCount = Math.min(productCount, 50);
  for (let i = 0; i < flowerCount; i++) {
    elements.push({
      type: getRandomFlower(),
      position: getRandomPosition(),
    });
  }

  // 나비/벌 (레벨에 따라)
  if (level >= 6) {
    elements.push({ type: 'butterfly', position: 'flying' });
  }
  if (level >= 11) {
    elements.push({ type: 'bee', position: 'flying' });
  }

  return elements;
}

function getRandomFlower() {
  const flowers = ['rose', 'tulip', 'daisy', 'sunflower'];
  return flowers[Math.floor(Math.random() * flowers.length)];
}

function getRandomPosition() {
  const positions = ['left', 'center', 'right'];
  return positions[Math.floor(Math.random() * positions.length)];
}

function GardenElement({ type, position }: { type: string; position: string }) {
  return <div className={`garden-element ${type} ${position}`} />;
}

export default GardenBackground;
