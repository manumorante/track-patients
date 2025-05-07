import { NavLink } from 'react-router-dom'
import { UsersIcon, HomeIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import cx from 'clsx'

const navItems = [
  { to: '/', label: 'Home', icon: HomeIcon },
  { to: '/patients', label: 'Patients', icon: UsersIcon },
  { to: '/notes', label: 'Last Notes', icon: DocumentTextIcon },
]

const getNavLinkClass = (isActive: boolean) =>
  cx('flex items-center gap-2 text-base', isActive ? 'text-black' : 'text-gray-500')

export default function Navigation() {
  return (
    <div className="h-screen w-52 border-r border-r-zinc-200 bg-white">
      <div className="space-y-4 p-8">
        <NavLink to="/" className="flex flex-col text-lg leading-5 font-semibold">
          <span className="font-light">Track</span>
          <span className="font-black">Patients</span>
        </NavLink>

        <nav className="flex flex-col gap-4 border-t pt-6 text-sm">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={({ isActive }) => getNavLinkClass(isActive)}>
              <Icon className="h-4 w-4" />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}
