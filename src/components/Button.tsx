import { type ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex cursor-pointer items-center justify-center rounded-md whitespace-nowrap',
        'text-sm font-medium transition-colors',
        'focus-visible:ring-ring focus-visible:ring-1 focus-visible:outline-none',
        'disabled:pointer-events-none disabled:opacity-50',
        'h-9 px-4 py-2',
        {
          'bg-zinc-900 text-white shadow hover:bg-zinc-900/90': variant === 'primary',
          'bg-zinc-100 text-black shadow-sm hover:bg-zinc-100/80': variant === 'secondary',
        },
        className,
      )}
      {...props}
    />
  )
}
