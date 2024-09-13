import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../../../types/nav';

interface MenuProps {
  active?: MenuItem;
}

const menuItems = [
  { to: '/', label: 'Home', key: MenuItem.Home },
  { to: '/blog', label: 'Blog', key: MenuItem.Blog },
];

const Menu: React.FC<MenuProps> = ({ active = MenuItem.Home }) => {
  return (
    <nav className="nav-menu">
      {menuItems.map(({ to, label, key }) => (
        <Link key={key} to={to} className={` ${active === key ? 'active' : ''}`}>
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
