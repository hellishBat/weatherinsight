// Search
import { SetStateAction, useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { fetchCitiesOptions } from '@/api/fetchers'
import type { SearchProps } from '@/types'

export const Search = ({ onSearchChange }: SearchProps) => {
  const [search, setSearch] = useState(null)

  const handleOnChange = (searchData: SetStateAction<null>) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  return (
    <AsyncPaginate
      placeholder="Search for a city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={fetchCitiesOptions}
      closeMenuOnScroll={true}
      unstyled
      classNames={{
        container: () => 'w-full',
        control: (state) =>
          `rounded-md border-none py-2 pl-9 pr-3 shadow-inner focus:transition-all ${
            state.isFocused
              ? 'pl-3 bg-slate-300 dark:bg-slate-800'
              : 'bg-slate-300/70 dark:bg-slate-800/80'
          }`,
        placeholder: () => 'text-gray-400 dark:text-gray-500',
        input: () => 'peer cursor-text',
        menu: () =>
          'py-2 rounded-md backdrop-blur-2xl bg-slate-200/70 shadow-md dark:bg-gray-800/70 translate-y-2',
        option: (state) => `py-2 px-4 ${state.isFocused && 'bg-slate-900/10 dark:bg-white/10'}`,
      }}
    />
  )
}
