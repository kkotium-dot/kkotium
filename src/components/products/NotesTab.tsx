import React from 'react';

interface NotesTabProps {
  formData: any;
  setFormData: any;
}

const NotesTab: React.FC<NotesTabProps> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, internalNote: e.target.value });
  };

  return (
    <div className="notes-tab">
      <input
        type="text"
        name="internalNote"
        value={formData.internalNote}
        onChange={handleChange}
        placeholder="메모"
      />
    </div>
  );
};

export default NotesTab;
