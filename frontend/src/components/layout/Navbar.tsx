import Container from "../ui/Container";
import Logo from "../ui/Logo";
import NavLinks from "./NavLinks";
import ProfileMenu from "./ProfileMenu";

export default function Navbar(){
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
            <Container>
                <div className="h-20 flex items-center justify-between">
                    <div className="flex items-center gap-10">
                        <Logo />
                        <NavLinks />
                    </div>
                    <ProfileMenu />
                </div>
            </Container>
        </header>
    )
}
