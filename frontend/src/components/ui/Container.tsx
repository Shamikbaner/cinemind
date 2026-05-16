type ContainerProps={
    children:React.ReactNode
    className?:string
}

export default function Container({
    children,
    className="",
}:ContainerProps){
    return(
        <div
        className={`
            w-full
            max-w-[1600px]
            mx-auto
            px-4
            md:px-8
            lg:px-12
            ${className}`
        }
        >
            {children}
        </div>
    )
}
