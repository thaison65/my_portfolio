import React from 'react';
import { BrowserRouter, useRoutes, RouteObject, Navigate } from 'react-router-dom';
import LoadingPage from '../../pages/Loading';
import { routes } from '../../configs';
import AppLayout from '../layouts/AppLayout';

export interface RouterProps {
  defaultRoute: string;
}

export function Routes(props: RouterProps) {
  const { defaultRoute } = props;
  const defaultRouteObject: RouteObject = {
    index: true,
    path: '/',
    element: <Navigate to={defaultRoute} />,
  };

  const elements = useRoutes([defaultRouteObject, ...routes]);

  return (
    <React.Suspense
      fallback={
        <AppLayout>
          <LoadingPage />
        </AppLayout>
      }
    >
      {elements}
    </React.Suspense>
  );
}

function Router(props: RouterProps) {
  return (
    <BrowserRouter>
      <Routes {...props} />
    </BrowserRouter>
  );
}

export default Router;
