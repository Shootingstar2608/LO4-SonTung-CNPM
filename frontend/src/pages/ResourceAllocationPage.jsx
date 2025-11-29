import React, { useState } from 'react';
import InfoNavbar from '../components/InfoNavbar';
import Header from '../components/Header';

const ResourceAllocationPage = () => {
  const [activeTab, setActiveTab] = useState('NguonLuc');

  
  // Dữ liệu mẫu cho các dòng phân bổ
  const resources = [
    {
      id: 1,
      lecturer: 'Tên Giảng Viên',
      subject: 'Phòng Học Nhóm',
      time: 'Thứ 2, 7h-9h',
      location: 'P.301',
      status: 'Đang sử dụng',
      classes: ['Lớp học đã đăng kí', 'Lớp học đã đăng kí', 'Lớp học đã đăng kí'],
      hasNote: true,
      note: 'Chưa duyệt',
    },
    {
      id: 2,
      lecturer: 'Tên Giảng Viên',
      subject: 'Phòng Học Nhóm',
      time: 'Thứ 4, 13h-15h',
      location: 'P.205',
      status: 'Đã duyệt',
      classes: ['Lớp học đã đăng kí'],
      hasNote: false,
    },
    {
      id: 3,
      lecturer: 'Tên Giảng Viên',
      subject: 'Phòng Học Nhóm',
      time: 'Thứ 6, 15h-17h',
      location: 'P.408',
      status: 'Chưa phân bổ',
      classes: [],
      hasNote: false,
    },
  ];

  return (
    <div className="flex flex-col gap-4 min-h-screen bg-gray-50 px-4 ">
        <Header/>
        <div className="max-w-7xl mx-auto">
            {/* Tiêu đề */}
            <h1 className="text-2xl font-bold text-gray-800 mb-8">Phân bổ nguồn lực</h1>

            {/* Tabs */}
            <InfoNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Danh sách phân bổ nguồn lực */}
            <div className="space-y-4">
            {resources.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    {/* Thông tin giảng viên & phòng */}
                    <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900">{item.lecturer}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3 text-sm text-gray-600">
                        <div>
                            <span className="font-medium">Phòng học</span> {item.subject}
                        </div>
                        <div>
                            <span className="font-medium">Thời gian:</span> {item.time}
                        </div>
                        <div>
                            <span className="font-medium">Địa điểm:</span> {item.location}
                        </div>
                        </div>
                        <div className="mt-3 text-sm">
                        <span className="font-medium text-gray-700">Trạng thái:</span>{' '}
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            item.status === 'Đang sử dụng' ? 'bg-blue-100 text-blue-700' :
                            item.status === 'Đã duyệt' ? 'bg-green-100 text-green-700' :
                            'bg-gray-100 text-gray-700'
                        }`}>
                            {item.status}
                        </span>
                        {item.hasNote && (
                            <span className="ml-3 inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                            Chưa duyệt
                            </span>
                        )}
                        </div>
                    </div>

                    {/* Danh sách lớp & hành động */}
                    <div className="flex flex-col items-end gap-4">
                        <div className="text-right">
                            {item.classes.map((cls, idx) => (
                                <div key={idx} className="text-sm text-gray-600 flex items-center gap-2 mb-1">
                                <span className="text-blue-600">•</span> {cls}
                                <select className="ml-2 text-xs border border-gray-300 rounded px-2 py-0.5">
                                    <option>Xem</option>
                                    <option>Hủy bỏ</option>
                                </select>
                                </div>
                            ))}

                            {item.classes.length === 0 && (
                                <p className="text-sm text-gray-500 italic">Chưa có lớp nào đăng ký</p>
                            )}
                        </div>


                        {/* Nút Lưu */}
                        <button className={`px-4 py-2 rounded-lg font-medium text-white transition-all shadow-md ${
                        item.status === 'Chưa phân bổ' ? 'bg-green-600 hover:bg-green-700' :
                        item.status === 'Đã duyệt' ? 'bg-gray-400 cursor-not-allowed' :
                        'bg-green-600 hover:bg-green-700'
                        }`}
                        disabled={item.status === 'Đã duyệt'}>
                        Lưu
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>

            {/* Phân trang */}
            <div className="mt-8 flex justify-center items-center gap-2">
            <button className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                {'<'}
            </button>
            <button className="w-9 h-9 rounded-lg bg-orange-600 text-white flex items-center justify-center font-medium">1</button>
            <button className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100">2</button>
            <button className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100">3</button>
            <button className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                {'>'}
            </button>
            </div>
        </div>
    </div>
  );
};

export default ResourceAllocationPage;