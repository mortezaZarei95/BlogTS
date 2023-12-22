import { Outlet } from "react-router";
import Header from "../../Commponent/Header/Header"; //TODO: "Commponent" is not correct. change it to component. name of folders should be camelCase

const Layout = () => {
  return (
    // TODO: use <></> instead of <div>, if you don't need to any attributes list className
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
export default Layout;