import { NavLink as NavLinkRouter } from 'react-router-dom';

const NavLink = ({ url, title }: { url: string; title: string }) => {
  const handleNavLinkClass = (isActive: boolean) => {
    return (
      'px-8 py-2  rounded-full hover:bg-sky-200 hover:border-sky-400 ' +
      (isActive
        ? 'bg-sky-600 text-white font-bold shadow-inner	'
        : 'bg-white shadow-lg')
    );
  };

  return (
    <NavLinkRouter
      to={url}
      className={({ isActive }) => handleNavLinkClass(isActive)}
    >
      {title}
    </NavLinkRouter>
  );
};

export default NavLink;
