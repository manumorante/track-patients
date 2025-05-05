import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="container mx-auto max-w-3xl p-6">
      <Outlet />
    </div>
  )
}
