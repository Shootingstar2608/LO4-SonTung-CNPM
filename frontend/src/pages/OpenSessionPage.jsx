import React from 'react';
import Header from '../components/Header'; // Nhớ import Header cũ vào
import { ChevronDown } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const OpenSessionPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-700 pb-10">
        
        {/* 1. Tái sử dụng Navbar */}
        <Header />

        {/* 2. Breadcrumb (Thanh điều hướng nhỏ) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-gray-500">
            <span className="hover:text-blue-600 cursor-pointer">Trang chủ</span>
            <span className="mx-2">›</span>
            <span className="hover:text-blue-600 cursor-pointer">Quản lý buổi gặp</span>
            <span className="mx-2">›</span>
            <span className="font-medium text-gray-700">Mở buổi tư vấn</span>
        </div>

        {/* 3. Nội dung chính */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            
            {/* Tiêu đề trang */}
            <h1 className="text-xl font-bold text-gray-900 mb-6">Mở buổi tư vấn</h1>

            {/* Form Container */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            
            <form className="space-y-6">
                
                {/* Input: Chủ đề */}
                <div>
                <input 
                    type="text" 
                    placeholder="Chủ đề" 
                    className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
                </div>

                {/* Textarea: Nội dung */}
                <div>
                <textarea 
                    rows={8}
                    placeholder="Nội dung" 
                    className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 resize-none"
                ></textarea>
                </div>

                {/* Hàng 4 cột: Ngày, Giờ, Hình thức, Số lượng */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                
                {/* Cột 1: Ngày */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-800">Ngày</label>
                    <div className="relative">
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-500 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Ngày</option>
                        <option>28/11/2025</option>
                        <option>29/11/2025</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
                    </div>
                </div>

                {/* Cột 2: Khung giờ */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-800">Khung giờ</label>
                    <div className="relative">
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-500 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Khung giờ</option>
                        <option>09:00 - 11:00</option>
                        <option>14:00 - 16:00</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
                    </div>
                </div>

                {/* Cột 3: Hình thức */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-800">Hình thức</label>
                    <div className="relative">
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-800 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Online</option>
                        <option>Offline</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
                    </div>
                </div>

                {/* Cột 4: Số lượng sinh viên */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-800">Số lượng sinh viên tối đa</label>
                    <input 
                    type="number" 
                    defaultValue={0}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                </div>

                {/* Input: Địa điểm / Link */}
                <div>
                <input 
                    type="text" 
                    placeholder="Địa điểm / Link phòng" 
                    className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
                </div>

                {/* Buttons: Hủy / Xác nhận */}
                <div className="flex justify-center gap-4 pt-4">
                <button 
                    type="button"
                    onClick={() => navigate('/')} // <--- 3. Bấm Hủy thì quay về trang chủ
                    className="px-8 py-2 border border-gray-400 rounded hover:bg-gray-50 text-gray-700 font-medium transition-colors"
                >
                    Hủy
                </button>
                <button 
                    type="submit"
                    className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-medium transition-colors shadow-sm"
                >
                    Xác Nhận
                </button>
                </div>

            </form>
            </div>
        </main>
        </div>
    );
};

export default OpenSessionPage;