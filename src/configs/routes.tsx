import React from 'react';
import { RouteObject, Outlet } from 'react-router-dom';
import { paths } from '../constant';
import AppLayout from '../components/layouts/AppLayout';

const HomePage = React.lazy(() => import('../pages/Home'));
const BlogPage = React.lazy(() => import('../pages/Blog'));

const extendedRoutes: RouteObject[] = [
  {
    index: true,
    path: paths.home,
    element: <HomePage />,
  },
  {
    path: paths.blog,
    element: <BlogPage />,
  },
];

const routes: RouteObject[] = [
  {
    path: paths.default,
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: [
      ...extendedRoutes,
      {
        path: '*',
        element: <div>404 page</div>,
      },
    ],
  },
];

export default routes;
