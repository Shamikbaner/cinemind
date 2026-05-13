type InputProps = {
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full
        bg-zinc-800
        text-white
        px-4
        py-3
        rounded-md
        border
        border-zinc-700
        focus:outline-none
        focus:border-red-500
        "
    />
  )
}
