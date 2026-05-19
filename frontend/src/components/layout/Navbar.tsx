import Container from "@/components/ui/Container"
import Logo from "@/components/ui/Logo"

import NavLinks from "./NavLinks"
import ProfileMenu from "./ProfileMenu"

export default function Navbar(){
    return(
        <nav aria-label="Main Navigation">
            <Container>
                <div className="flex items-center justify-between flex-wrap h-16 md:h-20 gap-4 md:gap-10">
                    <Logo />
                    <div className="hidden md:flex">
                        <NavLinks />
                    </div>
                </div>
                <ProfileMenu />
            </Container>
        </nav>
    )
}
