// import { ReactNode, useEffect, useRef, useState } from 'react';
// import Header from './Header';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
const NotFound = () => {
  const navigate = useNavigate();
  navigate('/');
  // const [counter, setCounter] = useState<number>(0);
  // useEffect(() => {
  //   return () => {
  //     setTimeout(() => {
  //       navigate('/');
  //     }, 1000);
  //     navigate('/');
  //   };
  // }, [counter]);

  // const handleCounter = () => {
  //   // if (counter < 5) {
  //   //   setCounter(counter + 1);
  //   //   console.log('inif');
  //   // } else {
  //   // }
  //   // navigate('/');
  // };
  return (
    <>
      {/* <Header /> */}
      <div className=" text-center mt-24">
        <p className="text-[80px]">Page Not Found</p>
        <p className="text-[140px]">404</p>
        <NavLink to="/">
          <p className="text-sky-400">go to Home Page</p>
        </NavLink>
      </div>
    </>
  );
};

export default NotFound;
