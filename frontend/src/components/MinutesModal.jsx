import React from 'react';
import { X, Pencil, CloudUpload, Plus } from 'lucide-react';

const MinutesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Dữ liệu giả lập cho bảng sinh viên
  const students = [
    { name: "Nguyễn Văn A", id: "231xxxx", email: "abc@hcmut.edu.vn", result: 3.6 },
    { name: "Nguyễn Văn A", id: "231xxxx", email: "abc@hcmut.edu.vn", result: 3.6 },
    { name: "Nguyễn Văn A", id: "231xxxx", email: "abc@hcmut.edu.vn", result: 3.6 },
  ];

  return (
    // Overlay
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      
      {/* Modal Container */}
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col">
        
        {/* Header */}
        <div className="pt-6 pb-2 px-8 relative text-center">
          <h2 className="text-xl font-bold text-gray-900">Biên bản buổi tư vấn</h2>
          {/* Nút đóng */}
          <button onClick={onClose} className="absolute right-6 top-6 text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-8 space-y-6">
          
          {/* 1. Chủ đề */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-gray-900 text-sm">Chủ đề</h3>
              <Pencil size={14} className="text-gray-400 cursor-pointer hover:text-blue-500" />
            </div>
            <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          {/* 2. Nội dung */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-gray-900 text-sm">Nội dung</h3>
              <Pencil size={14} className="text-gray-400 cursor-pointer hover:text-blue-500" />
            </div>
            <p className="text-sm text-gray-700 leading-relaxed text-justify">
              Lorem ipsum dolor sit amet consectetur. Amet massa elit aliquam adipiscing imperdiet morbi porta. 
              Amet duis quam adipiscing fames vivamus rhoncus lacus aliquam. Volutpat lorem est ultrices mauris 
              dolor a scelerisque imperdiet egestas. Turpis semper etiam lacus id tincidunt.
            </p>
          </div>

          {/* 3. Grid thông tin (4 cột) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-900 text-sm">Ngày</span>
                <Pencil size={14} className="text-gray-400 cursor-pointer" />
              </div>
              <p className="text-sm text-gray-600">31/10/2025</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-900 text-sm">Khung giờ</span>
                <Pencil size={14} className="text-gray-400 cursor-pointer" />
              </div>
              <p className="text-sm text-gray-600">7:00 - 9:00</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-900 text-sm">Hình thức</span>
                <Pencil size={14} className="text-gray-400 cursor-pointer" />
              </div>
              <p className="text-sm text-gray-600">Online</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-900 text-sm">Số lượng sinh viên</span>
              </div>
              <p className="text-sm text-gray-600">36/40</p>
            </div>
          </div>

          {/* 4. Link phòng */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-gray-900 text-sm">Link phòng</h3>
            </div>
            <div className="flex justify-between items-center">
               <a href="#" className="text-sm text-blue-500 hover:underline">www.meet.google.com</a>
               <Pencil size={14} className="text-gray-400 cursor-pointer" />
            </div>
          </div>

          {/* 5. Bảng danh sách sinh viên */}
          <div>
            <h3 className="font-bold text-gray-900 text-sm mb-2">Danh sách sinh viên tham gia</h3>
            <div className="border rounded-md overflow-hidden">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-700 font-bold">
                  <tr>
                    <th className="px-4 py-2">Họ và tên</th>
                    <th className="px-4 py-2">MSSV</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2 text-center">Kết quả</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {students.map((student, index) => (
                    <tr key={index} className="bg-gray-50/50">
                      <td className="px-4 py-2">{student.name}</td>
                      <td className="px-4 py-2">{student.id}</td>
                      <td className="px-4 py-2">{student.email}</td>
                      <td className="px-4 py-2 text-center">{student.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 6. Upload Section */}
          <div>
            <h3 className="font-bold text-gray-900 text-sm mb-2">Chọn Tài Liệu Để Đăng Tải</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center bg-gray-50 gap-3 cursor-pointer hover:bg-gray-100 transition-colors">
              <CloudUpload size={24} className="text-gray-400" />
              <span className="text-xs text-gray-500">Chọn tài liệu bạn muốn đăng tải từ thiết bị</span>
              <button className="bg-blue-600 text-white p-1 rounded hover:bg-blue-700">
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-center gap-4 pt-4 border-t border-gray-100">
            <button 
              onClick={onClose}
              className="px-6 py-1.5 border border-gray-400 rounded hover:bg-gray-50 text-gray-700 font-medium"
            >
              Hủy
            </button>
            <button 
              className="px-6 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded font-medium shadow-sm"
            >
              Xác nhận
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MinutesModal;