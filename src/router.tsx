import { LoadingFallback } from '@/components/common'
import { MainLayout, PatientsLayout } from '@/layouts'
import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Lazy load pages
const HomePage = lazy(() => import('@/pages/HomePage'))
const PatientListPage = lazy(() => import('@/pages/PatientListPage'))
const PatientDetailPage = lazy(() => import('@/pages/PatientDetailPage'))
const LatestNotesPage = lazy(() => import('@/pages/LatestNotesPage'))

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'patients',
        element: <PatientsLayout />,
        children: [
          {
            index: true,
            element: <PatientListPage />,
          },
          {
            path: ':id',
            element: <PatientDetailPage />,
          },
        ],
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
