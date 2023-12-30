import { FormEvent, useContext, useRef } from 'react';
import { BlogContext } from '../../Router/Router';

import { Post } from '../Posts/Posts';
import { useNavigate } from 'react-router';
import Input from '../../components/common/input/Input';
import TextArea from '../../components/common/textArea/TextArea';
import { useSnackBar } from '../../components/hooks/useSnackBar/UseSnackBar';

const NewPost = () => {
  const { posts, setPosts } = useContext(BlogContext);

  const { openSnackBar } = useSnackBar();

  const textAreaBodyRef = useRef<HTMLTextAreaElement>(null);
  const inputTitleRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const createNewPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      inputTitleRef.current!.value.length <= 5 &&
      textAreaBodyRef.current!.value.length <= 20
    ) {
      openSnackBar('title and body are not correct');
    } else if (inputTitleRef.current!.value.length <= 5) {
      openSnackBar('title is not correct!');
    } else if (textAreaBodyRef.current!.value.length <= 20) {
      //TODO: check the validation in Input component andd create isValid method for the InputRef. here you should call titleRef.current.isValid()
      openSnackBar('body is not correct!');
    } else {
      const newId = posts.length + 1;
      const newPost: Post = {
        title: inputTitleRef.current!.value,
        body: textAreaBodyRef.current!.value,
        id: newId,
        userId: 1,
      };
      setPosts([...posts, newPost]);
      openSnackBar('Post Created Succesfully');
      inputTitleRef.current!.value = '';
      textAreaBodyRef.current!.value = '';
      navigate('/');
    }
  };

  return (
    <div className="w-[34rem] border-2 bg-gray-100 mx-auto mt-4 pb-2">
      <form className="flex flex-col mx-4 mt-2 gap-3" onSubmit={createNewPost}>
        <Input minValue={5} valueLabel="title" ref={inputTitleRef} />
        <TextArea minValue={20} valueLabel="body" ref={textAreaBodyRef} />

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
