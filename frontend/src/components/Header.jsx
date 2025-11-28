import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';
import logoBKTutor from '../assets/logo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const getLinkClass = (path, exact = false) => {
    let isActive = false;

    if (exact) {
      isActive = location.pathname === path;
    } else {
      if (path === '/') {
        const meetingPages = ['/', '/create-session', '/free-schedule', '/session-info'];
        isActive = meetingPages.includes(location.pathname);
      } 
      else if (path === '/resources') {
        isActive = location.pathname.startsWith('/resources');
      }
    }

    return isActive 
      ? "text-blue-600 border-b-2 border-blue-600 py-5 cursor-pointer transition-colors"
      : "text-gray-900 hover:text-blue-600 py-5 cursor-pointer transition-colors";
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <img 
              src={logoBKTutor} 
              alt="BKTutor Logo" 
              className="h-10 w-auto object-contain" 
            />
            <span className="text-gray-900 font-extrabold text-2xl tracking-tight">
              BKTutor
            </span>
          </div>

          {/* Menu Links */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <Link to="/" className="text-gray-900 hover:text-blue-600 py-5">Trang chủ</Link>
            <Link to="/" className="text-gray-900 hover:text-blue-600 py-5">Thông tin</Link>
            <Link to="/" className="text-gray-900 hover:text-blue-600 py-5">Blog</Link>
            
            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-blue-600 py-5">
              Đặt lịch <ChevronDown size={14} />
            </div>
            
            {/* 3. Áp dụng hàm getLinkClass vào đây */}
            <Link to="/" className={getLinkClass('/')}>
              Quản lý buổi gặp
            </Link>
            
            <Link to="/resources" className={getLinkClass('/resources')}>
              Tài liệu học tập
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Bell size={20} />
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 bg-gray-100 p-1 rounded-full px-3">
              <div className="bg-purple-200 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">U</div>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;