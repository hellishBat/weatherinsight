// SearchForm
import { LocationButton } from '../LocationButton'
import { styles } from '@/styles'
import { SearchIcon } from '@/assets'
import type { SearchFormProps } from '@/types'

export const SearchForm = ({ submitHandler, clickHandler, error }: SearchFormProps) => {
  return (
    <div className={`mb-12 flex justify-center gap-4 p-6 md:p-8 ${styles.card}`}>
      <form
        className={'group relative flex w-full max-w-lg'}
        onSubmit={submitHandler}
        autoComplete="off"
      >
        <input
          className={`peer w-full rounded-md border-none bg-slate-300/70 py-2 pl-9 pr-3 shadow-inner focus:bg-slate-300 focus:pl-3 focus:transition-all dark:bg-gray-900/50 dark:focus:bg-gray-900/80
           ${
             error
               ? 'bg-red-500/10 outline outline-4 outline-red-500/60 placeholder:text-red-500/60 dark:bg-red-900/10'
               : ''
           }`}
          name="form"
          type="text"
          placeholder={error ? 'Error! Please check spelling.' : 'Search for a location'}
        />
        <SearchIcon
          className={`pointer-events-none absolute inset-3 peer-focus:-translate-x-3 peer-focus:scale-0 peer-focus:opacity-0 peer-focus:transition
          ${error ? 'text-red-500/60' : ''}
          `}
        />
      </form>
      <LocationButton clickHandler={clickHandler} />
    </div>
  )
}
