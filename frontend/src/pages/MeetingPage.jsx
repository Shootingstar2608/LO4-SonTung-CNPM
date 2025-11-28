import React from 'react';
import { useNavigate } from 'react-router-dom'; // <--- 1. Import cái này
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import MeetingList from '../components/MeetingList';
import ActionCard from '../components/ActionCard';

const MeetingPage = () => {
  const navigate = useNavigate(); // <--- 2. Khai báo hook
  
  const mockMeetings = [1, 2, 3, 4]; 
  const imgChart = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000";
  const imgSetup = "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1000";

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-700 pb-10">
      <Header />
      <Breadcrumb />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        <MeetingList meetings={mockMeetings} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ActionCard 
            title="Mở buổi tư vấn"
            imageSrc={imgChart}
            // 3. Sửa sự kiện onClick ở đây:
            onActionClick={() => navigate('/create-session')} 
            onViewMoreClick={() => navigate('/create-session')}
          />
          <ActionCard 
            title="Thiết lập lịch rảnh"
            imageSrc={imgSetup}
            onActionClick={() => navigate('/free-schedule')} 
            onViewMoreClick={() => navigate('/free-schedule')}
          />
        </div>
      </main>
    </div>
  );
};

export default MeetingPage;