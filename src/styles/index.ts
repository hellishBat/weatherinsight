// Styles
const styles = {
  layout: 'bg-white text-gray-500 dark:bg-slate-800 dark:text-gray-400',
  button: {
    common: 'p-2 rounded-md border-none hover:transition-colors',
    filled:
      'bg-gradient-to-br from-slate-600 to-slate-700 text-white shadow md:hover:shadow-sm md:hover:from-slate-500 md:hover:to-slate-600',
    icon: 'md:hover:bg-slate-900/10 dark:md:hover:bg-white/10',
  },
  tabBtn: {
    common:
      'flex items-center gap-2 -mb-[3px] p-3 rounded-t-lg border-0 border-b-[3px] border-transparent text-2xl font-bold hover:transition-colors',
    active: 'border-slate-700 text-slate-700 dark:border-white dark:text-white',
    inactive: 'text-gray-500 md:hover:border-gray-400 md:hover:text-gray-400',
  },
  card: 'bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl shadow-md dark:from-slate-700 dark:to-slate-800',
  cardLabel: {
    normal: 'text-xl font-semibold text-gray-500 uppercase dark:text-gray-400',
    sm: 'text-xs font-semibold text-gray-500 uppercase tracking-wider dark:text-gray-400',
  },
}

export { styles }
