import React from 'react';
import PostCard from './PostCard';
// import PostCard from './PostCard';
// import { Post } from '../types';

// interface FeedProps {
//   posts: Post[];
//   likedPosts: string[];
//   onLike: (postId: string) => void;
// }

const Feed = ({ posts, likedPosts, onLike }) => {
  if (posts.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-700">No posts to display</h2>
        <p className="text-gray-500 mt-2">Follow more users or create your own posts!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard
          key={post.id} 
          post={post} 
          isLiked={likedPosts.includes(post.id)}
          onLike={() => onLike(post.id)}
        />
      ))}
    </div>
  );
};

export default Feed;