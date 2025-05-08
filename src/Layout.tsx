import { Navigation } from '@/components/common'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <Navigation />
      <div className="container mx-auto max-w-5xl p-4 sm:p-6">
        <Outlet />
      </div>
    </div>
  )
}
