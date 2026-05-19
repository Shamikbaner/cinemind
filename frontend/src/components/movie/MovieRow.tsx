import Container from '@/components/ui/Container'
import SkeletonCard from '../loaders/SkeletonCard'

import { spacing, typography } from '@/styles'
interface MovieRowProps {
  title: string
}

export default function MovieRow({ title }: MovieRowProps) {
  return (
    <section className={spacing.sectionGap}>
      <Container>
        <div className="space-y-6">
          <h2 className={`${typography.sectionTitle} text-white`}>{title}</h2>
          <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                tabIndex={0}
                role="button"
                aria-label={`Movie card ${index + 1}`}
              >
                <SkeletonCard />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
