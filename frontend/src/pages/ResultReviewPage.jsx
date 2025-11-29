import React, { useState } from 'react';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import InfoNavbar from '../components/InfoNavbar';

const ResultReviewPage = () => {
  const [activeTab, setActiveTab] = useState('Ketqua');

  const tabs = [
    { id: 'BaoCao', label: 'Báo cáo' },
    { id: 'HocBong', label: 'Học bổng' },
    { id: 'SinhVien', label: 'Sinh viên' },
    { id: 'NguonLuc', label: 'Nguồn lực' },
  ];

  // Danh sách hồ sơ mẫu (sẽ thay bằng API thật)
  const applications = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      mssv: '251001',
      faculty: 'Công nghệ Thông tin',
      major: 'Khoa học Máy tính',
      gpa: '3.9',
      credits: '148/140',
      ctxhHours: '101',
      status: 'Đang xét',
      note: 'Đủ điều kiện xét học bổng',
    },
    // Thêm nhiều hơn nếu cần
  ];

  return (
    <div className="flex flex-col gap-4 min-h-screen bg-gray-50 px-4">
      <Header/>
      <div className="max-w-6xl mx-auto">
        {/* Tiêu đề trang */}
        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          Xét duyệt học bổng khuyến khích và CTXH
        </h1>

        {/* Tabs */}
        <InfoNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Danh sách hồ sơ xét duyệt */}
        <div className="space-y-6 w-200">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="mb-5 pb-5 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{app.name}</h3>
                    <p className="text-sm font-semibold text-gray-600">{app.mssv}</p>
                    <span className="text-green-700 text-sm font-medium">
                      Đang học
                    </span>
                    <span className="text-sm font-semibold">
                      {app.major}
                    </span>
                    <button className="px-5 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition">
                      Duyệt
                    </button>
                  </div>
                </div>
                {/* Header: Thông tin cơ bản */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-32 h-32 bg-gray-200 rounded-full border-2 border-dashed" />
                  </div>
                  <div className="flex w-full justify-between text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Điểm TBTL 3.9</span>
                    <br />
                    <span className="font-medium text-gray-700">Điểm TBHK 4.0</span>
                    <br />
                    <span className="font-medium text-gray-700">Điểm Rèn luyện: 95</span>
                    <br />
                    <span className="font-medium text-gray-700">Số ngày CTXH:</span>{' '}
                    <span className="text-blue-600 font-semibold">101</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="flex justify-center px-4 py-2 border-1 border-black rounded-lg font-medium">
                      Thoát
                    </span>
                    <button className="w-full px-4 py-2 border border-orange-600 text-orange-600 font-medium rounded-lg hover:bg-orange-50 transition">
                      Cập Nhật
                    </button>
                  </div>
                </div>
                </div>

                {/* Thông tin học tập & hoạt động */}
                

                {/* Ghi chú */}
                <div className="mt-5 pt-5 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium"></span> {app.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Phân trang */}
        <div className="mt-10 flex justify-center items-center gap-2">
          <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100">
            {'<'}
          </button>
          <button className="w-10 h-10 rounded-lg bg-orange-600 text-white font-medium">1</button>
          <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100">2</button>
          <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100">3</button>
          <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100">
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultReviewPage;