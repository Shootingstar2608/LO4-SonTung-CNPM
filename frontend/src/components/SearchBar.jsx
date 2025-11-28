import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange, onSearch, placeholder = "Nhập nội dung tìm kiếm..." }) => {
  return (
    <div className="flex gap-4 max-w-4xl mx-auto mb-10">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input 
          type="text" 
          value={value}
          onChange={onChange}
          // Bắt sự kiện bấm Enter cũng kích hoạt tìm kiếm
          onKeyDown={(e) => e.key === 'Enter' && onSearch()}
          placeholder={placeholder} 
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>
      <button 
        onClick={onSearch}
        className="px-8 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-sm text-sm"
      >
        Tìm Kiếm
      </button>
    </div>
  );
};

export default SearchBar;