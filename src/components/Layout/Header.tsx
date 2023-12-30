import NavLink from '../common/navLink/NavLink';

NavLink;

interface NavListType {
  title: string;
  url: string;
}

const Header = () => {
  const navList: NavListType[] = [
    {
      title: 'Posts',
      url: '/',
    },
    {
      title: 'New Post',
      url: '/newpost',
    },
    {
      title: 'Saved',
      url: '/saved',
    },
  ];
  return (
    <div className="pt-8 flex gap-4 justify-center">
      {navList.map((item) => {
        return <NavLink url={item.url} title={item.title} key={item.title} />;
      })}
    </div>
  );
};

export default Header;
