import React, { useState } from "react";
// import "./FeedbackPage.css";
import Header from "../components/Header";

const FeedbackPage = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [feedbackType, setFeedbackType] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [tutorEmail, setTutorEmail] = useState("");
  const [content, setContent] = useState("");
  const [saveEmail, setSaveEmail] = useState(false);
  const [files, setFiles] = useState([]);

  const courses = [
    { id: 1, course: "Tên khóa học", group: "Nhóm lớp" },
    { id: 2, course: "Tên khóa học", group: "Nhóm lớp" },
    { id: 3, course: "Tên khóa học", group: "Nhóm lớp" },
    { id: 4, course: "Tên khóa học", group: "Nhóm lớp" },
    { id: 5, course: "Tên khóa học", group: "Nhóm lớp" },
];

  const handleCourseToggle = (id) => {
    setSelectedCourses((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      selectedCourses,
      feedbackType,
      studentName,
      studentEmail,
      tutorEmail,
      content,
      saveEmail,
      files,
    });
    alert("Phản hồi đã gửi! Kiểm tra console để xem dữ liệu.");
  };

  return (
    <div className="flex flex-col gap-4 min-h-screen bg-gray-50">
      {/* Header */}
        <Header/>

      {/* Breadcrumb */}
        <div className="px-16">
            <h1 className="text-2xl font-bold mb-8">Phản hồi các buổi học đã tham gia</h1>

            <div className="grid md:grid-cols-2 gap-10">
                {/* Left: Chọn buổi học */}
                <div>
                <h2 className="text-lg font-semibold mb-4">
                    Chọn 01 buổi học để phản hồi chất lượng
                </h2>

                <div className="flex flex-col justify-center space-y-3 bg-gray-200 rounded-lg px-2 py-2 w-2/3">
                    {courses.map((course) => (
                        <label
                        key={course.id}
                        className={`flex items-center justify-between px-8 py-8 border rounded-lg cursor-pointer bg-white transition ${
                            selectedCourses.includes(course.id)
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-300 hover:bg-gray-50"
                        }`}
                        >
                        {/* Nội dung khóa học */}
                        <div className="flex items-center gap-8">
                            <div className="w-16 h-16 bg-gray-200 border-2 border-dashed rounded-lg" />

                            <div className="flex flex-col">
                            <span className="font-medium">{course.course}</span>
                            <span className="text-gray-500 text-sm">{course.group}</span>
                            </div>
                        </div>

                        {/* Checkbox ở bên phải */}
                        <div
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            selectedCourses.includes(course.id)
                                ? "bg-blue-500 border-blue-500"
                                : "border-gray-400"
                            }`}
                        >
                            <input
                            type="checkbox"
                            className="sr-only"
                            checked={selectedCourses.includes(course.id)}
                            onChange={() => handleCourseToggle(course.id)}
                            />

                            {selectedCourses.includes(course.id) && (
                            <svg
                                className="w-4 h-4 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                                />
                            </svg>
                            )}
                        </div>
                        </label>
                        
                    ))}
                    <button className="m-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 mx-auto block">
                        Chọn
                    </button>
                </div>


                
                </div>

                {/* Right: Form phản hồi */}
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold mb-4">Nội dung phản hồi</h2>

                    <form onSubmit={handleSubmit} className="bg-white border rounded-lg p-6 space-y-5">
                        <div>
                        <span className="block text-lg font-bold text-gray-700 mb-1">
                            Vui lòng nhập nội dung phản hồi <span className="text-red-500">*</span>
                        </span>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tùy chọn gửi phản hồi ẩn danh hoặc công khai
                        </label>
                        <select
                            value={feedbackType}
                            onChange={(e) => setFeedbackType(e.target.value)}
                            className="w-full border rounded-md px-3 py-2"
                        >
                            <option value="khen">Gửi phản hồi công khai</option>
                            <option value="gop-y">Gửi phản hồi ẩn danh</option>
                        </select>
                        </div>

                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Họ tên sinh viên
                        </label>
                        <input
                            type="text"
                            placeholder="Họ tên sinh viên"
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            className="w-full border rounded-md px-3 py-2"
                        />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                        <input
                            type="email"
                            placeholder="Email (đuôi .hcmut.edu.vn)*"
                            value={studentEmail}
                            onChange={(e) => setStudentEmail(e.target.value)}
                            className="border rounded-md px-3 py-2"
                        />
                        <input
                            type="email"
                            placeholder="Email tutor"
                            value={tutorEmail}
                            onChange={(e) => setTutorEmail(e.target.value)}
                            className="border rounded-md px-3 py-2"
                        />
                        </div>

                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nội dung phản hồi <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            rows={6}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full border rounded-md px-3 py-2"
                            placeholder="Nhập nội dung phản hồi..."
                        ></textarea>
                        </div>

                        <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="save-email"
                            checked={saveEmail}
                            onChange={(e) => setSaveEmail(e.target.checked)}
                            className="mr-2"
                        />
                        <label htmlFor="save-email" className="text-sm text-gray-600">
                            Lưu lại và gửi phản hồi về email
                        </label>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Tải lên minh chứng
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4v-8a4 4 0 00-4-4h-4m-4-4v4m0-4h-4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="mt-2 text-sm text-gray-600">
                                    Chọn minh chứng từ máy (pdf, jpg, png)
                                </p>
                                <input
                                    type="file"
                                    multiple
                                    onChange={handleFileChange}
                                    className="mt-3"
                                />
                                {files.length > 0 && (
                                    <div className="mt-3 text-sm text-gray-600">
                                        Đã chọn: {files.map(f => f.name).join(", ")}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-end space-x-4 pt-4">
                            <button
                                type="button"
                                className="px-6 py-2 border border-gray-400 rounded-md hover:bg-gray-50"
                                onClick={() => {
                                setFeedbackType("");
                                setStudentName("");
                                setStudentEmail("");
                                setTutorEmail("");
                                setContent("");
                                setSaveEmail(false);
                                setFiles([]);
                                }}
                            >
                                Thoát
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Xác nhận
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      
    </div>
  );
};

export default FeedbackPage;
