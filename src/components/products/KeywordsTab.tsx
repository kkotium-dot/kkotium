import React from 'react';

interface KeywordsTabProps {
  formData: any;
  setFormData: any;
}

const KeywordsTab: React.FC<KeywordsTabProps> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, keywords: e.target.value.split(', ') });
  };

  return (
    <div className="keywords-tab">
      <input
        type="text"
        value={formData.keywords.join(', ')}
        onChange={handleChange}
        placeholder="키워드 (쉼표로 구분)"
      />
    </div>
  );
};

export default KeywordsTab;
