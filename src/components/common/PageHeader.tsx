import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { uiStore } from '@/stores/uiStore'

export default function PageHeader({ title }: { title: string }) {
  const toggleNav = uiStore((state) => state.toggleNav)
  const isNavOpen = uiStore((state) => state.isNavOpen)

  return (
    <div className="flex w-full items-center justify-between gap-1 pt-1 pb-4 sm:pb-8">
      <h1 className="text-lg font-light sm:text-xl">{title}</h1>
      <button
        onClick={toggleNav}
        className="rounded-md p-1.5 text-gray-500 hover:bg-zinc-100 sm:hidden sm:p-2">
        {isNavOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>
    </div>
  )
}
