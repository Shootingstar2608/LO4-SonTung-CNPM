import React from 'react';

const Breadcrumb = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-gray-500">
      <span className="cursor-pointer hover:text-blue-600">Trang chủ</span>
      <span className="mx-2">›</span>
      <span className="font-medium text-gray-700">Quản lý buổi gặp</span>
    </div>
  );
};

export default Breadcrumb;