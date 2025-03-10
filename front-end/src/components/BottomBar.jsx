import React from 'react';
import { Home, PlusSquare, User, Heart } from 'lucide-react';

// interface BottomBarProps {
//   activeTab: string;
//   setActiveTab: (tab: string) => void;
// }

const BottomBar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'create', icon: PlusSquare, label: 'Create' },
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'liked', icon: Heart, label: 'Liked' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="flex justify-around items-center h-16 max-w-7xl mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center w-full h-full ${
              activeTab === tab.id ? 'text-blue-500' : 'text-gray-500'
            } hover:bg-gray-50 transition-colors`}
          >
            <tab.icon className={`h-6 w-6 ${activeTab === tab.id ? 'text-blue-500' : 'text-gray-500'}`} />
            <span className="text-xs mt-1">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;