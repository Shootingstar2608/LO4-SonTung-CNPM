import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MeetingPage from './pages/MeetingPage';
import OpenSessionPage from './pages/OpenSessionPage';
import FreeSchedulePage from './pages/FreeSchedulePage';
import SessionInfoPage from './pages/SessionInfoPage';
import ResourcePage from './pages/ResourcePage';         // Trang Upload cũ
import ResourceMenuPage from './pages/ResourceMenuPage';
import HistoryPage from './pages/HistoryPage';
import StudentResourcePage from './pages/StudentResourcePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MeetingPage />} />
        <Route path="/create-session" element={<OpenSessionPage />} />
        
        {/* Thêm 2 đường dẫn này */}
        <Route path="/free-schedule" element={<FreeSchedulePage />} />
        <Route path="/session-info" element={<SessionInfoPage />} />

        {/* 1. Vào /resources thì ra trang Menu 3 thẻ */}
        <Route path="/resources" element={<ResourceMenuPage />} /> 

        {/* 2. Vào /resources/upload thì ra trang Form Upload */}
        <Route path="/resources/upload" element={<ResourcePage />} />
        <Route path="/resources/history" element={<HistoryPage />} />
        <Route path="/resources/student" element={<StudentResourcePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;