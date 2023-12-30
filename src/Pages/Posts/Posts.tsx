import { useContext, useEffect } from "react";
import axios from "axios";
import { BlogContext } from "../../Router/Router";
import Post from "./Post";
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const { posts, setposts } = useContext(BlogContext);
  const api = "https://jsonplaceholder.typicode.com/posts?_page=0&_limit=15"; //TODO: send 'page' and 'limit' as axios parameters
  // ? that would be fantastic if you create an services.ts file and call api in functions.

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    if (posts.length === 0) {
      await axios(api).then((res) => {
        setposts(res.data);
      });
    }
  };

  return (
    <div className="mt-4 flex flex-col gap-2 items-center">
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
};

export default Posts;
