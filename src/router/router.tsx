import { createBrowserRouter } from 'react-router-dom'

import HistoryPage from '@/pages/HistoryPage'
import HomePage from '@/pages/HomePage'
import MenuPage from '@/pages/MenuPage'

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
]

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter(routes)
