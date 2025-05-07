import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className="h-screen w-52 border-r border-r-zinc-200 bg-white">
      <div className="space-y-4 p-8">
        <NavLink to="/" className="flex flex-col text-lg leading-5 font-semibold">
          <span className="font-light">Track</span>
          <span className="font-black">Patients</span>
        </NavLink>

        <nav className="flex flex-col gap-4 border-t pt-6 text-sm text-gray-500">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-black' : '')}>
            Home
          </NavLink>
          <NavLink to="/patients" className={({ isActive }) => (isActive ? 'text-black' : '')}>
            Patients
          </NavLink>
          <NavLink to="/notes" className={({ isActive }) => (isActive ? 'text-black' : '')}>
            Last Notes
          </NavLink>
        </nav>
      </div>
    </div>
  )
}
