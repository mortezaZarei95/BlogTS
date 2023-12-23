import { NavLink } from "react-router-dom";

const Header = () => {
  const handleNavLinkClass = (isActive: boolean) => {
    return (
      "px-8 py-2 border-2 hover:bg-sky-200 hover:border-sky-400 " +
      (isActive ? "bg-sky-600 border-sky-800" : " border-black")
    );
  };
  return (
    //TODO: 'NavLink' is used several times with same className and conditions. its better if it became a Component
    <div className="mt-8 flex gap-4 justify-center">
      <NavLink
        to={"/"}
        className={({ isActive }) => handleNavLinkClass(isActive)}
      >
        Posts
      </NavLink>
      <NavLink
        to={"/newpost"}
        className={({ isActive }) => handleNavLinkClass(isActive)}
      >
        New Post
      </NavLink>
      <NavLink
        to={"/saved"}
        className={({ isActive }) => handleNavLinkClass(isActive)}
      >
        Saved
      </NavLink>
    </div>
  );
};

export default Header;
