import * as React from 'react';
import { HeaderLayout } from '../Header';
import { MainLayout } from '../Main';

import './AppLayout.scss';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div id="container">
      <HeaderLayout />
      <MainLayout>{children}</MainLayout>
    </div>
  );
};

export default AppLayout;
