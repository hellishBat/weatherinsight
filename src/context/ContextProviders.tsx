// ContextProviders
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from './ThemeContext'
import type { ChildrenProps } from '@/types'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

const ContextProviders = ({ children }: ChildrenProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  )
}

export default ContextProviders
