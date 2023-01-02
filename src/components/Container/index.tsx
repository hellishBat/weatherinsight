// Container
import { FC } from 'react'
import { ChildrenTypes } from '@/types'

export const Container: FC<ChildrenTypes> = ({ children }) => {
  return <div className="container">{children}</div>
}
