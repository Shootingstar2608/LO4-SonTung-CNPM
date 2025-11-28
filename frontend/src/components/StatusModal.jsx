import React from 'react';
import { Check, AlertCircle, TriangleAlert } from 'lucide-react'; 

const StatusModal = ({ isOpen, onClose, onConfirm, type = 'success', title, message }) => {
  if (!isOpen) return null;

  const isConfirm = type === 'confirm';
  const isSuccess = type === 'success';
  const isError = type === 'error';
  const isWarning = type === 'warning'; 

  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
      
      <div className={`bg-white rounded-xl shadow-xl w-full max-w-[400px] p-8 transform transition-all animate-fade-in-up ${
        isWarning ? 'border border-red-500' : ''
      }`}>
        
        <div className="flex flex-col items-center">
          
          {/* --- ICON --- */}
          {isSuccess && (
             <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-500">
                <Check size={28} strokeWidth={3} />
             </div>
          )}
          {isError && (
             <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-500">
                <AlertCircle size={28} strokeWidth={3} />
             </div>
          )}
          {isWarning && (
             <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4 text-orange-500 border border-orange-100">
                <TriangleAlert size={28} strokeWidth={2.5} />
             </div>
          )}

          {/* --- TEXT --- */}
          <h2 className="text-lg font-bold text-gray-900 mb-2 text-center">
            {title}
          </h2>
          <p className="text-gray-600 text-center text-sm mb-8 px-2">
            {message}
          </p>

          {/* --- BUTTONS --- */}
          <div className="w-full">
            
            {/* Case 1: Confirm (2 nút) */}
            {isConfirm && (
              <div className="flex gap-4">
                <button onClick={onClose} className="flex-1 py-2 border border-gray-400 rounded text-gray-700 font-bold hover:bg-gray-50">
                  Thoát
                </button>
                <button onClick={onConfirm} className="flex-1 py-2 bg-blue-500 text-white rounded font-bold hover:bg-blue-600">
                  OK
                </button>
              </div>
            )}

            {/* Case 2: Warning (2 nút) */}
            {isWarning && (
              <div className="flex gap-4">
                <button onClick={onClose} className="flex-1 py-2 border border-gray-300 rounded text-gray-900 font-bold hover:bg-gray-50 shadow-sm">
                  Thoát
                </button>
                <button onClick={onConfirm} className="flex-1 py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 shadow-sm">
                  Chọn Lại
                </button>
              </div>
            )}

            {/* Case 3: Success (1 nút Thoát - ĐÃ SỬA MÀU) */}
            {isSuccess && (
              <button 
                onClick={onClose}
                className="w-full py-2 rounded font-bold shadow-sm transition-colors border border-gray-400 text-gray-800 bg-white hover:bg-gray-50"
              >
                Thoát
              </button>
            )}

            {/* Case 4: Error (1 nút Thoát - ĐÃ SỬA MÀU) */}
            {isError && (
              <button 
                onClick={onClose}
                className="w-full py-2 rounded font-bold shadow-sm transition-colors text-white bg-red-600 hover:bg-red-700"
              >
                Thoát
              </button>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusModal;