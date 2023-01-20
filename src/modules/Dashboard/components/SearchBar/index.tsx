// SearchBar
import { styles } from '@/styles'
import { SearchIcon } from '@/assets'
import type { ChildrenProps } from '@/types'

export const SearchBar = ({ children }: ChildrenProps) => {
  return (
    <div className={`mb-12 flex justify-center p-6 md:p-8 ${styles.card}`}>
      <div className="relative flex w-full max-w-lg gap-4">
        <SearchIcon className="pointer-events-none absolute inset-3" />
        {children}
      </div>
    </div>
  )
}
