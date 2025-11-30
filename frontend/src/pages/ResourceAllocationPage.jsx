import React, { useState } from 'react';
import InfoNavbar from '../components/InfoNavbar';
import Header from '../components/Header';

const ResourceAllocationPage = () => {
  const [activeTab, setActiveTab] = useState('Baocao');

  const tutors = [
  { id: 'u1', name: 'Đỗ Hồng Phúc', email: 'tutor@hcmut.edu.vn', role: 'TUTOR' },
  { id: 'u2', name: 'Nguyễn Văn An', email: 'an@hcmut.edu.vn', role: 'TUTOR' } // giảng viên mới
];

const [appointments, setAppointments] = useState([
  {
    id: 'a1',
    tutor_id: 'u1',
    name: 'Luyện thi Đại số tuyến tính',
    start_time: '2025-11-26 09:00:00',
    end_time: '2025-11-26 11:00:00',
    place: 'H6-304',
    max_slot: 5,
    status: 'OPEN'
  },
  {
    id: 'a2',
    tutor_id: 'u1',
    name: 'Ôn tập Toán rời rạc',
    start_time: '2025-11-27 13:00:00',
    end_time: '2025-11-27 15:00:00',
    place: 'H6-305',
    max_slot: 5,
    status: 'OPEN'
  },
  {
    id: 'a3',
    tutor_id: 'u2',
    name: 'Hướng dẫn lập trình C++',
    start_time: '2025-11-28 08:00:00',
    end_time: '2025-11-28 10:00:00',
    place: 'H7-101',
    max_slot: 30,
    status: 'OPEN'
  },
  {
    id: 'a4',
    tutor_id: 'u2',
    name: 'Ôn tập cấu trúc dữ liệu',
    start_time: '2025-11-29 14:00:00',
    end_time: '2025-11-29 16:00:00',
    place: 'H7-102',
    max_slot: 25,
    status: 'OPEN'
  }
]);
  // --- Modal state ---
  const [editingApt, setEditingApt] = useState(null);
  const [editTemp, setEditTemp] = useState({
    place: '',
    date: '',
    start: '',
    end: ''
  });

  const openEditModal = (apt) => {
    const startDate = new Date(apt.start_time);
    const endDate = new Date(apt.end_time);
    setEditTemp({
      place: apt.place,
      date: startDate.toISOString().slice(0, 10),
      start: startDate.toTimeString().slice(0, 5),
      end: endDate.toTimeString().slice(0, 5)
    });
    setEditingApt(apt);
  };

  const closeEditModal = () => setEditingApt(null);

  const handleSaveEdit = () => {
    if (!editingApt) return;
    const newStart = new Date(`${editTemp.date}T${editTemp.start}:00`).toISOString();
    const newEnd = new Date(`${editTemp.date}T${editTemp.end}:00`).toISOString();

    setAppointments(prev =>
      prev.map(a =>
        a.id === editingApt.id
          ? { ...a, place: editTemp.place, start_time: newStart, end_time: newEnd }
          : a
      )
    );
    closeEditModal();
  };

  const formatAppointmentTime = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const day = startDate.getDate();
    const month = startDate.getMonth() + 1;
    const year = startDate.getFullYear();
    const startTime = `${startDate.getHours()}:${startDate.getMinutes().toString().padStart(2, '0')}`;
    const endTime = `${endDate.getHours()}:${endDate.getMinutes().toString().padStart(2, '0')}`;
    return `${day}/${month}/${year} (${startTime} - ${endTime})`;
  };

  // Gom appointments theo tutor
  const appointmentsByTutor = tutors.map(tutor => ({
    tutor,
    appointments: appointments.filter(apt => apt.tutor_id === tutor.id)
  }));

  return (
    <div className="flex flex-col gap-4 min-h-screen bg-gray-50">
      <Header />
      <div className="w-2/3 mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Xem báo cáo tổng quan</h1>
        <InfoNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="space-y-4 bg-gray-200 p-4">
          {appointmentsByTutor.map(({ tutor, appointments }) => (
            <div key={tutor.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-4">{tutor.name}</h3>

                <div className="space-y-4">
                  {appointments.map(apt => (
                    <div key={apt.id} className="flex flex-wrap gap-4 items-center justify-between border-t border-gray-100 pt-2">
                      <div className="flex flex-col gap-1 text-sm text-gray-600">
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-base text-gray-900">{apt.name}</span>
                            <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">
                                {apt.status}
                            </span>
                        </div>

                        <div className="flex gap-4 items-center">
                          <div>
                            <span className="font-medium">Thời gian:</span>{" "}
                            {formatAppointmentTime(apt.start_time, apt.end_time)}
                          </div>
                          <div>
                            <span className="font-medium">Địa điểm:</span> {apt.place}
                          </div>
                        </div>
                      </div>

                      <button
                        className="px-2 py-2 rounded-lg font-medium text-white text-sm bg-blue-600 hover:bg-blue-700"
                        onClick={() => openEditModal(apt)}
                      >
                        Phân bổ lại
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {editingApt && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden p-6">
            <h2 className="text-center text-xl font-bold text-gray-800 mb-4">Chỉnh sửa buổi học</h2>
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Ngày</label>
                <input
                  type="date"
                  value={editTemp.date}
                  onChange={e => setEditTemp(prev => ({ ...prev, date: e.target.value }))}
                  className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                />
              </div>
              <div className="flex gap-2">
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-sm font-medium">Giờ bắt đầu</label>
                  <input
                    type="time"
                    value={editTemp.start}
                    onChange={e => setEditTemp(prev => ({ ...prev, start: e.target.value }))}
                    className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <label className="text-sm font-medium">Giờ kết thúc</label>
                  <input
                    type="time"
                    value={editTemp.end}
                    onChange={e => setEditTemp(prev => ({ ...prev, end: e.target.value }))}
                    className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Phòng học</label>
                <input
                  type="text"
                  value={editTemp.place}
                  onChange={e => setEditTemp(prev => ({ ...prev, place: e.target.value }))}
                  className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                />
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-50"
                  onClick={closeEditModal}
                >
                  Hủy
                </button>
                <button
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  onClick={handleSaveEdit}
                >
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourceAllocationPage;
