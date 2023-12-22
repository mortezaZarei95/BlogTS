
import { useContext, useState } from "react"
import {Post as PostType} from "../Posts/Posts"
import { BlogContext } from "../../Router/Router"
interface Props {
  post : PostType
}
const Post = ({ post }: Props) => {
  //TODO: Post Components is repeated. in Posts and this component.

  const [isSaved, setIsSaved] = useState(true);
  const { savedposts, savedsetposts } = useContext(BlogContext);

  const handleSaving = (e: React.MouseEvent<HTMLButtonElement>): void => {
    let newsavedpost = savedposts.filter((item) => {
      return item.id !== post.id;
    });
    savedsetposts(newsavedpost);
  };
  return (
    <div
      className={`border-2 w-[34rem] h-52 flex flex-col justify-between ${
        isSaved ? "bg-orange-400" : "bg-gray-100"
      }`}
    >
      <p className="mt-4 px-2  text-sky-900 text-lg">{post.title}</p>
      <p className="pl-4  text-gray-700 font-thin">{post.body}</p>
      <div className="flex justify-between  px-6 mb-3">
        <span>Post Id: {post.id}</span>
        <button
          onClick={handleSaving}
          className={` border-2 rounded-l w-28 h-10 ${
            isSaved ? "bg-gray-100" : "bg-orange-400"
          }`}
        >
          {isSaved ? "unsave" : "save"}
        </button>
        <span>User Id: {post.userId}</span>
      </div>
    </div>
  );
};

export default Post;