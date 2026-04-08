import Image from "next/image";
import Link from "next/link";
import { Star, ArrowLineUpRight, ShareNetwork, Circle, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ConferencePage({ params }: { params: { id: string } }) {
    return (
        <div className="text-pure-white font-body">
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

                            <div className="flex items-center gap-8 mt-4">
                                <button className="hover:scale-110 transition-transform cursor-pointer">
                                    <Star weight="fill" className="text-pure-white w-10 h-10" />
                                </button>
                                <button className="hover:scale-110 transition-transform cursor-pointer">
                                    <ShareNetwork className="text-pure-orange w-10 h-10" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Reservation Panel */}
                    <aside className="w-full xl:w-[420px] bg-card-bg backdrop-blur-2xl rounded-[40px] py-10 px-12 shrink-0">
                        <div className="flex flex-col gap-9">
                            {/* Booking Section */}
                            <div>
                                <h3 className="font-semibold text-[28px] md:text-[26px] mb-7">
                                    Réserver la conférence
                                </h3>
                                <div className="flex flex-col gap-8">
                                    <label className="flex items-center gap-6 group cursor-pointer">
                                        <div className="w-7 h-7 rounded-full border-2 border-pure-orange flex items-center justify-center p-1.5 group-hover:bg-pure-orange/20 transition-all">
                                            <div className="w-3 h-3 rounded-full bg-pure-orange shadow-[0_0_15px_rgba(255,125,0,0.6)]" />
                                        </div>
                                        <span className="text-[19px] md:text-[19px] font-medium tracking-tight text-white">Pass Early</span>
                                    </label>
                                    <label className="flex items-center gap-6 group cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                                        <div className="w-7 h-7 rounded-full border-2 border-white/30 flex items-center justify-center p-1.5 group-hover:border-white/50 transition-all" />
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
                                    <div className="w-7 h-7 rounded-full border-2 border-white/30 flex items-center justify-center p-1.5 group-hover:border-white/50 transition-all" />
                                    <span className="text-[19px] md:text-[19px] font-medium tracking-tight">Accéder au live</span>
                                </label>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            <Footer />
        </div>
    );
}
