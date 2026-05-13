type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full
      bg-red-600
      hover:bg-red-700
      text-white
      py-3
      rounded-md
      font-semibold
      transition"
    >
      {children}
    </button>
  )
}
