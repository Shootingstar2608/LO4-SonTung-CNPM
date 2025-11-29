import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate, Link } from 'react-router-dom';
import RescheduleModal from '../components/RescheduleModal';
import MinutesModal from '../components/MinutesModal';
import StatusModal from '../components/StatusModal';

const SessionInfoPage = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isMinutesOpen, setIsMinutesOpen] = useState(false);
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);

  const [statusModal, setStatusModal] = useState({
    isOpen: false,
    type: 'confirm', // 'confirm' | 'success' | 'error'
    title: '',
    message: ''
  });

  const handleRescheduleSubmit = () => {
    setIsRescheduleOpen(false); // Đóng form đổi lịch

    // --- TEST CÁC TRƯỜNG HỢP ---
    const isSuccess = false;       // Trường hợp 1: Thành công
    const isEndedMeeting = false;  // Trường hợp 2: Lỗi đã kết thúc
    const isSystemError = true;   // Trường hợp 3: Lỗi hệ thống

    if (isEndedMeeting) {
      setStatusModal({
        isOpen: true,
        type: 'error',
        title: 'Failed',
        message: 'Không thể thay đổi một buổi gặp đã kết thúc'
      });
    } else if (isSystemError) {
      setStatusModal({
        isOpen: true,
        type: 'error',
        title: 'Failed',
        message: 'Đã có lỗi xảy ra. Vui lòng thử lại'
      });
    } else if (isSuccess) {
      setStatusModal({
        isOpen: true,
        type: 'success',
        title: 'Success',
        message: 'Buổi tư vấn đã được thay đổi'
      });
    }
  };

  const handleCancelClick = () => {
    setStatusModal({
      isOpen: true,
      type: 'confirm',
      title: 'Bạn có chắc chắn muốn hủy buổi gặp này không?',
      message: 'Hành động này sẽ không thể hoàn tác.'
    });
  };

  const handleConfirmCancel = () => {
    // Giả lập logic gọi API hủy lịch ở đây...
    const isSuccess = true; // Thử sửa thành false để test trường hợp lỗi

    if (isSuccess) {
      setStatusModal({
        isOpen: true,
        type: 'success',
        title: 'Success',
        message: 'Buổi tư vấn này đã được hủy'
      });
    } else {
      setStatusModal({
        isOpen: true,
        type: 'error',
        title: 'Failed',
        message: 'Không thể hủy một buổi gặp đã kết thúc' // Hoặc thông báo lỗi khác
      });
    }
  };

  const handleCreateMinutes = () => {
    // Giả lập ngày hiện tại và ngày họp
    const today = new Date();
    const meetingDate = new Date('2025-12-01'); // Giả sử lịch họp là ngày 1/12/2025 (Tương lai)

    // TRƯỜNG HỢP 1: Lỗi do buổi gặp trong tương lai (Giống hình trên)
    // Bạn thử đổi logic if(true) để test 
    const isFutureMeeting = false; 

    if (isFutureMeeting) {
      setStatusModal({
        isOpen: true,
        type: 'error', // Màu đỏ
        title: 'Failed',
        message: 'Không thể tổng hợp biên bản cho một buổi gặp trong tương lai.'
      });
      return; // Dừng lại, không mở form biên bản
    }

    // TRƯỜNG HỢP 2: Lỗi hệ thống chung chung (Giống hình dưới)
    const isSystemError = false; // Đổi thành true để test

    if (isSystemError) {
      setStatusModal({
        isOpen: true,
        type: 'error',
        title: 'Failed',
        message: 'Đã có lỗi xảy ra. Vui lòng thử lại'
      });
      return;
    }

    // Nếu không có lỗi gì -> Mở Modal biên bản lên
    setIsMinutesOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-700 pb-10">
      <Header />
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-gray-500">
        <Link to="/" className="hover:text-blue-600">Trang chủ</Link>
        <span className="mx-2">›</span>
        <Link to="/" className="hover:text-blue-600">Quản lý buổi gặp</Link>
        <span className="mx-2">›</span>
        <span className="font-medium text-gray-700">Thông tin buổi tư vấn</span>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-xl font-bold text-gray-900 mb-6">Thông tin buổi tư vấn</h1>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          
          <div className="space-y-6">
            {/* Chủ đề */}
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Chủ đề</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            {/* Nội dung */}
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Nội dung</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Lorem ipsum dolor sit amet consectetur. Amet massa elit aliquam adipiscing imperdiet morbi porta. 
                Amet duis quam adipiscing fames vivamus rhoncus lacus aliquam. Volutpat lorem est ultrices mauris dolor 
                a scelerisque imperdiet egestas. Turpis semper etiam lacus id tincidunt. Semper tincidunt a erat nunc 
                pellentesque eu. Adipiscing faucibus egestas hendrerit eu dolor tristique.
              </p>
            </div>

            {/* Grid thông tin chi tiết */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-2">
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">Ngày</h3>
                <p className="text-sm text-gray-600">31/10/2025</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">Khung giờ</h3>
                <p className="text-sm text-gray-600">7:00 - 9:00</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">Hình thức</h3>
                <p className="text-sm text-gray-600">Online</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">Số lượng sinh viên</h3>
                <p className="text-sm text-gray-600">36/40</p>
              </div>
            </div>

            {/* Link phòng */}
            <div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">Link phòng</h3>
              <a href="#" className="text-sm text-blue-500 hover:underline">www.meet.google.com</a>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 border-t pt-8">
            <button 
              onClick={handleCancelClick}
              className="px-6 py-2 border border-gray-400 rounded hover:bg-gray-50 text-gray-700 font-medium min-w-[120px]"
            >
              Hủy Lịch
            </button>
            
            <button 
                onClick={() => setIsRescheduleOpen(true)}
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-medium min-w-[120px]"
            >
              Đổi Lịch
            </button>
            <button 
                onClick={handleCreateMinutes} 
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-medium min-w-[120px]"
            >
              Tổng hợp biên bản
            </button>
          </div>

        </div>
      </main>

      {/* 1. Modal Đổi lịch */}
      <RescheduleModal 
        isOpen={isRescheduleOpen} 
        onClose={() => setIsRescheduleOpen(false)} 
        onConfirm={handleRescheduleSubmit} 
      />

      {/* 2. Modal Biên bản */}
      <MinutesModal 
        isOpen={isMinutesOpen} 
        onClose={() => setIsMinutesOpen(false)} 
      />

      {/* 3. Modal Thông báo (Status) */}
      <StatusModal 
        isOpen={statusModal.isOpen}
        onClose={() => setStatusModal({ ...statusModal, isOpen: false })}
        onConfirm={handleConfirmCancel} 
        type={statusModal.type}
        title={statusModal.title}
        message={statusModal.message}
      />
    </div>
  );
};

export default SessionInfoPage;