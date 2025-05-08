import { NavLink } from 'react-router-dom'
import { UsersIcon, HomeIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import cx from 'clsx'
import { uiStore } from '@/stores/uiStore'

const navItems = [
  { to: '/', label: 'Home', icon: HomeIcon },
  { to: '/patients', label: 'Patients', icon: UsersIcon },
  { to: '/notes', label: 'Last Notes', icon: DocumentTextIcon },
]

const getNavLinkClass = (isActive: boolean) =>
  cx(
    'flex items-center gap-2 text-xs sm:text-sm rounded-md px-2 py-1 transition-colors',
    isActive ? 'text-black bg-zinc-100' : 'text-gray-500 hover:bg-zinc-100',
  )

export default function Navigation() {
  const isNavOpen = uiStore((state) => state.isNavOpen)
  const closeNav = uiStore((state) => state.closeNav)

  return (
    <>
      <div
        className={cx(
          'fixed inset-y-0 left-0 z-40 w-52 transform bg-white transition-transform duration-200 ease-in-out sm:relative sm:translate-x-0',
          isNavOpen ? 'translate-x-0' : '-translate-x-full',
        )}>
        <div className="space-y-4 p-4 sm:p-8">
          <NavLink to="/" className="flex flex-col text-base leading-5 font-semibold sm:text-lg">
            <span className="font-light">Track</span>
            <span className="font-black">Patients</span>
          </NavLink>

          <nav className="flex flex-col gap-2 border-t pt-6 text-sm">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => getNavLinkClass(isActive)}
                onClick={closeNav}>
                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isNavOpen && <div className="fixed inset-0 z-30 bg-black/20 sm:hidden" onClick={closeNav} />}
    </>
  )
}
