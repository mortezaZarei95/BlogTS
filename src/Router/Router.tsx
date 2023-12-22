import React, { createContext, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import NotFount from "../Pages/Layout/NotFound";
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

  const [posts, setposts] = useState<Post[]>([])
  const [savedposts, savedsetposts] = useState<Post[]>([])
  console.log(BlogContext);
  
  const router = createBrowserRouter([
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
            element: <NewPost />
          },
          {
            path: "/saved",
            element: <Saved />
         },
        ]
      }, 
  ]);
  return (
        <BlogContext.Provider value={{posts , setposts , savedposts , savedsetposts}}>
        <RouterProvider router={router} />
        </BlogContext.Provider>  
  )
}

export default Router
