// import { User, Post } from '../types';

export const mockUser = [{
  id: 'user1',
  name: 'Alex Johnson',
  username: 'alexj',
  profilePicture: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
  bio: 'Digital creator | Photography enthusiast | Coffee lover',
  email: 'alex@example.com',
  joinDate: 'January 2023',
  posts: 42,
  followers: 1024,
  following: 365
},
{
  id: 'user2',
  name: 'Sarah Miller',
  username: 'sarahm',
  profilePicture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
},
{
  id: 'user3',
  name: 'Michael Chen',
  username: 'mikechen',
  profilePicture: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
}
]


export const mockPosts = [
  {
    id: 'post1',
    userId: 'user2',
    user: {
      name: 'Sarah Miller',
      username: 'sarahm',
      profilePicture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
    content: 'Just finished my morning hike! The view was absolutely breathtaking today. #nature #hiking #morningvibes',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    timestamp: '2 hours ago',
    likes: 124,
    comments: [
      {
        id: 'comment1',
        content: 'Wow, that view is amazing! Where is this?',
        timestamp: '1 hour ago',
        user: {
          name: 'Alex Johnson',
          username: 'alexj',
          profilePicture: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
        }
      },
      {
        id: 'comment2',
        content: 'This is at Sunrise Peak! You should join me next time.',
        timestamp: '45 minutes ago',
        user: {
          name: 'Sarah Miller',
          username: 'sarahm',
          profilePicture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
        }
      }
    ]
  },
  {
    id: 'post2',
    userId: 'user1',
    user: {
      name: 'Alex Johnson',
      username: 'alexj',
      profilePicture: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
    content: 'Just got my hands on the new camera! Can\'t wait to test it out this weekend. Any suggestions for good photography spots?',
    timestamp: '5 hours ago',
    likes: 89,
    comments: [
      {
        id: 'comment3',
        content: 'The botanical gardens are amazing this time of year!',
        timestamp: '4 hours ago',
        user: {
          name: 'Michael Chen',
          username: 'mikechen',
          profilePicture: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
        }
      }
    ]
  },
  {
    id: 'post3',
    userId: 'user3',
    user: {
      name: 'Michael Chen',
      username: 'mikechen',
      profilePicture: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
    content: 'Just launched my new portfolio website! It\'s been a labor of love for the past few months. Check it out and let me know what you think! #webdesign #portfolio #freelance',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    timestamp: '1 day ago',
    likes: 215,
    comments: [
      {
        id: 'comment4',
        content: 'This looks amazing! Love the design.',
        timestamp: '20 hours ago',
        user: {
          name: 'Sarah Miller',
          username: 'sarahm',
          profilePicture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
        }
      },
      {
        id: 'comment5',
        content: 'Congrats on the launch! The site is super clean and professional.',
        timestamp: '18 hours ago',
        user: {
          name: 'Alex Johnson',
          username: 'alexj',
          profilePicture: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
        }
      }
    ]
  },
  {
    id: 'post4',
    userId: 'user1',
    user: {
      name: 'Alex Johnson',
      username: 'alexj',
      profilePicture: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
    content: 'Coffee and code - the perfect combination for a productive Monday! #coding #developer #coffeelover',
    image: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    timestamp: '2 days ago',
    likes: 156,
    comments: []
  }
];