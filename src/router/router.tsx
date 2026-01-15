import { createBrowserRouter } from 'react-router-dom'

import HistoryPage from '@/pages/HistoryPage'
import HomePage from '@/pages/HomePage'
import MenuPage from '@/pages/MenuPage'
import NotFoundPage from '@/pages/NotFoundPage'

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/history',
    element: <HistoryPage />,
  },
  {
    path: '/menu',
    element: <MenuPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter(routes)
