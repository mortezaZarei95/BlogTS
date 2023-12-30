import Layout from '../components/Layout/Layout';
import NotFound from '../components/Layout/NotFound';
import Posts from '../Pages/Posts/Posts';
import NewPost from '../Pages/New Post/NewPost';
import Saved from '../Pages/Saved/Saved';

interface RouteList {
  path: string;
  element?: any;
  errorElement?: any;
  children?: RouteList[];
}

export const routelist: RouteList[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Posts />,
      },
      {
        path: '/newpost',
        element: <NewPost />,
      },
      {
        path: '/saved',
        element: <Saved />,
      },
    ],
  },
];
