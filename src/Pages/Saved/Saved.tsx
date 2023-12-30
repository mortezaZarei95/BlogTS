import { useContext } from "react"
import { BlogContext } from "../../Router/Router"

import Post from '../../components/page/post/Post';

const Saved = () => {
  const { savedPosts, savedSetPosts } = useContext(BlogContext);
  return (
    <div className="mt-4 flex flex-col gap-2 items-center">
      {savedPosts.map((post) => {
        return <Post post={post} key={post.id} isSavedPost={true} />;
      })}
    </div>
  );
};

export default Saved