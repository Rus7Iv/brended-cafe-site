import { createBrowserRouter } from 'react-router-dom'

import HistoryPage from '@/pages/HistoryPage'
import HomePage from '@/pages/HomePage'

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/history',
    element: <HistoryPage />,
  },
]

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter(routes)
