import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import BottomBar from './components/BottomBar';
// import UserProfile from './components/UserProfile';
// import Feed from './components/Feed';
import { mockPosts, mockUser } from './data/mockData';
import BottomBar from './components/BottomBar';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import UserProfile from './components/UserProfile';
// import { mockPosts, mockUser } from './data/mockData';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [likedPosts, setLikedPosts] = useState([]);
 
  const handleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="flex flex-col md:flex-row gap-6 w-full max-w-7xl mx-auto px-4">
            <div className="md:w-1/3 lg:w-1/4">
              <UserProfile user={mockUser[0]} />
            </div>
            <div className="md:w-2/3 lg:w-3/4">
              <Feed posts={mockPosts} likedPosts={likedPosts} onLike={handleLike} />
            </div>
          </div>
        );
      case 'liked':
        return (
          <div className="flex flex-col md:flex-row gap-6 w-full max-w-7xl mx-auto px-4">
            <div className="md:w-1/3 lg:w-1/4">
              <UserProfile user={mockUser} />
            </div>
            <div className="md:w-2/3 lg:w-3/4">
              <Feed 
                posts={mockPosts.filter(post => likedPosts.includes(post.id))} 
                likedPosts={likedPosts} 
                onLike={handleLike} 
              />
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="mb-6">
              <UserProfile user={mockUser} expanded />
            </div>
            <Feed 
              posts={mockPosts.filter(post => post.userId === mockUser.id)} 
              likedPosts={likedPosts} 
              onLike={handleLike} 
            />
          </div>
        );
      case 'create':
        return (
          <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
              <textarea 
                className="w-full border border-gray-300 rounded-lg p-4 min-h-[150px] mb-4" 
                placeholder="What's on your mind?"
              />
              <div className="flex justify-between items-center">
                <button className="flex items-center gap-2 text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                  Add Photo
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                  Post
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow py-6 pb-24">
        {renderContent()}
      </main>
      <BottomBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;