import { Bars3Icon } from '@heroicons/react/24/outline'
import { uiStore } from '@/stores/uiStore'

export default function PageHeader({ title }: { title: string }) {
  const toggleNav = uiStore((state) => state.toggleNav)

  return (
    <div className="flex items-center gap-1 pt-1 pb-4 sm:pb-8">
      <button
        onClick={toggleNav}
        className="rounded-md p-1.5 text-gray-500 hover:bg-zinc-100 sm:hidden sm:p-2">
        <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <h1 className="text-lg font-light sm:text-xl">{title}</h1>
    </div>
  )
}
