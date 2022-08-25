import React from 'react'

const Home = React.lazy(() => import('./pages/home/Home'))
const Page404 = React.lazy(() => import('./pages/page404/Page404'))

const routes = [
    {path: '/', name: 'Home', element: Home},
    {path: '/404', name: '404', element: Page404},
]

export default routes