import React from 'react';

interface ImagesTabProps {
  formData: any;
  setFormData: any;
}

const ImagesTab: React.FC<ImagesTabProps> = ({ formData, setFormData }) => {
  const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, mainImage: e.target.files[0] });
    }
  };

  const handleAdditionalImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, additionalImages: Array.from(e.target.files) });
    }
  };

  return (
    <div className="images-tab">
      <label>
        대표 이미지
        <input
          type="file"
          accept="image/*"
          onChange={handleMainImageChange}
        />
      </label>
      <label>
        추가 이미지
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleAdditionalImagesChange}
        />
      </label>
    </div>
  );
};

export default ImagesTab;
