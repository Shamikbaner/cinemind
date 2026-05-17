export default function SkeletonCard() {
  return (
    <div className="min-w-[220px] h-[320px] rounded-2xl overflow-hidden relative bg-zinc-900 border border-white/10 ">
      <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
      <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2 " />
      <div className="h-4 w-32 rounded bg-zinc-700 animate-pulse" />
      <div className="h-3 w-20 rounded bg-zinc-800 animate-pulse" />
    </div>
  )
}
