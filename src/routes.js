import React from 'react';

const Home = React.lazy(() => import('./pages/home/Home'));
const Main = React.lazy(() => import('./pages/main/Main'));
const Page404 = React.lazy(() => import('./pages/page404/Page404'));

const routes = [
  { path: '/', name: 'Home', element: Home },
  { path: '/questions/*', name: 'Questions', element: Main },
  { path: '/*', name: '404', element: Page404 },
];

export default routes;
