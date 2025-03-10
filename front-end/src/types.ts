export interface User {
  id: string;
  name: string;
  username: string;
  profilePicture: string;
  bio?: string;
  email?: string;
  joinDate?: string;
  posts: number;
  followers: number;
  following: number;
}

export interface Comment {
  id: string;
  content: string;
  timestamp: string;
  user: {
    name: string;
    username: string;
    profilePicture: string;
  };
}

export interface Post {
  id: string;
  userId: string;
  user: {
    name: string;
    username: string;
    profilePicture: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: Comment[];
}