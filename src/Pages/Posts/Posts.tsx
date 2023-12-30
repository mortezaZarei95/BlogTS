import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BlogContext } from '../../Router/Router';
import Post from '../../components/page/post/Post';
import Pagination from '../../components/common/pagination/Pagination';
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const [totalPost, setTotalPost] = useState<number>(0);
  const { posts, setPosts } = useContext(BlogContext);
  const api = 'https://jsonplaceholder.typicode.com/posts';
  // ? that would be fantastic if you create an services.ts file and call api in functions.

  useEffect(() => {
    getPost(1);
  }, []);

  const getPost = async (activePage: number) => {
    await axios
      .get(api, {
        params: {
          _page: activePage,
          _limit: 3,
        },
      })
      .then((res) => {
        setPosts(res.data);
        setTotalPost(100);
      });
  };

  const handlePage = (page: number) => {
    getPost(page);
  };

  return (
    <div className="mt-4 flex flex-col gap-2 items-center">
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
      <Pagination
        totalPage={Math.floor(totalPost / 3 + 1)}
        changePage={handlePage}
      />
    </div>
  );
};

export default Posts;
