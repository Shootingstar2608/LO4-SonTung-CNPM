import React, { useState } from 'react';
import Header from '../components/Header';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react'; // Import thêm FileText cho icon ảnh giả
import StatusModal from '../components/StatusModal';
import SearchBar from '../components/SearchBar';
import DetailModal from '../components/DetailModal';
import ShareModal from '../components/ShareModal';

const StudentResourcePage = () => {
  const navigate = useNavigate();

  // --- 1. STATES QUẢN LÝ DỮ LIỆU ---
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedResults, setDisplayedResults] = useState([]);

  // --- 2. STATES QUẢN LÝ MODAL ---
  // Modal thông báo (Success/Error/Warning)
  const [statusModal, setStatusModal] = useState({
    isOpen: false,
    type: 'success',
    title: '',
    message: ''
  });

  // Modal Chi tiết tài liệu
  const [detailModal, setDetailModal] = useState({
    isOpen: false,
    data: null
  });

  // Modal Chia sẻ tài liệu
  const [isShareOpen, setIsShareOpen] = useState(false);

  // --- 3. DỮ LIỆU GIẢ LẬP (DATABASE) ---
  const allResources = [
    { 
      id: 1, 
      owner: 'Nguyễn Văn A', 
      title: 'Giải tích 1 - Đề thi cuối kỳ', 
      size: '200 kB', 
      format: 'PDF', 
      date: '20/11/2025', 
      views: 150, 
      field: 'Toán học', 
      major: 'Khoa học cơ bản' 
    },
    { 
      id: 2, 
      owner: 'Trần Thị B', 
      title: 'Đại số tuyến tính - Bài tập lớn', 
      size: '500 kB', 
      format: 'DOCX', 
      date: '21/11/2025', 
      views: 300, 
      field: 'Toán học', 
      major: 'Công nghệ thông tin' 
    },
    { 
      id: 3, 
      owner: 'Lê Văn C', 
      title: 'Vật lý đại cương 1', 
      size: '1.2 MB', 
      format: 'PDF', 
      date: '22/11/2025', 
      views: 120, 
      field: 'Vật lý', 
      major: 'Điện - Điện tử' 
    },
  ];

  // --- 4. CÁC HÀM XỬ LÝ LOGIC ---

  // Xử lý Tìm kiếm Tài liệu
  const handleSearch = () => {
    // Nếu ô tìm kiếm trống
    if (!searchTerm.trim()) {
      setDisplayedResults([]); // Xóa kết quả cũ
      setStatusModal({
        isOpen: true,
        type: 'warning', // Tam giác vàng
        title: 'Nhập từ khóa',
        message: 'Vui lòng nhập tên tài liệu để tìm kiếm'
      });
      return;
    }

    // Lọc dữ liệu
    const results = allResources.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (results.length > 0) {
      setDisplayedResults(results); // Có kết quả -> Hiện danh sách
    } else {
      setDisplayedResults([]); // Không có -> Xóa danh sách & Báo lỗi
      setStatusModal({
        isOpen: true,
        type: 'warning',
        title: 'Không Tìm Thấy Tài Liệu',
        message: `Không tìm thấy tài liệu nào có tên "${searchTerm}"`
      });
    }
  };

  // Xử lý nút "Thoát" hoặc "Nhập lại" của StatusModal
  const handleCloseStatus = () => {
    setStatusModal({ ...statusModal, isOpen: false });
  };

  // Xử lý khi bấm nút "Chi Tiết" ở danh sách
  const handleDetailClick = (item) => {
    setDetailModal({
      isOpen: true,
      data: item
    });
  };

  // Xử lý khi bấm nút "Chia Sẻ" (Từ trong DetailModal)
  const handleOpenShare = () => {
    setDetailModal({ ...detailModal, isOpen: false }); // Đóng Modal Chi tiết
    setIsShareOpen(true); // Mở Modal Chia sẻ
  };

  // Hàm hiển thị thông báo (Được gọi từ bên trong ShareModal)
  const handleShowAlert = (type, title, message) => {
    setStatusModal({
        isOpen: true,
        type: type,
        title: title,
        message: message
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
        <span className="font-medium text-gray-700">Sinh viên</span>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-xl font-bold text-gray-900 mb-6">Trang Tài liệu học tập dành cho Sinh viên</h1>

        {/* TABS */}
        <div className="flex border-b border-gray-200 mb-0 bg-transparent w-full">
          <button className="px-12 py-3 bg-orange-50 text-orange-600 font-bold border-b-2 border-orange-500 text-sm rounded-t-lg">
            Tìm Kiếm & Chia Sẻ
          </button>
          
          <button 
             onClick={() => navigate('/resources/history')}
             className="px-12 py-3 text-gray-600 bg-white hover:bg-gray-50 font-medium text-sm transition-colors border-b border-gray-200 rounded-t-lg ml-1"
          >
            Lịch Sử Truy Cập
          </button>
        </div>

        {/* CONTENT AREA */}
        <div className="bg-white rounded-b-xl rounded-tr-xl shadow-sm border border-gray-200 p-8 min-h-[500px]">
           
           {/* Component SearchBar */}
           <SearchBar 
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             onSearch={handleSearch}
             placeholder="Nhập tên tài liệu (VD: Giải tích, Đại số...)"
           />

           {/* KẾT QUẢ TÌM KIẾM */}
           {displayedResults.length > 0 && (
             <div className="max-w-5xl mx-auto animate-fade-in-up">
               <h3 className="font-bold text-gray-800 mb-4 text-sm">Kết quả tìm kiếm liên quan ({displayedResults.length})</h3>
               
               <div className="space-y-4">
                 {displayedResults.map((item) => (
                   <div key={item.id} className="flex flex-col md:flex-row bg-white p-4 rounded-xl border border-gray-200 shadow-sm gap-6 hover:shadow-md transition-shadow">
                      {/* Ảnh Placeholder */}
                      <div className="w-full md:w-64 h-32 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center text-gray-400 font-bold border border-gray-200">
                        <FileText size={40} className="opacity-50" />
                      </div>
                      
                      {/* Thông tin */}
                      <div className="flex-1 flex flex-col justify-between">
                          <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-500">Người sở hữu: {item.owner}</span>
                              </div>
                              <h3 className="font-bold text-lg text-gray-900 mt-1 mb-3">{item.title}</h3>
                              
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-500">
                                  <span>{item.size}</span>
                                  <span>{item.format}</span>
                                  <span>{item.date}</span>
                                  <span>{item.views} lượt xem</span>
                              </div>
                          </div>
                          
                          {/* Nút Chi Tiết */}
                          <div className="border-t border-gray-100 pt-3 mt-2 text-center">
                               <button 
                                 onClick={() => handleDetailClick(item)}
                                 className="text-blue-500 text-sm font-bold hover:underline inline-block bg-transparent border-none cursor-pointer"
                               >
                                 Chi Tiết
                               </button>
                          </div>
                      </div>
                   </div>
                 ))}
               </div>

               {/* Pagination (Tĩnh) */}
               <div className="flex justify-center items-center gap-2 mt-10">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500">
                      <ChevronLeft size={16} />
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white font-bold text-xs">1</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-medium">2</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500">
                      <ChevronRight size={16} />
                  </button>
               </div>
             </div>
           )}

        </div>
      </main>

      {/* --- CÁC MODAL --- */}
      
      {/* 1. Detail Modal */}
      <DetailModal 
        isOpen={detailModal.isOpen}
        onClose={() => setDetailModal({ ...detailModal, isOpen: false })}
        data={detailModal.data}
        onShare={handleOpenShare} // Truyền hàm mở Share Modal
      />

      {/* 2. Share Modal */}
      <ShareModal 
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        onShowAlert={handleShowAlert} // Truyền hàm hiển thị lỗi
      />

      {/* 3. Status Modal (Thông báo chung) */}
      <StatusModal 
        isOpen={statusModal.isOpen}
        onClose={handleCloseStatus}
        onConfirm={handleCloseStatus} // Nút OK/Chọn lại cũng đóng modal
        type={statusModal.type}
        title={statusModal.title}
        message={statusModal.message}
      />
    </div>
  );
};

export default StudentResourcePage;