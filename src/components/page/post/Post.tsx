import { Post as PostType } from '../../../Pages/Posts/Posts';
import { useContext, useState, useEffect } from 'react';
import { BlogContext } from '../../../Router/Router';

interface Props {
  post: PostType;
  isSavedPost?: boolean;
}

const Post = ({ post, isSavedPost = false }: Props) => {
  const [isSaved, setIsSaved] = useState(false);
  const { savedPosts, savedSetPosts } = useContext(BlogContext);

  useEffect(() => {
    if (isSavedPost) {
      setIsSaved(true);
    } else {
      savedPosts.includes(post) ? setIsSaved(true) : '';
    }
  }, [isSaved]);

  const handleSaving = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (!isSaved) {
      savedSetPosts([...savedPosts, post]);
    } else {
      let newSavedPost = savedPosts.filter((item) => {
        return item.id !== post.id;
      });
      savedSetPosts(newSavedPost);
    }
    setIsSaved(!isSaved);
  };

  return (
    <div
      className={`rounded-lg w-[34rem] h-52 flex flex-col justify-between shadow-xl ${
        isSaved ? 'bg-orange-400' : 'bg-white'
      }`}
    >
      <p className="mt-4 px-2  text-sky-900 text-lg">{post.title}</p>
      <p className="pl-4  text-gray-700 font-thin">{post.body}</p>
      <div className="flex justify-between  px-6 mb-3">
        <span>Post Id: {post.id}</span>
        <button
          onClick={handleSaving}
          className={`rounded-lg w-28 h-10 shadow-md ${
            isSaved ? 'bg-gray-100' : 'bg-orange-400'
          }`}
        >
          {isSaved ? 'unsave' : 'save'}
        </button>
        <span>User Id: {post.userId}</span>
      </div>
    </div>
  );
};

export default Post;
