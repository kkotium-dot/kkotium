import React, { useState, useEffect } from 'react';
import Sidebar from '../../layout/Sidebar';
import Header from '../../layout/Header';
import Button from '../../ui/Button';
import Card from '../../ui/Card';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    name: '',
    email: '',
    defaultSupplier: '',
    defaultShippingFee: 0,
    defaultMarginTarget: 0,
    naverApiKey: '',
    openaiApiKey: '',
  });

  useEffect(() => {
    // 설정 데이터 API 호출
    fetch('/api/user/settings')
      .then(response => response.json())
      .then(data => setSettings(data))
      .catch(error => console.error('Error fetching settings:', error));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 설정 저장 API 호출
    fetch('/api/user/settings', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settings),
    })
      .then(response => response.json())
      .then(data => {
        console.log('설정 저장 완료:', data);
        alert('설정이 저장되었습니다!');
      })
      .catch(error => console.error('Error saving settings:', error));
  };

  return (
    <div className="settings">
      <Sidebar currentPath="/settings" />
      <main className="main-content">
        <Header user={{ name: '사용자', level: 1 }} />
        <Card>
          <h2>⚙️ 설정</h2>
          <form onSubmit={handleSubmit}>
            <h3>프로필</h3>
            <label>
              이름:
              <input 
                type="text" 
                name="name" 
                value={settings.name} 
                onChange={handleChange} 
              />
            </label>
            <label>
              이메일:
              <input 
                type="email" 
                name="email" 
                value={settings.email} 
                onChange={handleChange} 
              />
            </label>
            
            <h3>기본 설정</h3>
            <label>
              기본 공급처:
              <input 
                type="text" 
                name="defaultSupplier" 
                value={settings.defaultSupplier} 
                onChange={handleChange} 
              />
            </label>
            <label>
              기본 배송비:
              <input 
                type="number" 
                name="defaultShippingFee" 
                value={settings.defaultShippingFee} 
                onChange={handleChange} 
              />
            </label>
            <label>
              목표 마진율 (%):
              <input 
                type="number" 
                name="defaultMarginTarget" 
                value={settings.defaultMarginTarget} 
                onChange={handleChange} 
              />
            </label>
            
            <h3>API 설정</h3>
            <label>
              네이버 API 키:
              <input 
                type="text" 
                name="naverApiKey" 
                value={settings.naverApiKey} 
                onChange={handleChange} 
              />
            </label>
            <label>
              OpenAI API 키:
              <input 
                type="text" 
                name="openaiApiKey" 
                value={settings.openaiApiKey} 
                onChange={handleChange} 
              />
            </label>
            
            <Button type="submit">💾 저장</Button>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default Settings;
