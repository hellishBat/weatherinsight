// Link
import { FC } from 'react'
import type { LinkTypes } from '@/types'

export const Link: FC<LinkTypes> = ({ href, children }) => {
  return (
    <a className="font-semibold hover:underline hover:transition-all" href={href}>
      {children}
    </a>
  )
}
