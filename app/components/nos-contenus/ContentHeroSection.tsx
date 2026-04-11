import Image from "next/image";
import Link from "next/link";

export default function ContentHeroSection() {
    return (
        <section className="relative w-full h-[570px] overflow-hidden">
            {/* Background image */}
            <Image
                src="/images/content.png"
                alt="Nos Contenus"
                fill
                priority
                className="object-cover object-center"
            />

            {/* Gradient overlay - Similar to homepage but maybe adjusted for this image */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(263deg, rgba(255, 125, 0, 0.17) 10%, rgba(221, 108, 61, 0.6) 30%, rgba(164, 78, 166, 0.85) 70%)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-8">
                <div className="max-w-container mx-auto w-full">
                    <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-pure-white uppercase leading-tight">
                        <div>NOS CONTENUS</div>
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 mt-5">
                        <Link
                            href="/abonnement"
                            className="inline-flex items-center justify-center px-8 py-2.5 text-xl bg-pure-orange text-pure-white font-body font-semibold rounded-base hover:bg-pure-orange/95 transition-colors duration-200"
                        >
                            S'abonner
                        </Link>
                        <Link
                            href="/besoin-conference"
                            className="inline-flex items-center justify-center px-8 py-2.5 text-xl bg-pure-white text-pure-orange font-body font-semibold rounded-base hover:bg-cool-white transition-colors duration-200"
                        >
                            Besoin d'une conférence
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
