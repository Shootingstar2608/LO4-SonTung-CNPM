import React, { useState } from 'react';
import Header from '../components/Header';
import InfoNavbar from '../components/InfoNavbar';


const InfoPage = () => {
  const [activeTab, setActiveTab] = useState('BaoCao');

  return (
    <div className="min-h-screen flex flex-col gap-4 bg-gray-50 px-4">
        <Header/>
      <div className="max-w-7xl mx-auto">
        {/* Tiêu đề trang */}
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Báo cáo lớp học</h1>
        <InfoNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* Bộ lọc tìm kiếm */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tên Môn Học
              </label>
              <input
                type="text"
                placeholder="Nhập tên môn học"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mã Môn
              </label>
              <input
                type="text"
                placeholder="Nhập mã môn"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Trạng Thái
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none">
                <option>Tất cả</option>
                <option>Đang học</option>
                <option>Đã kết thúc</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Địa điểm
              </label>
              <input
                type="text"
                placeholder="CS1, CS2..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
            </div>

            <div className="flex items-end">
              <button className="w-full bg-orange-600 text-white font-medium py-2.5 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Xem
              </button>
            </div>
          </div>
        </div>

        {/* Bảng danh sách lớp học */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-200 border-2 border-dashed rounded-lg" />
                <div>
                  <h3 className="font-semibold text-gray-900">Tên Môn Học</h3>
                  <p className="text-sm text-gray-600">Giảng viên: HK251_L04</p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full">
                  Thoát
                </span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Số lượng sinh viên: <span className="font-medium">80</span>
              </p>
            </div>
          </div>

          {/* Phân trang */}
          <div className="px-6 py-4 bg-gray-50 flex items-center justify-center gap-2">
            <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-200">
              {'<'}
            </button>
            <button className="w-8 h-8 rounded bg-orange-600 text-white flex items-center justify-center">
              1
            </button>
            <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-200">
              2
            </button>
            <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-200">
              3
            </button>
            <button className="w-8 h-8 rounded flex items-center justify-center hover:bg-gray-200">
              {'>'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
