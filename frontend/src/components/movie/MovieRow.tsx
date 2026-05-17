import Container from '@/components/ui/Container'

import { typography, spacing } from '@/styles'
import SkeletonCard from '../loaders/SkeletonCard'

type MovieRowProps = {
  title: string
}

const movies = [1, 2, 3, 4, 5, 6]

export default function MovieRow({ title }: MovieRowProps) {
  return (
    <section
      className={`
        ${spacing.pageY}`}
    >
      <Container>
        <div
          className={`
            ${spacing.sectionGap}`}
        >
          <h2
            className={`
              ${typography.sectionTitle}
              text-white`}
          >
            {title}
          </h2>

          <div
            className="
              flex
              gap-5
              overflow-x-auto
              scrollbar-hide
              pb-4
            "
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
