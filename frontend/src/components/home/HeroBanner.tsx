import Container from "@/components/ui/Container"

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
              Discover trending movies,
              binge-worthy series, and
              immersive cinematic experiences
              powered by modern streaming
              architecture.
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
              className="
                px-8
                py-4
                rounded-2xl
                bg-red-600
                hover:bg-red-500
                transition-all
                duration-300
                text-white
                font-semibold
                shadow-lg
                shadow-red-500/20
                hover:scale-105
              "
            >
              Start Watching
            </button>

            <button
              className="
                px-8
                py-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                hover:bg-white/10
                transition-all
                duration-300
                text-white
              "
            >
              Explore Library
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
