export default function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer select-none">
      <div className="w-3 h-8 rounded-full bg-gradient-to-b from-red-500 to-red-700 shadow-lg shadow-red-500/40" />
      <h1 className="text-white text-2xl mid:text-3xl font-black tracking-wide">
        Cine<span className="text-red-500">Mind</span>
      </h1>
    </div>
  )
}
