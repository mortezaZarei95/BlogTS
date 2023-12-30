import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { BlogContext } from "../../Router/Router";

import { Post } from "../Posts/Posts";
import { useNavigate } from "react-router";

const NewPost = () => {
  useEffect(() => {
    console.log("useEffect");
    // TODO: remove useless codes
  }, []);

  let navigate = useNavigate(); //TODO: 'navigate' is never reassigned. Use 'const' instead

  const { posts, setposts } = useContext(BlogContext); //TODO: setposts => setPosts . functions are camelCase
  const [titleCheck, setTitleCheck] = useState<boolean>(false);
  const [bodyCheck, setBodyCheck] = useState<boolean>(false);

  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const userIdeRef = useRef<HTMLSelectElement>(null);

  const createNewPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleRef.current!.value.length <= 5) {
      alert("title is not correct!");
    } else if (bodyRef.current!.value.length <= 20) {
      //TODO: check the validation in Input component andd create isValid method for the InputRef. here you should call titleRef.current.isValid()
      alert("body is not correct!");
    } else {
      const newId = posts.length + 1;
      const newPost: Post = {
        title: titleRef.current!.value,
        body: bodyRef.current!.value,
        id: newId,
        userId: Number(userIdeRef.current!.value),
      };
      // TODO: create SnackBar Component and for here show a message that 'post created successfully' by the SnackBar
      setposts([...posts, newPost]);
      alert("Post Created!");
      titleRef.current!.value = "";
      bodyRef.current!.value = "";
      navigate("/");
    }
  };

  const titleOnChange = () => {
    // TODO: body of "titleOnChange" and "bodyOnChange" functions are similar. you can make an 'Input' Component with 'maxValue' prop
    if (titleRef.current!.value.length <= 5) {
      setTitleCheck(true);
    } else {
      setTitleCheck(false);
    }
  };
  const bodyOnChange = () => {
    if (bodyRef.current!.value.length <= 20) {
      setBodyCheck(true);
    } else {
      setBodyCheck(false);
    }
  };

  return (
    <div className="w-[34rem] border-2 bg-gray-100 mx-auto mt-4 pb-2">
      <form className="flex flex-col mx-4 mt-2 gap-3" onSubmit={createNewPost}>
        <label>Title:</label>
        <input
          type="text"
          ref={titleRef}
          onChange={titleOnChange}
          className={`p-1 outline-0 border-[1px] border-solid ${
            titleCheck ? "!border-red-400" : "border-gray-600"
          } `}
        />
        <label>Body: </label>
        <textarea
          ref={bodyRef}
          onChange={bodyOnChange}
          className={`p-1 outline-0 border-[1px] border-solid ${
            bodyCheck ? "!border-red-400" : "border-gray-600"
          } `}
        />
        <label>User Id:</label>
        {/* 
        // TODO: remove user selection
        */}
        <select name="User Id" ref={userIdeRef}>
          <option value={1}>User 1</option>
          <option value={2}>User 2</option>
          <option value={3}>User 3</option>
        </select>
        <button
          className="border-2 mt-8 w-3/5 mx-auto py-2 bg-sky-400 rounded-lg hover:bg-sky-800"
          type="submit"
        >
          Create New Post
        </button>
      </form>
    </div>
  );
};

export default NewPost;
