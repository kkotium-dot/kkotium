import React from 'react';

interface KkottiWidgetProps {
  mood?: 'happy' | 'excited' | 'worried' | 'celebrate';
  message?: string;
}

const KkottiWidget: React.FC<KkottiWidgetProps> = ({ mood = 'happy', message }) => {
  const expressions = {
    happy: '^ㅅ^',
    excited: '*ㅅ*',
    worried: ';ㅅ;',
    celebrate: '^ㅅ^ 🎉',
  };

  return (
    <div className="kkotti-widget">
      <div className="kkotti-face">
        <div className="flower">🌸</div>
        <div className="expression">{expressions[mood]}</div>
        <div className="boots">🌿👢🌿</div>
      </div>
      {message && (
        <div className="kkotti-message">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default KkottiWidget;
