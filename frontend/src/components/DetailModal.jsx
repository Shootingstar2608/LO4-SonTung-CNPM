import React from 'react';
import { X } from 'lucide-react'; // <--- Kiểm tra kỹ dòng này, thiếu là lỗi trắng màn hình

const DetailModal = ({ isOpen, onClose, data, onShare }) => {
  // Nếu chưa mở hoặc chưa có dữ liệu thì không hiển thị gì cả
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-scale-up">
        
        {/* HEADER */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Thông Tin Chi Tiết Tài Liệu</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors rounded-full p-1 hover:bg-gray-100">
            <X size={24} />
          </button>
        </div>

        {/* BODY */}
        <div className="p-8 space-y-8">
           
           {/* Phần thông tin chính */}
           <div className="flex gap-6 items-start">
              {/* Ảnh bìa (Placeholder) */}
              <div className="w-32 h-32 bg-gray-100 rounded-xl flex-shrink-0 flex items-center justify-center text-gray-400 font-bold text-xs border border-gray-200">
                  IMG
              </div>
              
              <div className="flex-1 space-y-4">
                  <div>
                      <p className="text-sm text-gray-500">Tên Người sở hữu</p>
                      <h3 className="text-2xl font-bold text-gray-900">{data.owner || 'Chưa cập nhật'}</h3>
                  </div>
                  <div>
                      <p className="text-sm text-gray-500">Tên Tài Liệu</p>
                      <h3 className="text-xl font-bold text-gray-800">{data.title || 'Chưa cập nhật'}</h3>
                  </div>
              </div>
           </div>

           {/* Bảng thông tin chi tiết */}
           <div className="grid grid-cols-2 gap-x-8 gap-y-6">
               <div>
                   <label className="text-sm font-medium text-gray-600 mb-2 block">Lĩnh vực</label>
                   <div className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 font-medium text-sm">
                       {data.field || '<nội dung>'}
                   </div>
               </div>
               <div>
                   <label className="text-sm font-medium text-gray-600 mb-2 block">Thời gian</label>
                   <div className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 font-medium text-sm">
                       {data.date || '<nội dung>'}
                   </div>
               </div>
               <div>
                   <label className="text-sm font-medium text-gray-600 mb-2 block">Chuyên ngành</label>
                   <div className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 font-medium text-sm">
                       {data.major || '<nội dung>'}
                   </div>
               </div>
               <div>
                   <label className="text-sm font-medium text-gray-600 mb-2 block">Định dạng</label>
                   <div className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 font-medium text-sm uppercase">
                       {data.format || 'FILE'}
                   </div>
               </div>
           </div>

        </div>

        {/* FOOTER BUTTONS */}
        <div className="flex justify-end gap-4 p-6 border-t border-gray-100 bg-gray-50">
           <button 
               onClick={onClose}
               className="px-6 py-2.5 border border-gray-300 rounded-lg font-bold text-gray-700 hover:bg-gray-100 transition-colors"
           >
             Thoát
           </button>
           
           {/* Nút Chia sẻ */}
           <button 
               onClick={onShare} 
               className="px-8 py-2.5 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-sm"
           >
             Chia Sẻ
           </button>
        </div>

      </div>
    </div>
  );
};

export default DetailModal;