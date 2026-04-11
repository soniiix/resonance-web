import Image from "next/image";
import Link from "next/link";

export default function LatestNewsSection() {
    return (
        <section className="px-8">
            <div className="max-w-container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="font-heading font-bold text-[32px] sm:text-4xl md:text-5xl lg:text-[60px] uppercase text-pure-white drop-shadow-md">
                        DERNIÈRES ACTUS
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-stretch mb-14">
                    {/* Left: Featured Replay */}
                    <div className="w-full lg:w-1/2 bg-card-bg rounded-[40px] overflow-hidden flex flex-col shadow-2xl">
                        <div className="relative grow min-h-[310px]">
                            <Image
                                src="/images/article-3.png"
                                alt="Conference Replay"
                                fill
                                className="object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex items-end px-10 pb-8">
                                <h3 className="text-2xl font-semibold text-pure-white leading-tight">
                                    Quand la technologie envahit l'espace : comment freiner le nouveau colonialisme spatial ?
                                </h3>
                            </div>
                        </div>
                        <div className="px-10 pb-6 pt-5 flex flex-col items-center grow">
                            <div className="w-full space-y-2 mb-4">
                                <p className="text-xl font-medium text-pure-white/90">
                                    Intervenant : Grégory Nedelec
                                </p>
                                <p className="text-lg text-alt-grey">
                                    20/04/2026 à 15:30 - 20m40s
                                </p>
                            </div>
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center px-18 py-2.5 text-xl bg-pure-orange text-pure-white font-body font-semibold rounded-base hover:opacity-90 transition-opacity duration-200"
                            >
                                Visionner
                            </Link>
                        </div>
                    </div>

                    {/* Right: Secondary Replays */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        {[1, 2].map((_, index) => (
                            <Link key={index} href="/" className="bg-card-bg rounded-[40px] p-5 pr-10 flex items-center gap-8 group hover:bg-white/5 transition-all shadow-xl">
                                <div className="relative w-48 h-32 md:w-64 md:h-48 rounded-3xl overflow-hidden shrink-0">
                                    <Image
                                        src={`/images/live-${index + 1}.png`}
                                        alt="Replay"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform"
                                    />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h4 className="text-xl md:text-2xl font-semibold text-pure-white leading-tight">
                                        Replay : Titre de la conférence
                                    </h4>
                                    <div className="space-y-2">
                                        <p className="text-lg text-pure-white/80">
                                            Intervenant : Grégory Nedelec
                                        </p>
                                        <p className="text-base text-alt-grey">
                                            20/04/2026 à 15:30 - 20m40s
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
