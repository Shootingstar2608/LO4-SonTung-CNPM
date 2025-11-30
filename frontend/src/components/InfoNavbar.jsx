import { useNavigate } from 'react-router-dom';

const tabs = [
  { id: 'Baocao', label: 'Báo cáo tổng quan', route: '/info/info' },
  { id: 'Ketqua', label: 'Xem kết quả tham gia', route: '/info/result' },
];

const InfoNavbar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  return (
    <div className="flex">
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id);
            if (tab.route) navigate(tab.route);
          }}
          className={`
            px-6 py-3 border border-gray-300 font-medium transition-colors
            ${index === 0 ? 'rounded-tl-xl' : ''}
            ${index === tabs.length - 1 ? 'rounded-tr-xl' : ''}
            ${
              activeTab === tab.id
                ? 'bg-white text-orange-600 border-b-2 border-orange-600'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default InfoNavbar