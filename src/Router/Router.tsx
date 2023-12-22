import React, { createContext, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import NotFount from "../components/Layout/NotFound";
import Posts, { Post } from '../Pages/Posts/Posts';
import NewPost from '../Pages/New Post/NewPost';
import Saved from '../Pages/Saved/Saved';

interface BlogContextType {
  posts : Post[],
  setposts : (postList:Post[])=>void,
  savedposts : Post[],
  savedsetposts : (savedpostlist:Post[])=>void
}

export const BlogContext = createContext<BlogContextType>({posts:[], setposts:()=>{} , savedposts:[], savedsetposts:()=>{}})
const Router =() => {
  const [posts, setposts] = useState<Post[]>([]); //TODO: setposts => setPosts
  const [savedposts, savedsetposts] = useState<Post[]>([]);
  console.log(BlogContext);

  const router = createBrowserRouter(
    //TODO: that would be nice if you move this array to routeList.ts file
    [
      {
        path: "/",
        element: <Layout />,
        errorElement: <NotFount />,
        children: [
          {
            path: "/",
            element: <Posts />,
          },
          {
            path: "/newpost",
            element: <NewPost />,
          },
          {
            path: "/saved",
            element: <Saved />,
          },
        ],
      },
    ]
  );
  return (
    <BlogContext.Provider
      value={{ posts, setposts, savedposts, savedsetposts }}
    >
      <RouterProvider router={router} />
    </BlogContext.Provider>
  );
}

export default Router
