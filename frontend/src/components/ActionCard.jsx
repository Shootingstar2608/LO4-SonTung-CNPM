import React from 'react';

const ActionCard = ({ title, imageSrc, onActionClick, onViewMoreClick }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="h-48 bg-gray-100 relative">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <h3 className="text-center font-bold text-gray-800 text-lg mb-4">{title}</h3>
        <div className="border-t pt-4 flex justify-between items-center text-sm mt-auto">
          <button 
            onClick={onActionClick}
            className="text-green-600 font-medium cursor-pointer hover:underline bg-transparent border-none p-0"
          >
            Bấm để xem
          </button>
          <button 
             onClick={onViewMoreClick}
             className="text-gray-800 font-bold cursor-pointer hover:underline bg-transparent border-none p-0"
          >
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionCard;