// HighlightsCard
import { styles } from '@/styles'
import type { HighlightsProps } from '@/types'

export const HighlightsCard = ({ data }: HighlightsProps) => {
  return (
    <article className={`flex flex-col items-center justify-center p-8 md:p-4 ${styles.card}`}>
      <div className="flex gap-3 align-baseline">
        <figure className={`[&>*]:h-14 [&>*]:w-14 ${data?.color}`}>{data?.icon}</figure>
        <div>
          <h3 className={`${styles.cardLabel.sm}`}>{data?.label}</h3>
          <div className="flex items-baseline">
            <span className="text-3xl font-semibold">{data?.value}</span>
            <span>{data?.unit}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
