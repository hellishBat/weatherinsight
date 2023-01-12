// LocationButton
import { styles } from '@/styles'
import { LocationIcon } from '@/assets'
import type { LocationButtonProps } from '@/types'

export const LocationButton = ({ clickHandler }: LocationButtonProps) => {
  return (
    <button
      className={`${styles.button.filled} ${styles.button.common}`}
      onClick={clickHandler}
      type="button"
    >
      <LocationIcon className="text-[1.5em]" />
    </button>
  )
}
