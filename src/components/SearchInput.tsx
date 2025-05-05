import clsx from 'clsx'
import type { InputHTMLAttributes } from 'react'

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  value: string
  onChange: (value: string) => void
}

export default function SearchInput({ value, onChange, className, ...props }: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={clsx(
        'w-full rounded-lg border border-zinc-300 bg-white',
        'focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 focus:outline-none',
        'px-4 py-2',
        className,
      )}
      {...props}
    />
  )
}
