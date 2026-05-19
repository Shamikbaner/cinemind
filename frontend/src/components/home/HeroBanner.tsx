import Container from "@/components/ui/Container"
import Fadeln from "../shared/Fadeln"

import {
  typography,
  spacing,
} from "@/styles"

export default function HeroBanner() {
  return (
    <section
      className="
        relative
        min-h-[90vh]
        flex
        items-center
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-red-900/20
          via-transparent
          to-orange-500/10
        "
      />

      {/* Radial Light */}
      <div
        className="
          absolute
          top-[-200px]
          right-[-100px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-red-500/10
          blur-3xl
        "
      />

      <Container>
        <Fadeln>
          <div
            className={`
            relative
            z-10
            max-w-3xl
            ${spacing.sectionGap}
          `}
          >
            <div>
              <p
                className="
                text-red-400
                uppercase
                tracking-[0.3em]
                text-sm
                mb-4
              "
              >
                Premium Streaming Experience
              </p>

              <h1
                className={`
                ${typography.display}
                text-white
                leading-[1.1]
              `}
              >
                Stream Smarter
                <br />
                With CineMind
              </h1>

              <p
                className={`
                ${typography.body}
                text-zinc-400
                mt-6
                max-w-2xl
              `}
              >
                Discover trending movies, binge-worthy series, and immersive
                cinematic experiences powered by modern streaming architecture.
              </p>
            </div>

            <div
              className="
              flex
              flex-wrap
              gap-4
            "
            >
              <button
                aria-label="Start Watching Movies"
              
              >
                Start Watching
              </button>

              <button aria-label="Explore Movie Library"


              >
                Explore Library
              </button>
            </div>
          </div>
        </Fadeln>
      </Container>
    </section>
  )
}
