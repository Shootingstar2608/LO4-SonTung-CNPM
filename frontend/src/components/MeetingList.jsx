import React from 'react';
import { Link } from 'react-router-dom';

const MeetingList = ({ meetings }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <h2 className="text-center text-lg font-bold text-gray-800 mb-6 border-b pb-4">
        Buổi tư vấn
      </h2>
      
      <div className="space-y-6">
        {meetings.map((item, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center text-sm border-b md:border-none pb-4 md:pb-0 last:border-0 last:pb-0">
            <div className="flex flex-col">
              <span className="font-medium text-gray-600">Ngày</span>
              {/* <span className="text-gray-900">{item.date}</span> */} 
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-gray-600">Giờ bắt đầu</span>
              {/* <span className="text-gray-900">{item.startTime}</span> */}
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-gray-600">Thời gian</span>
              {/* <span className="text-gray-900">{item.duration}</span> */}
            </div>
            <div className="flex justify-between items-center md:block">
              <div className="flex flex-col md:mb-1">
                <span className="font-medium text-gray-600">Hình thức</span>
                {/* <span className="text-gray-900">{item.type}</span> */}
              </div>
              <Link to="/session-info" className="text-blue-500 hover:underline text-sm font-medium md:float-right">
                Xem chi tiết
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetingList;