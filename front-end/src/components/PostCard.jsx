import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
// import { Post } from '../types';


const PostCard = ({ post, isLiked, onLike }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Post header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img 
            src={post.user.profilePicture} 
            alt={post.user.username} 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{post.user.name}</p>
            <p className="text-gray-500 text-sm">@{post.user.username}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <MoreHorizontal size={20} />
        </button>
      </div>
      
      {/* Post content */}
      <div className="px-4 pb-3">
        <p className="text-gray-800 mb-4">{post.content}</p>
        
        {post.image && (
          <div className="mb-4">
            <img 
              src={post.image} 
              alt="Post" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
        
        {/* Post stats */}
        <div className="flex items-center text-gray-500 text-sm space-x-4">
          <span>{post.likes} likes</span>
          <span>{post.comments.length} comments</span>
          <span>{post.timestamp}</span>
        </div>
      </div>
      
      {/* Post actions */}
      <div className="flex border-t border-gray-100">
        <button 
          onClick={onLike}
          className={`flex items-center justify-center space-x-2 flex-1 p-3 hover:bg-gray-50 ${isLiked ? 'text-red-500' : 'text-gray-500'}`}
        >
          <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
          <span>Like</span>
        </button>
        
        <button 
          onClick={() => setShowComments(!showComments)}
          className="flex items-center justify-center space-x-2 flex-1 p-3 text-gray-500 hover:bg-gray-50"
        >
          <MessageCircle size={20} />
          <span>Comment</span>
        </button>
        
        <button className="flex items-center justify-center space-x-2 flex-1 p-3 text-gray-500 hover:bg-gray-50">
          <Share2 size={20} />
          <span>Share</span>
        </button>
      </div>
      
      {/* Comments section */}
      {showComments && (
        <div className="border-t border-gray-100 p-4">
          {/* Comment input */}
          <div className="flex space-x-3 mb-4">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
              alt="Your profile" 
              className="w-8 h-8 rounded-full object-cover"
            />
            <input 
              type="text" 
              placeholder="Write a comment..." 
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {/* Comments list */}
          <div className="space-y-4">
            {post.comments.map((comment, index) => (
              <div key={index} className="flex space-x-3">
                <img 
                  src={comment.user.profilePicture} 
                  alt={comment.user.username} 
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-2xl px-4 py-2">
                    <p className="font-semibold text-sm">{comment.user.name}</p>
                    <p className="text-gray-800 text-sm">{comment.content}</p>
                  </div>
                  <div className="flex items-center mt-1 space-x-4 text-xs text-gray-500">
                    <button>Like</button>
                    <button>Reply</button>
                    <span>{comment.timestamp}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;