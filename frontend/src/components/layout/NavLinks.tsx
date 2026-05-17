

const links=[
    "Home",
    "Movies",
    "Series",
    "Trending",
]

export default function NavLinks(){
    return (
        <nav className="
        hidden md:flex items-center gap-6">
            {links.map((link)=>(
                <button key={link}
                className="
                text-sm
                text-zinc-300
                hover:text-white
                transition-all
                duration-300
                hover:scale-105">
                    {link}
                </button>
            ))}
        </nav>
    )
}
