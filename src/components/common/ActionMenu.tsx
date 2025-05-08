import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'

export type Action = {
  label: string
  icon?: React.ComponentType<{ className?: string }>
  onClick: () => void
  className?: string
}

interface Props {
  actions: Action[]
  className?: string
}

export default function ActionMenu({ actions, className = '' }: Props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton
        className={`inline-flex items-center justify-center rounded-lg p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ${className}`}>
        <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="ring-opacity-5 absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white p-1 shadow-lg ring-1 ring-zinc-200 focus:outline-none">
        <div className="py-1">
          {actions.map((action, index) => (
            <MenuItem key={index}>
              <button
                onClick={action.onClick}
                className={`group flex w-full items-center rounded-lg px-3 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 ${action.className}`}>
                {action.icon && (
                  <action.icon
                    className="mr-2 h-4 w-4 text-gray-500 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                )}
                {action.label}
              </button>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  )
}
