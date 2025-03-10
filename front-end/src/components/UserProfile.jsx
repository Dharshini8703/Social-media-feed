import React from 'react';
// import { User as UserType } from '../types';


const UserProfile = ({ user, expanded = false }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col items-center">
        <img 
          src={user.profilePicture} 
          alt={user.username} 
          className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
        />
        <h2 className="text-xl font-bold mt-4">{user.name}</h2>
        <p className="text-gray-600">@{user.username}</p>
        
        {expanded && (
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
            Edit Profile
          </button>
        )}
      </div>
      
      <div className="flex justify-between mt-6 text-center">
        <div>
          <p className="font-bold">{user.posts}</p>
          <p className="text-gray-600 text-sm">Posts</p>
        </div>
        <div>
          <p className="font-bold">{user.followers}</p>
          <p className="text-gray-600 text-sm">Followers</p>
        </div>
        <div>
          <p className="font-bold">{user.following}</p>
          <p className="text-gray-600 text-sm">Following</p>
        </div>
      </div>
      
      {(user.bio || expanded) && (
        <div className="mt-6">
          <h3 className="font-semibold text-gray-800">Bio</h3>
          <p className="text-gray-600 mt-1">{user.bio || "No bio yet."}</p>
        </div>
      )}
      
      {expanded && (
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">Email</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Joined</h3>
            <p className="text-gray-600">{user.joinDate}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;