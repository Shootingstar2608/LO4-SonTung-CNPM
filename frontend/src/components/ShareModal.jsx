import React, { useState } from 'react';
import { X, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const ShareModal = ({ isOpen, onClose, onShowAlert }) => {
  if (!isOpen) return null;

  const [searchTerm, setSearchTerm] = useState('');
  const [userList, setUserList] = useState([]); 

  // --- DANH SÁCH NGƯỜI DÙNG GIẢ LẬP (DATABASE) ---
  // Chỉ có 3 người này tồn tại trong hệ thống
  const mockUsers = [
    { id: 1, name: 'Nguyễn Văn An', email: 'an.nguyen@hcmut.edu.vn' },
    { id: 2, name: 'Trần Thị Bình', email: 'binh.tran@hcmut.edu.vn' },
    { id: 3, name: 'Lê Văn Cường', email: 'cuong.le@hcmut.edu.vn' },
  ];

  const handleSearch = () => {
    // 1. Nếu ô trống -> Báo lỗi Failed (Đỏ)
    if (!searchTerm.trim()) {
      onShowAlert('error', 'Failed', 'Trường thông tin không được trống');
      return;
    }

    // 2. Logic tìm kiếm: Lọc trong danh sách mockUsers
    const results = mockUsers.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (results.length > 0) {
      // 3. Nếu TÌM THẤY -> Hiện danh sách
      setUserList(results);
    } else {
      // 4. Nếu KHÔNG TÌM THẤY -> Báo Warning (Tam giác vàng)
      setUserList([]); // Xóa danh sách cũ
      onShowAlert(
        'warning', 
        'Không Tìm Thấy Người Dùng', 
        'Không tìm thấy người dùng với từ khóa đã nhập'
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[55] flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden animate-scale-up min-h-[400px] flex flex-col">
        
        {/* Header Search */}
        <div className="p-6 border-b border-gray-100 flex gap-4 items-center relative">
           <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Nhập tên người nhận (VD: An, Bình...)" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                // Bấm Enter cũng kích hoạt tìm kiếm
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <X size={16} />
                </button>
              )}
           </div>
           
           <button 
             onClick={handleSearch}
             className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 shadow-sm"
           >
             Tìm Kiếm
           </button>

           <button onClick={onClose} className="absolute -top-2 -right-2 p-4 text-gray-400 hover:text-gray-600">
             <X size={20} />
           </button>
        </div>

        {/* Body Result */}
        <div className="flex-1 p-6 bg-gray-50/30">
           {userList.length > 0 ? (
             <div className="space-y-4">
               {userList.map((user) => (
                 <div key={user.id} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center relative">
                          <div className="absolute inset-0 border-2 border-blue-600 rounded-full opacity-20"></div>
                          <span className="text-blue-700 font-bold text-xs">BK</span>
                       </div>
                       <div>
                          <h4 className="font-bold text-gray-800 text-sm">{user.name}</h4>
                          <p className="text-xs text-gray-500">{user.email}</p>
                       </div>
                    </div>
                    <button className="text-blue-500 text-sm font-bold hover:underline cursor-pointer bg-transparent border-none">
                      Chia sẻ
                    </button>
                 </div>
               ))}
               
               {/* Pagination giả */}
               <div className="flex justify-center items-center gap-2 mt-8">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-100 text-gray-500"><ChevronLeft size={16} /></button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white font-bold text-xs">1</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-100 text-gray-500"><ChevronRight size={16} /></button>
               </div>
             </div>
           ) : (
             <div className="h-full flex flex-col items-center justify-center text-gray-400 text-sm gap-2">
               <Search size={40} className="opacity-20" />
               <p>Hãy nhập tên để tìm kiếm người dùng</p>
             </div>
           )}
        </div>

      </div>
    </div>
  );
};

export default ShareModal;