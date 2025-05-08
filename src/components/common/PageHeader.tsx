import { Bars3Icon } from '@heroicons/react/24/outline'
import { uiStore } from '@/stores/uiStore'

export default function PageHeader({ title }: { title: string }) {
  const toggleNav = uiStore((state) => state.toggleNav)

  return (
    <div className="flex items-center gap-1 pb-4 sm:pb-8">
      <button
        onClick={toggleNav}
        className="rounded-md p-2 text-gray-500 hover:bg-zinc-100 sm:hidden">
        <Bars3Icon className="h-6 w-6" />
      </button>
      <h1 className="text-xl font-light">{title}</h1>
    </div>
  )
}
