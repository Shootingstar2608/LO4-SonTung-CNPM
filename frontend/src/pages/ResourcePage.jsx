import React, { useState } from 'react';
import Header from '../components/Header';
import { Link, useNavigate } from 'react-router-dom';
import { CloudUpload, Plus, Check } from 'lucide-react'; 
import StatusModal from '../components/StatusModal';

const ResourcePage = () => {
   const navigate = useNavigate();
  // State 1: Danh sách khóa học bên phải
  const [courses, setCourses] = useState([
    { id: 1, name: 'Tên khóa học', group: 'Nhóm lớp', checked: true },
    { id: 2, name: 'Tên khóa học', group: 'Nhóm lớp', checked: false },
    { id: 3, name: 'Tên khóa học', group: 'Nhóm lớp', checked: true },
    { id: 4, name: 'Tên khóa học', group: 'Nhóm lớp', checked: true },
  ]);

  // State 2: Dữ liệu form nhập vào
  const [formData, setFormData] = useState({ topic: '', major: '' });

  // State 3: Quản lý Modal thông báo
  const [statusModal, setStatusModal] = useState({
    isOpen: false,
    type: 'success',
    title: '',
    message: ''
  });

  // Hàm toggle checkbox khóa học
  const toggleCourse = (id) => {
    setCourses(courses.map(c => c.id === id ? { ...c, checked: !c.checked } : c));
  };

  // --- LOGIC 1: BẤM DẤU CỘNG (+) -> HIỆN CẢNH BÁO "INVALID FORMAT" ---
  const handleSelectFile = () => {
    setStatusModal({
        isOpen: true,
        type: 'warning', // Gọi loại Warning (Viền đỏ, Tam giác vàng)
        title: 'Invalid Format',
        message: 'Tệp tin không đúng định dạng'
    });
  };

  // Hàm xử lý nút "Chọn Lại" trong modal cảnh báo
  const handleRetryFile = () => {
    setStatusModal({ ...statusModal, isOpen: false });
    // Code mở lại cửa sổ chọn file sẽ nằm ở đây
  };

  // --- LOGIC 2: BẤM "ĐĂNG TẢI" -> KIỂM TRA DỮ LIỆU ---
  const handleUploadClick = () => {
    // Nếu để trống
    if (!formData.topic.trim() || !formData.major.trim()) {
      setStatusModal({
        isOpen: true,
        type: 'error',
        title: 'Failed',
        message: 'Trường thông tin không được trống'
      });
      return;
    }
    // Nếu thành công
    setStatusModal({
      isOpen: true,
      type: 'success',
      title: 'Success',
      message: 'Tài liệu đã được đăng tải thành công'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-700 pb-10">
      <Header />
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-gray-500">
        <Link to="/" className="hover:text-blue-600">Trang chủ</Link>
        <span className="mx-2">›</span>
        <span className="hover:text-blue-600 cursor-pointer">Tài liệu học tập</span>
        <span className="mx-2">›</span>
        <span className="font-medium text-gray-700">Đăng tải tài liệu</span>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-xl font-bold text-gray-900 mb-6">Trang Tài liệu học tập dành cho Tutor</h1>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6 bg-white rounded-t-lg shadow-sm w-full md:w-fit overflow-hidden">
          <button className="px-8 py-3 bg-orange-50 text-orange-600 font-bold border-b-2 border-orange-500 text-sm">
            Đăng Tải Tài Liệu
          </button>
          <button className="px-8 py-3 text-gray-600 hover:bg-gray-50 font-medium text-sm transition-colors">
            Tìm Kiếm & Chia Sẻ
          </button>
          <button onClick={() => navigate('/resources/history')}
          className="px-8 py-3 text-gray-600 hover:bg-gray-50 font-medium text-sm transition-colors">
            Lịch Sử Truy Cập
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CỘT TRÁI */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Form nhập liệu */}
             <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-4">Nhập Mô Tả Cho Tài Liệu</h3>
                <div className="space-y-4">
                    <div>
                        <label className="text-xs text-gray-500 mb-1 block">Lĩnh vực</label>
                        <input type="text" placeholder="<nội dung>" value={formData.topic} onChange={(e) => setFormData({...formData, topic: e.target.value})} className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"/>
                    </div>
                    <div>
                        <label className="text-xs text-gray-500 mb-1 block">Chuyên ngành</label>
                        <input type="text" placeholder="<nội dung>" value={formData.major} onChange={(e) => setFormData({...formData, major: e.target.value})} className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"/>
                    </div>
                </div>
             </div>

            {/* Khu vực Upload */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 min-h-[300px] flex flex-col">
              <h3 className="font-bold text-gray-800 mb-4">Chọn Tài Liệu Để Đăng Tải</h3>
              <div className="flex-1 border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center gap-3 bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer">
                <CloudUpload size={32} className="text-gray-400" />
                <span className="text-xs text-gray-500">Chọn tài liệu bạn muốn đăng tải từ thiết bị</span>
                
                {/* Nút Dấu Cộng: Bấm vào đây để test Warning */}
                <button 
                    onClick={handleSelectFile} 
                    className="bg-blue-600 text-white p-1 rounded hover:bg-blue-700 shadow-sm mt-2"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="grid grid-cols-2 gap-4">
               <button className="py-3 border border-gray-300 rounded font-bold text-gray-700 hover:bg-gray-50"
                onClick={() => navigate('/resources')}>
                Thoát</button>
               <button onClick={handleUploadClick} className="py-3 bg-blue-600 rounded font-bold text-white hover:bg-blue-700 shadow-sm">Đăng Tải</button>
            </div>
          </div>

          {/* CỘT PHẢI (Sidebar) */}
          <div className="lg:col-span-1">
             <h3 className="font-bold text-gray-900 mb-4 ml-1">Tùy chọn đăng cho 1 khóa học phụ trách</h3>
             <div className="bg-gray-50/50 rounded-xl p-4 space-y-3">
               {courses.map((course) => (
                 <div key={course.id} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 border-2 border-blue-600 rounded-full opacity-20"></div>
                        <span className="text-blue-700 font-bold text-xs">BK</span>
                     </div>
                     <div>
                       <p className="text-sm font-bold text-gray-800">{course.name}</p>
                       <p className="text-xs text-gray-500">{course.group}</p>
                     </div>
                   </div>
                   <div 
                     onClick={() => toggleCourse(course.id)}
                     className={`w-4 h-4 rounded border cursor-pointer flex items-center justify-center transition-colors ${
                       course.checked ? 'bg-gray-600 border-gray-600' : 'border-gray-400 bg-white'
                     }`}
                   >
                     {course.checked && <Check size={10} className="text-white" />}
                   </div>
                 </div>
               ))}
               <button className="w-full mt-6 bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 shadow-sm">
                 Lưu
               </button>
             </div>
          </div>

        </div>
      </main>

      {/* Render Modal Thông Báo */}
      <StatusModal 
        isOpen={statusModal.isOpen}
        onClose={() => setStatusModal({ ...statusModal, isOpen: false })}
        onConfirm={handleRetryFile} // Gắn hàm "Chọn Lại" vào đây
        type={statusModal.type}
        title={statusModal.title}
        message={statusModal.message}
      />
    </div>
  );
};

export default ResourcePage;