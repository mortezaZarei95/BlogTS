import { NavLink } from "react-router-dom";


const Header = () => {
  const hundleNavlinkClass = (isActive:boolean) => {
    return ("px-8 py-2 border-2 hover:bg-sky-200 hover:border-sky-400 "+ (isActive ? "bg-sky-600 border-sky-800" : " border-black"))
  }
  return(
    <div className="mt-8 flex gap-4 justify-center">
      <NavLink to={"/"}  className={({isActive})=>hundleNavlinkClass(isActive)} > Posts </NavLink>   
      <NavLink to={"/newpost"}  className={({isActive})=>hundleNavlinkClass(isActive)} > New Post </NavLink> 
        <NavLink to={"/saved"}  className={({isActive})=>hundleNavlinkClass(isActive)} > Saved </NavLink>
    </div>
  )
}

export default Header;