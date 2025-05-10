import cx from 'clsx'
import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={cx('rounded-lg border border-zinc-200 bg-white shadow-xs', className)}>
      {children}
    </div>
  )
}
