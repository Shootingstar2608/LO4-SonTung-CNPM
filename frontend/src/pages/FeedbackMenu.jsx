import React from 'react';
import Header from '../components/Header';
import { Link, useNavigate } from 'react-router-dom';

const FeedbackMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-700 pb-10">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-gray-500">
        <Link to="/" className="hover:text-blue-600">Trang chủ</Link>
        <span className="mx-2">›</span>
        <span className="font-medium text-gray-700">Phản hồi chất lượng buổi học</span>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Grid 3 cột */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          
          {/* --- CARD 1: */}
          <div onClick={() => navigate('/feedback/feedback')}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
            {/* Ảnh minh họa (Màu tím) */}
            <div className="h-48 bg-[#6B5B95] flex items-center justify-center relative">
               {/* Bạn thay src bằng ảnh thật của bạn */}
               <img 
                 src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                 alt="Sinh viên" 
                 className="h-32 object-contain opacity-90"
               />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-center font-bold text-gray-800 text-lg mb-4">Phản hồi chất lượng buổi học</h3>
              <div className="border-t pt-4 flex justify-between items-center text-sm mt-auto">
                <span className="text-green-600 font-medium cursor-pointer hover:underline">Bấm để xem</span>
                <span className="text-gray-800 font-bold cursor-pointer hover:underline">View more</span>
              </div>
            </div>
          </div>

          {/* --- CARD 2:  --- */}
          <div 
            onClick={() => navigate('/feedback/data')} // <--- Bấm vào đây để sang trang Upload
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full cursor-pointer group"
          >
            {/* Ảnh minh họa (Màu tím đậm hơn) */}
            <div className="h-48 bg-[#584B7A] flex items-center justify-center relative">
               <img 
                 src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" 
                 alt="Tutor" 
                 className="h-32 object-contain opacity-90 group-hover:scale-105 transition-transform"
               />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-center font-bold text-gray-800 text-lg mb-4">Khai thác dữ liệu đánh giá</h3>
              <div className="border-t pt-4 flex justify-between items-center text-sm mt-auto">
                <span className="text-green-600 font-medium cursor-pointer hover:underline">Bấm để xem</span>
                <span className="text-gray-800 font-bold cursor-pointer hover:underline">View more</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default FeedbackMenu;