import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

type Props = {
  message: string
  icon?: boolean
}

export function Error({ message, icon = true }: Props) {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="flex items-center gap-3 text-zinc-500">
        {icon && <ExclamationTriangleIcon className="h-5 w-5 shrink-0" />}
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  )
}
