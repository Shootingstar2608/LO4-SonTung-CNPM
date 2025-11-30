import React, { useState } from 'react';
import Header from '../components/Header';
import InfoNavbar from '../components/InfoNavbar';

// Dữ liệu mẫu (thay thế bằng import db thực tế nếu cần)
const tutors = [
  { id: 'u1', name: 'Đỗ Hồng Phúc', email: 'tutor@hcmut.edu.vn', role: 'TUTOR' }
];

const appointments = [
  {
    id: 'a1',
    tutor_id: 'u1',
    name: 'Luyện thi Đại số tuyến tính',
    start_time: '2025-11-26 09:00:00',
    end_time: '2025-11-26 11:00:00',
    place: 'H6-304',
    max_slot: 80,
    status: 'OPEN'
  },
  {
    id: 'a2',
    tutor_id: 'u1',
    name: 'Ôn tập Toán rời rạc',
    start_time: '2025-11-27 13:00:00',
    end_time: '2025-11-27 15:00:00',
    place: 'H6-305',
    max_slot: 50,
    status: 'OPEN'
  }
];

const InfoPage = () => {
  const [activeTab, setActiveTab] = useState('BaoCao');

  const formatTime = (start, end) => {
    const s = new Date(start);
    const e = new Date(end);
    return `${s.getDate()}/${s.getMonth()+1}/${s.getFullYear()} (${s.getHours()}:${s.getMinutes().toString().padStart(2,'0')} - ${e.getHours()}:${e.getMinutes().toString().padStart(2,'0')})`;
  };

  return (
    <div className="min-h-screen flex flex-col gap-4 bg-gray-50 px-4">
      <Header/>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Báo cáo lớp học</h1>
        <InfoNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Bộ lọc tìm kiếm */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tên Môn Học</label>
              <input type="text" placeholder="Nhập tên môn học" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mã Môn</label>
              <input type="text" placeholder="Nhập mã môn" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Trạng Thái</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none">
                <option>Tất cả</option>
                <option>Đang học</option>
                <option>Đã kết thúc</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Địa điểm</label>
              <input type="text" placeholder="CS1, CS2..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"/>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-orange-600 text-white font-medium py-2.5 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2">
                Xem
              </button>
            </div>
          </div>
        </div>

        {/* Danh sách lớp học */}
        <div className="space-y-4">
          {appointments.map(apt => {
            const tutor = tutors.find(t => t.id === apt.tutor_id);
            return (
              <div key={apt.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-200 border-2 border-dashed rounded-lg" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{apt.name}</h3>
                      <p className="text-sm text-gray-600">Giảng viên: {tutor ? tutor.name : 'Unknown'}</p>
                      <p className="text-sm text-gray-600">Thời gian: {formatTime(apt.start_time, apt.end_time)}</p>
                      <p className="text-sm text-gray-600">Địa điểm: {apt.place}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full">
                      {apt.status}
                    </span>
                    <p className="text-sm text-gray-600 mt-2">Số lượng sinh viên: <span className="font-medium">{apt.max_slot}</span></p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Phân trang */}
        <div className="mt-6 px-6 py-4 bg-gray-50 flex items-center justify-center gap-2">
          <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-200">{'<'}</button>
          <button className="w-8 h-8 rounded bg-orange-600 text-white flex items-center justify-center">1</button>
          <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-200">2</button>
          <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-200">3</button>
          <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-200">{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
