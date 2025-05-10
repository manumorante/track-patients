import { AlertDialog, Navigation } from '@/components/common'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <Navigation />
      <div className="container mx-auto p-4 sm:p-8">
        <Outlet />
      </div>
      <AlertDialog />
    </div>
  )
}
