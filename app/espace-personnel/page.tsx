import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export default function EspacePersonnel() {
    return (
        <main className="min-h-screen bg-dark-purple flex flex-col items-center justify-center p-6 text-center">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[650px] h-[600px] bg-pure-orange/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center max-w-3xl animate-in fade-in zoom-in duration-700">
                {/* Logo */}
                <div className="mb-12">
                    <Image
                        src="/images/resonance-logo.png"
                        alt="Résonance Logo"
                        width={100}
                        height={100}
                        className="w-20 h-20"
                    />
                </div>

                {/* Title */}
                <h1 className="text-5xl font-black text-white mb-6 font-heading tracking-tight">
                    ESPACE <span className="text-pure-orange">PERSONNEL</span>
                </h1>

                {/* Text */}
                <p className="text-xl text-white/70 font-body mb-12 leading-relaxed">
                    Votre espace personnel est en cours de construction.<br />
                    Vous pourrez bientôt gérer votre profil, vos abonnements et vos contenus favoris.<br />
                    Restez connecté !
                </p>

                {/* CTA */}
                <Link
                    href="/"
                    className="flex items-center gap-3 bg-white text-dark-purple px-7 py-3 rounded-2xl font-semibold text-lg hover:bg-pure-orange hover:text-white transition-all duration-300"
                >
                    <ArrowLeft size={24} />
                    Retour à l&apos;accueil
                </Link>
            </div>
        </main>
    );
}
