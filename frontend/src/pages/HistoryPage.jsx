import React, { useState } from 'react';
import Header from '../components/Header';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StatusModal from '../components/StatusModal';

const HistoryPage = () => {
  const navigate = useNavigate();

  // 1. Dữ liệu giả lập (10 dòng giống hình)
  const historyData = Array(8).fill({
    name: 'Tên Tài Liệu',
    sender: 'Người Gửi',
    receiver: 'Người Nhận',
    time: 'Thời Gian',
    status: 'Trạng Thái',
  });

  // 2. State quản lý Modal
  const [statusModal, setStatusModal] = useState({
    isOpen: false,
    type: 'success',
    title: '',
    message: ''
  });

  // --- LOGIC XỬ LÝ XÓA LỊCH SỬ ---
  
  // B1: Bấm nút Xóa -> Hiện Confirm
  const handleDeleteClick = () => {
    setStatusModal({
      isOpen: true,
      type: 'confirm',
      title: 'Xác nhận xóa',
      message: 'Bạn có chắc chắn muốn xóa toàn bộ lịch sử truy cập không?'
    });
  };

  // B2: Bấm OK -> Hiện Success
  const handleConfirmDelete = () => {
    setStatusModal({
      isOpen: true,
      type: 'success',
      title: 'Success',
      message: 'Lịch sử truy cập đã được xóa thành công'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-700 pb-10">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-gray-500">
        <Link to="/" className="hover:text-blue-600">Trang chủ</Link>
        <span className="mx-2">›</span>
        <Link to="/resources" className="hover:text-blue-600">Tài liệu học tập</Link>
        <span className="mx-2">›</span>
        <span className="font-medium text-gray-700">Lịch sử truy cập</span>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-xl font-bold text-gray-900 mb-6">Trang Tài liệu học tập dành cho Tutor</h1>

        {/* --- TABS --- */}
        <div className="flex border-b border-gray-200 mb-6 bg-white rounded-t-lg shadow-sm w-full md:w-fit overflow-hidden">
          {/* Tab 1: Link về trang Upload */}
          <button 
            onClick={() => navigate('/resources/upload')}
            className="px-8 py-3 text-gray-600 hover:bg-gray-50 font-medium text-sm transition-colors"
          >
            Đăng Tải Tài Liệu
          </button>
          
          {/* Tab 2: Giả lập */}
          <button className="px-8 py-3 text-gray-600 hover:bg-gray-50 font-medium text-sm transition-colors">
            Tìm Kiếm & Chia Sẻ
          </button>
          
          {/* Tab 3: Active (Màu cam) */}
          <button className="px-8 py-3 bg-orange-50 text-orange-600 font-bold border-b-2 border-orange-500 text-sm">
            Lịch Sử Truy Cập
          </button>
        </div>

        {/* --- DANH SÁCH LỊCH SỬ --- */}
        <div className="bg-white/50 rounded-xl p-4 min-h-[500px] flex flex-col justify-between">
            
            <div className="space-y-3">
                {/* Header Row */}
                <div className="grid grid-cols-6 gap-4 px-6 py-2 text-sm font-bold text-gray-800">
                    <div className="col-span-1">Tên Tài Liệu</div>
                    <div className="col-span-1 text-center">Người Gửi</div>
                    <div className="col-span-1 text-center">Người Nhận</div>
                    <div className="col-span-1 text-center">Thời Gian</div>
                    <div className="col-span-1 text-center">Trạng Thái</div>
                    <div className="col-span-1"></div>
                </div>

                {/* Data Rows */}
                {historyData.map((item, index) => (
                    <div key={index} className="bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100 grid grid-cols-6 gap-4 items-center text-sm hover:shadow-md transition-shadow">
                        <div className="col-span-1 font-medium text-gray-900">{item.name}</div>
                        <div className="col-span-1 text-center text-gray-600">{item.sender}</div>
                        <div className="col-span-1 text-center text-gray-600">{item.receiver}</div>
                        <div className="col-span-1 text-center text-gray-600">{item.time}</div>
                        <div className="col-span-1 text-center text-gray-600">{item.status}</div>
                        <div className="col-span-1 text-right">
                            <a href="#" className="text-blue-500 hover:underline font-medium">Xem</a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-8">
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 text-gray-500">
                    <ChevronLeft size={16} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white font-bold text-xs">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 text-gray-600 text-xs font-medium">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 text-gray-600 text-xs font-medium">3</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 text-gray-500">
                    <ChevronRight size={16} />
                </button>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-between items-center mt-6 border-t pt-6 px-4">
                <div className="w-1/3"></div> {/* Spacer trái */}
                
                <button className="w-1/3 py-2 border border-gray-300 bg-white rounded font-bold text-gray-700 hover:bg-gray-50"
                onClick={() => navigate('/resources')}>
                    Thoát
                </button>
                
                <div className="w-1/3 flex justify-end">
                    <button 
                        onClick={handleDeleteClick}
                        className="px-8 py-2 bg-blue-600 rounded font-bold text-white hover:bg-blue-700 shadow-sm"
                    >
                        Xóa Lịch Sử
                    </button>
                </div>
            </div>

        </div>
      </main>

      {/* MODAL THÔNG BÁO */}
      <StatusModal 
        isOpen={statusModal.isOpen}
        onClose={() => setStatusModal({ ...statusModal, isOpen: false })}
        onConfirm={handleConfirmDelete} // Hàm xử lý khi bấm OK ở Confirm
        type={statusModal.type}
        title={statusModal.title}
        message={statusModal.message}
      />
    </div>
  );
};

export default HistoryPage;