'use client'

export default function Error({
    error,
    reset,
}:{
    error:Error
    reset:()=>void

}){
    return(
        <div
        className="
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        bg-black
        text-white
        gap-5"
        >
            <h1 className="text-4xl font-bold text-red-500">
                Something went wrong
            </h1>
            <p className="text-zinc-400">
                {error.message}
            </p>
            <button
            onClick={()=>reset()}
            className="
            px-5
            py-2
            bg-red-600
            rounded-lg"
            >
                Try Again
            </button>
        </div>
    )
}
