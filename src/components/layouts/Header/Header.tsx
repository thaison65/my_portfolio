import React from 'react';
import IconList from './IconList';
import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';

import './Header.scss';

const HeaderLayout: React.FC = () => (
  <header id="header">
    <Logo />

    <section id="header-action">
      <Menu />
      <Search />
      <IconList />
    </section>
  </header>
);

export default HeaderLayout;
