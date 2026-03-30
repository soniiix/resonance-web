import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative w-full h-[866px] overflow-hidden">
            {/* Background image */}
            <Image
                src="/images/hero-background.png"
                alt="Conférence Résonance"
                fill
                priority
                className="object-cover object-center"
            />

            {/* Gradient overlay - Full width Purple */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to right, rgba(134, 19, 136, 0.9) 0%, rgba(134, 19, 136, 0.2) 100%)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-8">
                <div className="max-w-container mx-auto w-full">
                    <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-pure-white uppercase leading-tight">
                        <div className="-mb-4">DES CONFÉRENCES</div>
                        <div>QUI ONT DU SENS</div>
                    </h1>

                    <div className="flex flex-wrap items-center gap-5 mt-5">
                        <Link
                            href="/abonnement"
                            className="inline-flex items-center justify-center px-8 py-2.5 text-xl bg-pure-orange text-pure-white font-body font-semibold rounded-[15px] hover:bg-pure-orange/95 transition-colors duration-200"
                        >
                            S'abonner
                        </Link>
                        <Link
                            href="/besoin-conference"
                            className="inline-flex items-center justify-center px-8 py-2.5 text-xl bg-pure-white text-pure-orange font-body font-semibold rounded-[15px] hover:bg-cool-white transition-colors duration-200"
                        >
                            Besoin d'une conférence
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
