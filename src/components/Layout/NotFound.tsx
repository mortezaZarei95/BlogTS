
import { Outlet } from "react-router";
const NotFount = () => {
  //TODO: design beautiful NotFoundPage
  //TODO: NotFoundPage doesn't need outlet
  return (
    // TODO: use <></> instead of <div>, if you don't need to any attributes list className
    <div>
      <div>Not Found!</div>
      <Outlet />
    </div>
  );
}

export default NotFount;