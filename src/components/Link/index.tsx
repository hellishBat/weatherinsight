// Link
import type { LinkProps } from '@/types'

export const Link = ({ href, children }: LinkProps) => {
  return (
    <a className="font-semibold hover:underline hover:transition-all" href={href}>
      {children}
    </a>
  )
}
