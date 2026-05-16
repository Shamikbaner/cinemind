export default async function Loading() {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-black
        text-white
        text-2xl
        font-semibold
      "
    >
      Loading...
    </div>
  )
}
