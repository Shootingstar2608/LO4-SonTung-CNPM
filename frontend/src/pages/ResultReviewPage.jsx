import React, { useState } from 'react';
import Header from '../components/Header';
import InfoNavbar from '../components/InfoNavbar';
import StatusModal from '../components/StatusModal';

const ResultReviewPage = () => {
  const [activeTab, setActiveTab] = useState('Ketqua');

  // Modal duyệt học bổng
  const [approveModalVisible, setApproveModalVisible] = useState(false);

  // Modal nhập điểm rèn luyện
  const [editScoreModalVisible, setEditScoreModalVisible] = useState(false);

  // Modal thông báo cập nhật thành công
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  // Sinh viên đang thao tác
  const [currentStudent, setCurrentStudent] = useState(null);

  // Dữ liệu sinh viên
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Nguyễn Văn A',
      mssv: '251001',
      faculty: 'Công nghệ Thông tin',
      major: 'Khoa học Máy tính',
      gpa: '3.9',
      credits: '148/140',
      ctxhDays: '10',
      conductScore: '95',
      status: 'Đang học',
      note: 'Đủ điều kiện xét học bổng',
    },
    {
      id: 2,
      name: 'Trần Thị B',
      mssv: '251002',
      faculty: 'Công nghệ Thông tin',
      major: 'Khoa học Máy tính',
      gpa: '3.7',
      credits: '142/140',
      ctxhDays: '15',
      conductScore: '88',
      status: 'Đang học',
      note: 'Đang hoàn thiện hồ sơ',
    },
  ]);

  // Khi nhấn "Duyệt"
  const handleApprove = (student) => {
    setCurrentStudent(student);
    setApproveModalVisible(true);
  };

  // Khi nhấn "Cập nhật" mở modal nhập điểm mới
  const handleEditScore = (student) => {
    setCurrentStudent({ ...student, newScore: student.conductScore });
    setEditScoreModalVisible(true);
  };

  // Xác nhận cập nhật điểm rèn luyện
  const handleConfirmEditScore = (newScore) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === currentStudent.id ? { ...s, conductScore: newScore } : s
      )
    );
    setEditScoreModalVisible(false);
    setSuccessModalVisible(true);
  };

  return (
    <div className="flex flex-col gap-4 min-h-screen bg-gray-50 px-4">
      <Header />
      <div className="w-2/3 mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          Xét duyệt học bổng khuyến khích và CTXH
        </h1>

        <InfoNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="space-y-6 bg-gray-200 p-4">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="mb-5 pb-5 border-b border-gray-200 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
                  <p className="text-sm font-semibold text-gray-600">{student.mssv}</p>
                  <span className="text-green-700 text-sm font-medium">{student.status}</span>
                  <span className="text-sm font-semibold">{student.major}</span>
                  <button
                    onClick={() => handleApprove(student)}
                    className="px-5 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition"
                  >
                    Duyệt
                  </button>
                </div>

                {/* Thông tin cơ bản & điểm */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-32 h-32 bg-gray-200 rounded-full border-2 border-dashed" />
                  </div>
                  <div className="flex w-full justify-between text-sm">
                    <div>
                      <p>
                        <span className="font-medium text-gray-700">Điểm TBTL: </span>
                        {student.gpa}
                      </p>
                      <p>
                        <span className="font-medium text-gray-700">Số tín chỉ: </span>
                        {student.credits}
                      </p>
                      <p>
                        <span className="font-medium text-gray-700">Số ngày CTXH: </span>
                        {student.ctxhDays}
                      </p>
                      <p>
                        <span className="font-medium text-gray-700">Điểm rèn luyện: </span>
                        <span className="text-blue-600 font-semibold">{student.conductScore}</span>
                      </p>
                    </div>

                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => handleEditScore(student)}
                        className="w-full px-4 py-2 border border-orange-600 text-orange-600 font-medium rounded-lg hover:bg-orange-50 transition"
                      >
                        Cập Nhật
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-gray-200">
                  <p className="text-sm text-gray-600">{student.note}</p>
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

      {/* Modal duyệt học bổng */}
      <StatusModal
        isOpen={approveModalVisible}
        onClose={() => setApproveModalVisible(false)}
        type="success"
        title="Xét học bổng thành công"
        message="Học bổng đã được duyệt cho sinh viên này."
        confirmText="OK"
      />

      {/* Modal nhập điểm rèn luyện custom */}
      {editScoreModalVisible && currentStudent && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 text-center">
              Cập nhật điểm rèn luyện
            </h2>
            <p className="text-sm text-gray-600 mb-4 text-center">
              Điểm rèn luyện hiện tại: <span className="font-semibold">{currentStudent.conductScore}</span>
            </p>
            <input
              type="number"
              min="0"
              max="100"
              value={currentStudent.newScore}
              onChange={(e) =>
                setCurrentStudent({
                  ...currentStudent,
                  newScore: e.target.value,
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded mb-4 text-center"
            />
            <div className="flex justify-between gap-4">
              <button
                onClick={() => setEditScoreModalVisible(false)}
                className="flex-1 py-2 border border-gray-300 rounded font-medium hover:bg-gray-50"
              >
                Hủy
              </button>
              <button
                onClick={() => handleConfirmEditScore(currentStudent.newScore)}
                className="flex-1 py-2 bg-orange-600 text-white rounded font-medium hover:bg-orange-700"
              >
                Cập Nhật
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Modal thông báo cập nhật thành công */}
      <StatusModal
        isOpen={successModalVisible}
        onClose={() => setSuccessModalVisible(false)}
        type="success"
        title="Cập nhật điểm rèn luyện thành công"
        message=""
        confirmText="OK"
      />
    </div>
  );
};

export default ResultReviewPage;
