import Image from "next/image";
import Link from "next/link";
import { Star, ArrowLineUpRight, ShareFat, Circle, CheckCircle, ArrowBendUpRight, PlayCircle } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ConferencePage({ params }: { params: { id: string } }) {
    return (
        <div className="text-pure-white font-body">
            <svg width="0" height="0" className="absolute">
                <defs>
                    <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff7d00" />
                        <stop offset="100%" stopColor="#a44ea6" />
                    </linearGradient>
                </defs>
            </svg>
            <Navbar />

            <main className="max-w-container mx-auto px-8 pt-38 pb-32">
                {/* Header Section */}
                <header className="mb-16">
                    <h1 className="font-heading font-bold text-[42px] md:text-[68px] lg:text-[54px] leading-none uppercase mb-12 max-w-6xl">
                        L'IA au service des personnes en situation de handicap
                    </h1>
                    <div className="flex flex-col gap-3">
                        <p className="font-heading font-semibold text-[24px] md:text-[28px] text-pure-white/90">
                            Vendredi 12 septembre à 17h30
                        </p>
                        <p className="font-heading font-semibold text-[24px] md:text-[28px] text-pure-white/90">
                            À L'Esplanade
                        </p>
                    </div>
                </header>

                <div className="flex flex-col xl:flex-row gap-16 xl:gap-24 items-start">
                    {/* Left: Speaker Section */}
                    <div className="grow flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                        <div className="relative w-full lg:w-[390px] h-[560px] rounded-[40px] overflow-hidden shrink-0">
                            <Image
                                src="/images/gregory.png"
                                alt="Grégory Nédélec"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-5 max-w-2xl">
                            <h2 className="font-semibold text-[32px] md:text-[36px]">
                                Grégory Nédélec
                            </h2>
                            <p className="text-[18px] md:text-[18px] text-beige">
                                Après avoir travaillé sur des problématiques liées au CRM en agence de communication, dans la formation en école de communication je me suis dirigé vers le digital. À travers mes expériences en tant que chef de projet web, j’ai pu avoir une vision large du métier et du secteur. Dans ce contexte, j’ai pu travailler sur des lancements de start-up. En parallèle, j’ai exercé et j’exerce encore le métier d’intervenant en école de communication. Je suis également formateur & consultant en stratégie digitale.
                            </p>

                            <div className="flex items-center gap-5 mt-4">
                                <button className="cursor-pointer" title="Ajouter aux favoris">
                                    <Star weight="fill" className="text-pure-white w-9 h-9" />
                                </button>
                                <button className="cursor-pointer" title="Partager">
                                    <ShareFat className="w-10 h-10 -mb-1" style={{ fill: 'url(#brand-gradient)' }} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Reservation Panel */}
                    <aside className="w-full xl:w-[420px] bg-card-bg shadow-[0_4px_31px_-2px_rgba(0,0,0,0.38)] rounded-[40px] py-10 px-12 shrink-0">
                        <div className="flex flex-col gap-9">
                            {/* Booking Section */}
                            <div>
                                <h3 className="font-semibold text-[28px] md:text-[26px] mb-7">
                                    Réserver la conférence
                                </h3>
                                <div className="flex flex-col gap-8">
                                    <label className="flex items-center gap-6 group cursor-pointer">
                                        <div className="w-7 h-7 rounded-full border-gradient-brand flex items-center justify-center p-1.5 transition-all">
                                            <div className="w-3 h-3 rounded-full bg-gradient-brand shadow-[0_0_15px_rgba(164,78,166,0.4)]" />
                                        </div>
                                        <span className="text-[19px] md:text-[19px] font-medium tracking-tight text-white">Pass Early</span>
                                    </label>
                                    <label className="flex items-center gap-6 group cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                                        <div className="w-7 h-7 rounded-full border-gradient-brand flex items-center justify-center p-1.5 transition-all opacity-40 group-hover:opacity-100" />
                                        <span className="text-[19px] md:text-[19px] font-medium tracking-tight">Pass Classique</span>
                                    </label>
                                </div>
                            </div>

                            {/* Live Section */}
                            <div className="pt-10 border-t border-white/10">
                                <h3 className="font-semibold text-[28px] md:text-[26px] mb-7 leading-tight">
                                    Voir le live
                                </h3>
                                <label className="flex items-center gap-6 group cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                                    <div className="w-7 h-7 rounded-full border-gradient-brand flex items-center justify-center p-1.5 transition-all opacity-40 group-hover:opacity-100" />
                                    <span className="text-[19px] md:text-[19px] font-medium tracking-tight">Accéder au live</span>
                                </label>
                            </div>

                            <Link
                                href="/"
                                className="inline-flex items-center justify-center px-8 py-2.5 text-xl bg-pure-orange text-pure-white font-body font-semibold rounded-base hover:opacity-90 transition-opacity duration-200"
                            >
                                Acheter
                            </Link>
                        </div>
                    </aside>
                </div>

                <h2 className="text-center mt-32 mb-12 flex flex-col items-center px-4">
                    <span className="font-heading font-bold text-[32px] sm:text-4xl md:text-5xl lg:text-[60px] uppercase bg-gradient-brand text-transparent bg-clip-text md:mb-1 drop-shadow-sm">
                        Écouter
                    </span>
                    <span className="text-pure-white font-heading font-bold text-[32px] sm:text-4xl md:text-5xl lg:text-[60px] leading-none uppercase mb-2 md:mb-4 drop-shadow-md">
                        le podcast
                    </span>
                </h2>

                <section className="flex flex-col lg:flex-row gap-10 items-start">
                    {/* Left: Podcast Card */}
                    <div className="w-full lg:w-[420px] shrink-0">
                        <div className="bg-pure-white rounded-[40px] overflow-hidden shadow-2xl group cursor-pointer">
                            <div className="relative aspect-4/3">
                                <Image
                                    src="/images/conference-1.png"
                                    alt="Podcast"
                                    fill
                                    className="object-cover object-top"
                                />
                                <div className="absolute bottom-6 right-6">
                                    <div className="bg-white/20 backdrop-blur-md rounded-full p-2.5">
                                        <Star weight="fill" className="text-pure-white w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 pb-10">
                                <p className="font-semibold text-black text-2xl mb-2">Podcast</p>
                                <p className="text-black/60 font-medium">20/04/2026 à 15:30 - 20m40s</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Episode List */}
                    <div className="grow flex flex-col gap-6 w-full">
                        {[1, 2, 3].map((_, index) => (
                            <div key={index} className="bg-card-bg rounded-[32px] p-8 pr-10 flex items-center justify-between group hover:bg-white/5 transition-colors cursor-pointer border border-white/5 shadow-lg">
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-semibold text-2xl text-pure-white">
                                        Nom de l'épisode du podcast
                                    </h3>
                                    <p className="text-alt-grey font-medium text-lg">
                                        20/04/2026 à 15:30 - 20m40s
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button title="Partager">
                                        <ShareFat className="w-8 h-8 -mb-1" style={{ fill: 'url(#brand-gradient)' }} />
                                    </button>
                                    <button title="Ajouter aux favoris">
                                        <Star weight="fill" className="text-pure-white w-8 h-8" />
                                    </button>
                                    <button title="Écouter" className="relative hover:scale-110 transition-transform">
                                        <div className="absolute inset-1 bg-gradient-brand rounded-full" />
                                        <PlayCircle weight="fill" className="text-pure-white w-12 h-12 relative z-10" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Integrated map */}
                <h2 className="text-center mt-32 mb-12 flex flex-col items-center px-4">
                    <span className="font-heading font-bold text-[32px] sm:text-4xl md:text-5xl lg:text-[60px] uppercase bg-gradient-brand text-transparent bg-clip-text md:mb-1 drop-shadow-sm">
                        Venir
                    </span>
                    <span className="text-pure-white font-heading font-bold text-[32px] sm:text-4xl md:text-5xl lg:text-[60px] leading-none uppercase mb-2 md:mb-4 drop-shadow-md">
                        à la conférence
                    </span>
                </h2>

                <section className="w-full h-[600px] rounded-[40px] overflow-hidden shadow-2xl border border-white/10 mb-20">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.5332617757303!2d-0.5562767232!3d47.46950947117769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480878e90696e57f%3A0xe5f9b407425178bd!2sRue%20de%20l'Esvi%C3%A8re%2C%2049100%20Angers!5e0!3m2!1sfr!2sfr!4v1712565600000!5m2!1sfr!2sfr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale-[0.2] contrast-[1.1]"
                    />
                </section>

                <h2 className="text-center mt-32 mb-12 flex flex-col items-center px-4">
                    <span className="font-heading font-bold text-[32px] sm:text-4xl md:text-5xl lg:text-[60px] uppercase bg-gradient-brand text-transparent bg-clip-text md:mb-1 drop-shadow-sm">
                        Recommandé
                    </span>
                    <span className="text-pure-white font-heading font-bold text-[32px] sm:text-4xl md:text-5xl lg:text-[60px] leading-none uppercase mb-2 md:mb-4 drop-shadow-md">
                        pour toi
                    </span>
                </h2>

                <section className="flex flex-col lg:flex-row gap-8 items-stretch mb-14">
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
                </section>
            </main>

            <Footer />
        </div>
    );
}
