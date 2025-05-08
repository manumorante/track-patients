import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import type { ComponentType } from 'react'

type Action = {
  label: string
  icon?: ComponentType<{ className?: string }>
  onClick: () => void
}

type Props = {
  actions: Action[]
}

export default function ActionMenu({ actions }: Props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex items-center justify-center rounded-lg p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
        <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
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
                className="group flex w-full cursor-pointer items-center rounded-lg px-3 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900">
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
