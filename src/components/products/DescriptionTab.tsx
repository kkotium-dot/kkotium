import React from 'react';

interface DescriptionTabProps {
  formData: any;
  setFormData: any;
}

const DescriptionTab: React.FC<DescriptionTabProps> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="description-tab">
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="상세 설명"
      />
    </div>
  );
};

export default DescriptionTab;
