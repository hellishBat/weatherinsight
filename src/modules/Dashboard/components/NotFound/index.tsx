// Not Found
import { ErrorIcon } from '@/assets'

export const NotFound = () => {
  return (
    <div className="flex items-center justify-center" role="status">
      <h2 className="with-icon gap-2 text-2xl font-bold">
        <ErrorIcon />
        <span>Unfortunately nothing was found, try entering the name of the city again.</span>
      </h2>
    </div>
  )
}
