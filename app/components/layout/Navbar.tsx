import Image from "next/image";
import Link from "next/link";

import { User } from "@phosphor-icons/react/dist/ssr";

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 px-8 py-6">
            <div className="max-w-container mx-auto flex items-center justify-between">
                {/* Left: Logo + Nav Links */}
                <div className="flex items-center gap-10">
                    <Link href="/" className="mt-1">
                        <Image
                            src="/images/resonance-logo.png"
                            alt="Résonance"
                            width={40}
                            height={40}
                        />
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/contenus"
                            className="relative group text-pure-white font-medium text-xl hover:text-light-orange transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-light-orange after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Nos contenus
                        </Link>
                        <Link
                            href="/conferencier"
                            className="relative group text-pure-white font-medium text-xl hover:text-light-orange transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-light-orange after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Conférencier
                        </Link>
                        <Link
                            href="/besoin-conference"
                            className="relative group text-pure-white font-medium text-xl hover:text-light-orange transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-light-orange after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Besoin d'une conférence
                        </Link>
                    </div>
                </div>

                {/* Right: About + User Icon */}
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        href="/a-propos"
                        className="relative group text-pure-white font-medium text-xl hover:text-light-orange transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-light-orange after:transition-all after:duration-300 hover:after:w-full"
                    >
                        À propos
                    </Link>
                    <div className="w-[2px] h-5 bg-white" />
                    <button
                        aria-label="Mon compte"
                        className="text-pure-white hover:text-light-orange hover:cursor-pointer transition-colors duration-200"
                    >
                        <User size={28} weight="regular" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
