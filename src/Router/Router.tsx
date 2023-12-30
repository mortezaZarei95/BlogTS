import { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routelist } from './routeList';

import { Post as PostType } from '../Pages/Posts/Posts';

interface BlogContextType {
  posts: PostType[];
  setPosts: (postList: PostType[]) => void;
  savedPosts: PostType[];
  savedSetPosts: (savedpostlist: PostType[]) => void;
}

export const BlogContext = createContext<BlogContextType>({
  posts: [],
  setPosts: () => {},
  savedPosts: [],
  savedSetPosts: () => {},
});
const Router = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [savedPosts, savedSetPosts] = useState<PostType[]>([]);
  const router = createBrowserRouter(routelist);
  return (
    <BlogContext.Provider
      value={{ posts, setPosts, savedPosts, savedSetPosts }}
    >
      <RouterProvider router={router} />
    </BlogContext.Provider>
  );
};

export default Router;
