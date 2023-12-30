import { Outlet } from "react-router";
import Header from "../../Commponent/Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
export default Layout;