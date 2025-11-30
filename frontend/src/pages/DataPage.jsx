// src/pages/DataComparisonPage.jsx
import React, { useState } from "react";
import Header from "../components/Header";

const DataComparisonPage = () => {
  const [selectedSessions, setSelectedSessions] = useState([]);

  // Dữ liệu mẫu buổi học
  const sessions = [
    { id: 1, name: "Tên khóa học", group: "Nhóm lớp" },
    { id: 2, name: "Tên khóa học", group: "Nhóm lớp" },
    { id: 3, name: "Tên khóa học", group: "Nhóm lớp" },
    { id: 4, name: "Tên khóa học", group: "Nhóm lớp" },
    { id: 5, name: "Tên khóa học", group: "Nhóm lớp" },
    { id: 6, name: "Tên khóa học", group: "Nhóm lớp" },
  ];

  const evaluations = [
    { id: 1, content: "<nội dung đánh giá>", email: "BKNetID@hcmut.edu.vn", link: "Khai thác dữ liệu" },
    { id: 2, content: "<nội dung đánh giá>", email: "BKNetID@hcmut.edu.vn", link: "Khai thác dữ liệu" },
    { id: 3, content: "<nội dung đánh giá>", email: "BKNetID@hcmut.edu.vn", link: "Khai thác dữ liệu" },
    { id: 4, content: "<nội dung đánh giá>", email: "BKNetID@hcmut.edu.vn", link: "Khai thác dữ liệu" },
    { id: 5, content: "<nội dung đánh giá>", email: "BKNetID@hcmut.edu.vn", link: "Khai thác dữ liệu" },
    { id: 6, content: "<nội dung đánh giá>", email: "BKNetID@hcmut.edu.vn", link: "Khai thác dữ liệu" },
  ];

  const criteria = [
    "Tiêu chí 1", "Tiêu chí 2", "Tiêu chí 3", "Tiêu chí 4", "Tiêu chí 5", "Tiêu chí 6"
  ];

  const handleSessionToggle = (id) => {
    setSelectedSessions(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleCompare = () => {
    if (selectedSessions.length < 2) {
      alert("Vui lòng chọn ít nhất 2 buổi học để so sánh!");
      return;
    }
    alert(`Đã chọn ${selectedSessions.length} buổi học để so sánh!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="px-16 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Khai thác dữ liệu</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cột trái: Chọn buổi học */}
          <div className="bg-white h-fit rounded-lg border shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Chọn 01 Hoặc Nhiều Buổi Học</h2>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {sessions.map((session) => (
                <label
                  key={session.id}
                  className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all ${
                    selectedSessions.includes(session.id)
                      ? "border-blue-500 bg-blue-50 shadow-md"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 border-2 border-dashed rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-lg">BK</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{session.name}</div>
                      <div className="text-sm text-gray-500">{session.group}</div>
                    </div>
                  </div>

                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                    selectedSessions.includes(session.id)
                      ? "bg-blue-500 border-blue-500"
                      : "border-gray-400"
                  }`}>
                    {selectedSessions.includes(session.id) && (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </label>
              ))}
            </div>

            <button className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
              Chọn
            </button>
          </div>

          {/* Cột giữa: Danh sách đánh giá */}
          <div className="bg-white h-fit rounded-lg border shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Danh Sách Các Đánh Giá</h2>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {evaluations.map((evalItem) => (
                <div key={evalItem.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">BK</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{evalItem.content}</p>
                      <p className="text-xs text-gray-500">{evalItem.email}</p>
                    </div>
                  </div>
                  <a href="#" className="text-blue-600 text-sm hover:underline">
                    {evalItem.link}
                  </a>
                </div>
              ))}
            </div>

            {/* Phân trang */}
            <div className="flex justify-center mt-6 gap-2">
              <button className="w-8 h-8 rounded-full bg-black text-white text-sm">1</button>
              {[2, 3, 4].map(n => (
                <button key={n} className="w-8 h-8 rounded-full border border-gray-300 text-sm hover:bg-gray-100">
                  {n}
                </button>
              ))}
            </div>
          </div>

          {/* Cột phải: Bộ lọc + So sánh */}
          <div className="space-y-6">
            {/* Bộ lọc */}
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Bộ lọc</h2>
              
              <div className="space-y-4">
                <div className="font-medium text-gray-700">Tiêu chí</div>
                {criteria.map((c, i) => (
                  <label key={i} className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                    <span className="text-sm">{c}</span>
                    <span className="ml-auto text-xs text-gray-500">&lt;5G lượng&gt;</span>
                    <span className="text-xs text-blue-600">Tập định kèm</span>
                  </label>
                ))}
                
                <button className="w-full mt-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700">
                  Lọc
                </button>
              </div>
            </div>

            {/* So sánh dữ liệu */}
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">So Sánh Dữ Liệu</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg">
                  <div className="text-4xl mb-2">Chart</div>
                  <span className="text-sm text-gray-600">&lt;Nội Dung&gt;</span>
                </div>
                <div className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg">
                  <div className="text-4xl mb-2">Chart</div>
                  <span className="text-sm text-gray-600">&lt;Nội Dung&gt;</span>
                </div>
                <div className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg">
                  <div className="text-4xl mb-2">Compare</div>
                  <span className="text-sm text-gray-600">&lt;Nội Dung&gt;</span>
                </div>
                <div className="flex flex-col items-center p-4 border-2 border-orange-400 border-dashed rounded-lg bg-orange-50">
                  <div className="text-4xl mb-2">Document</div>
                  <span className="text-sm font-medium text-orange-600">&lt;Nội Dung&gt;</span>
                </div>
              </div>

              <button
                onClick={handleCompare}
                className="w-full py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition"
              >
                Hiển Kết Quả
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataComparisonPage;