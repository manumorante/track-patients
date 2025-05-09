import { uiStore } from '@/stores/uiStore'
import { ArrowLeftIcon, Bars3Icon, XMarkIcon, HomeIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  backTo?: string
}
export default function PageHeader({ title, backTo }: Props) {
  const toggleNav = uiStore((state) => state.toggleNav)
  const isNavOpen = uiStore((state) => state.isNavOpen)

  return (
    <div className="flex w-full items-center justify-between gap-1 pt-1 pb-4 sm:pb-8">
      <div className="flex items-center gap-3">
        {backTo ? (
          <Link to={backTo} className="button secondary icon">
            <ArrowLeftIcon className="h-4 w-4" />
          </Link>
        ) : (
          <Link to="/" className="button secondary icon">
            <HomeIcon className="h-4 w-4" />
          </Link>
        )}

        <h1 className="text-lg font-light sm:text-xl">{title}</h1>
      </div>
      <button
        onClick={toggleNav}
        className="rounded-md p-1.5 text-gray-500 hover:bg-zinc-100 sm:hidden sm:p-2">
        {isNavOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>
    </div>
  )
}
