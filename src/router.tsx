import { Loading } from '@/components/common'
import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'

const HomePage = lazy(() => import('@/pages/HomePage'))
const PatientListPage = lazy(() => import('@/pages/PatientListPage'))
const PatientDetailPage = lazy(() => import('@/pages/PatientDetailPage'))

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
    ],
  },
])

export default function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
