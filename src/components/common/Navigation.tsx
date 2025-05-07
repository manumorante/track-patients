import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className="mb-8 space-y-4">
      <nav className="flex gap-6 text-sm text-gray-500">
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
  )
}
