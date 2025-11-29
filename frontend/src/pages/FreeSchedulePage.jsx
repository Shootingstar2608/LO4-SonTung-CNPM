import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StatusModal from '../components/StatusModal';

const FreeSchedulePage = () => {
  const navigate = useNavigate();

  const [modalStatus, setModalStatus] = useState({ 
    isOpen: false, 
    type: 'success', // 'success' hoặc 'error'
    title: '',
    message: '' 
  });

  const handleSave = () => {
    // Giả lập lưu thành công
    setModalStatus({
      isOpen: true,
      type: 'success',
      title: 'Success',
      message: 'Lịch rảnh đã được thiết lập thành công'
    });

  // Nếu muốn test lỗi thì uncomment dòng dưới:
    /*
    setModalStatus({
      isOpen: true,
      type: 'error',
      title: 'Failed',
      message: 'Đã có lỗi xảy ra. Vui lòng thử lại'
    });
    */
  };
  
  // Tạo mảng 15 tiết
  const periods = Array.from({ length: 15 }, (_, i) => i + 1);
  // Các ngày trong tuần
  const days = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ Nhật"];

  // State lưu các ô đã chọn (định dạng "dayIndex-period")
  // Ví dụ mẫu: Thứ 2 tiết 1, 2, 3, 4 đang được chọn
  const [selectedCells, setSelectedCells] = useState(["0-1", "0-2", "0-3", "0-4"]);

  // Hàm xử lý khi click vào ô
  const toggleCell = (dayIndex, period) => {
    const cellId = `${dayIndex}-${period}`;
    if (selectedCells.includes(cellId)) {
      setSelectedCells(selectedCells.filter(id => id !== cellId));
    } else {
      setSelectedCells([...selectedCells, cellId]);
    }
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
        <span className="font-medium text-gray-700">Thiết lập lịch rảnh</span>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-xl font-bold text-gray-900 mb-6">Thiết lập lịch rảnh</h1>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* --- PHẦN BẢNG LỊCH (Bên trái) --- */}
            <div className="flex-1">
              {/* Điều hướng tuần */}
              <div className="flex justify-between items-center mb-4 px-4">
                <button className="flex items-center text-gray-500 hover:text-blue-600 text-sm">
                  <ChevronLeft size={16} /> Tuần 5
                </button>
                <span className="font-bold text-lg text-gray-800">Tuần 6</span>
                <button className="flex items-center text-gray-500 hover:text-blue-600 text-sm">
                  Tuần 7 <ChevronRight size={16} />
                </button>
              </div>

              {/* Bảng Grid */}
              <div className="border border-gray-300 rounded overflow-hidden overflow-x-auto">
                <div className="min-w-[600px]">
                  {/* Header Bảng */}
                  <div className="grid grid-cols-8 bg-gray-50 border-b border-gray-300">
                    <div className="p-3 text-center font-bold text-sm text-gray-700 border-r border-gray-300">Tiết</div>
                    {days.map((day, index) => (
                      <div key={index} className="p-3 text-center font-bold text-sm text-gray-700 border-r border-gray-300 last:border-r-0">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Body Bảng */}
                  {periods.map((period) => (
                    <div key={period} className="grid grid-cols-8 border-b border-gray-200 last:border-b-0 h-10">
                      {/* Cột số tiết */}
                      <div className="flex items-center justify-center font-medium text-sm text-gray-600 border-r border-gray-300 bg-gray-50">
                        {period}
                      </div>
                      
                      {/* Các cột ngày */}
                      {days.map((day, dayIndex) => {
                        const cellId = `${dayIndex}-${period}`;
                        const isSelected = selectedCells.includes(cellId);
                        return (
                          <div 
                            key={dayIndex}
                            onClick={() => toggleCell(dayIndex, period)}
                            className={`border-r border-gray-200 last:border-r-0 cursor-pointer transition-colors hover:bg-gray-100 ${
                              isSelected ? 'bg-green-200 hover:bg-green-300' : '' // Màu xanh giống hình
                            }`}
                          ></div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- PHẦN GHI CHÚ (Bên phải) --- */}
            <div className="w-full lg:w-64 flex flex-col gap-4">
              <div className="border border-gray-300 rounded p-2 h-full min-h-[300px] bg-white">
                <textarea 
                  className="w-full h-full resize-none outline-none text-sm placeholder-gray-400"
                  placeholder="Ghi chú"
                ></textarea>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="repeat" className="w-4 h-4 text-blue-600 rounded border-gray-300" />
                <label htmlFor="repeat" className="text-sm font-bold text-gray-700">Lặp lại cho tuần sau</label>
              </div>
            </div>

          </div>

          {/* Footer Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={() => navigate('/')} className="px-6 py-1.5 border border-gray-400 rounded hover:bg-gray-50 text-gray-700 font-medium">
              Hủy
            </button>
            <button 
              onClick={handleSave} // <--- 3. Gắn sự kiện vào đây
              className="px-6 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded font-medium shadow-sm"
            >
              Lưu
            </button>
          </div>
        </div>
      </main>

      <StatusModal 
        isOpen={modalStatus.isOpen}
        onClose={() => setModalStatus({ ...modalStatus, isOpen: false })}
        type={modalStatus.type}
        title={modalStatus.title}
        message={modalStatus.message}
      />
    </div>
  );
};

export default FreeSchedulePage;