import React from 'react';

interface OptionsTabProps {
  formData: any;
  setFormData: any;
}

const OptionsTab: React.FC<OptionsTabProps> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="options-tab">
      <label>
        <input
          type="checkbox"
          name="hasOptions"
          checked={formData.hasOptions}
          onChange={(e) => setFormData({ ...formData, hasOptions: e.target.checked })}
        />
        옵션 사용
      </label>
      <input
        type="text"
        name="optionName"
        value={formData.optionName}
        onChange={handleChange}
        placeholder="옵션명"
      />
      <input
        type="text"
        name="optionValues"
        value={formData.optionValues.join(', ')}
        onChange={(e) => setFormData({ ...formData, optionValues: e.target.value.split(', ') })}
        placeholder="옵션값 (쉼표로 구분)"
      />
    </div>
  );
};

export default OptionsTab;
