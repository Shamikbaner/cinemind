import Container from "../ui/Container";

export default function Footer(){
    return(
        <footer className="border-t border-white/10 mt-20">
            <Container>
                <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-zinc-500 text-sm">
                        ©️ 2026 CineMind. All rigts reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-zinc-400">
                        <button className="hover:text-white transition">
                            Privacy
                        </button>
                        <button className="hover:text-white transition">
                            Support
                        </button>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
