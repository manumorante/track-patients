import { LoadingFallback } from '@/components/common'
import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'

// Lazy load pages
const HomePage = lazy(() => import('@/pages/HomePage'))
const PatientListPage = lazy(() => import('@/pages/PatientListPage'))
const PatientDetailPage = lazy(() => import('@/pages/PatientDetailPage'))
const LatestNotesPage = lazy(() => import('@/pages/LatestNotesPage'))

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'patients',
        element: <PatientListPage />,
      },
      {
        path: 'patients/:id',
        element: <PatientDetailPage />,
      },
      {
        path: 'notes',
        element: <LatestNotesPage />,
      },
    ],
  },
])

export default function AppRouter() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
