import React from 'react';
import { ChevronDown, X } from 'lucide-react';

const RescheduleModal = ({ isOpen, onClose, onConfirm }) => {
  // Nếu chưa mở thì không render gì cả
  if (!isOpen) return null;

  return (
    // Lớp phủ đen mờ (Overlay)
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      
      {/* Hộp Modal trắng */}
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-fade-in-up">
        
        {/* Header */}
        <div className="pt-6 pb-2 px-6 relative">
          <h2 className="text-center text-xl font-bold text-gray-800">Đổi lịch</h2>
          {/* Nút đóng (Option) */}
          <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        {/* Body Form */}
        <div className="p-6 space-y-4">
          
          {/* Hàng 1: Ngày & Khung giờ */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-800">Ngày</label>
              <div className="relative">
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-500 appearance-none focus:outline-none focus:border-blue-500">
                  <option>Ngày</option>
                  <option>01/12/2025</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-800">Khung giờ</label>
              <div className="relative">
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-500 appearance-none focus:outline-none focus:border-blue-500">
                  <option>Khung giờ</option>
                  <option>09:00 - 11:00</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Hàng 2: Hình thức & Số lượng */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-800">Hình thức</label>
              <div className="relative">
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 appearance-none focus:outline-none focus:border-blue-500">
                  <option>Online</option>
                  <option>Offline</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-800 text-right pr-1">Số lượng sinh viên tối đa</label>
              <div className="flex justify-end">
                <input 
                    type="number" 
                    defaultValue={0}
                    className="w-24 border border-gray-300 rounded-md px-3 py-2 text-sm text-center focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Hàng 3: Địa điểm */}
          <div className="flex flex-col gap-1">
            <input 
              type="text" 
              placeholder="Địa điểm / Link phòng" 
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500 placeholder-gray-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 pt-4">
            <button 
              onClick={onClose} // Nút Hủy thì phải đóng Modal
              className="px-6 py-1.5 border border-gray-400 rounded hover:bg-gray-50 text-gray-700 font-medium"
            >
              Hủy
            </button>
            <button 
              onClick={onConfirm} // Nút Xác Nhận thì gọi hàm xử lý
              className="px-6 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded font-medium"
            >
              Xác Nhận
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RescheduleModal;