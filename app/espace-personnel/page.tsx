"use client";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
    User,
    Hexagon,
    Gear,
    Nut,
    CaretRight,
    DownloadSimple,
    Envelope,
    Lock,
    Bell
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import RegisterModal from "../components/modals/RegisterModal";
import Link from "next/link";

export default function EspacePersonnel() {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    return (
        <div className="bg-dark-purple selection:bg-pure-orange selection:text-white">
            <Navbar />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative pt-44 pb-24 px-8 overflow-hidden">
                    {/* Background Gradient */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            background: "linear-gradient(90deg, #861388 0%, #ff7d00 100%)",
                            opacity: 0.9
                        }}
                    />

                    <div className="max-w-container mx-auto relative z-10">
                        <h1
                            className="text-6xl md:text-7xl font-bold text-white uppercase tracking-tight mb-8 font-heading"
                        >
                            Espace Personnel
                        </h1>

                        <button
                            onClick={() => setIsRegisterOpen(true)}
                            className="inline-flex items-center justify-center px-8 py-2.5 text-xl bg-pure-orange text-pure-white font-body font-semibold rounded-base hover:bg-pure-orange/95 transition-colors duration-200 cursor-pointer"
                        >
                            S'abonner
                        </button>
                    </div>
                </section>

                {/* --- Content Section --- */}
                <section className="relative py-24 px-8 overflow-hidden">
                    {/* Large Background Logo Watermark */}
                    <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 opacity-5 pointer-events-none rotate-12">
                        <Image
                            src="/images/resonance-logo-white.png"
                            alt=""
                            width={800}
                            height={800}
                            className="grayscale contrast-200"
                        />
                    </div>

                    <div className="max-w-container mx-auto">
                        <h2
                            className="text-4xl md:text-5xl font-black text-white uppercase mb-16 font-heading"
                        >
                            Mon Profil
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                            {/* Left: Profile Card */}
                            <div
                                className="group relative"
                            >
                                <div className="bg-[#2a1c2a] rounded-[32px] overflow-hidden shadow-2xl border border-white/5">
                                    {/* Gradient Header Area */}
                                    <div className="relative h-90 w-full bg-gradient-to-br from-purple to-pure-orange flex items-center justify-center">
                                        {/* Gear/Hexagon Icon Button */}
                                        <Link href="/en-construction" className="hover:cursor-pointer absolute top-6 right-6 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors">
                                            <Nut size={24} weight="bold" />
                                        </Link>

                                        {/* User Silhouette */}
                                        <div className="w-1/2 h-1/2 text-white/90 drop-shadow-2xl">
                                            <User size="100%" />
                                        </div>
                                    </div>

                                    {/* User Name Area */}
                                    <div className="p-8 pb-10">
                                        <h3 className="text-3xl font-semibold text-white leading-tight">
                                            John Doe
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* Middle: Tags & Details */}
                            <div className="flex flex-col gap-12 lg:pt-4">
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-6 tracking-wider">Mes villes</h4>
                                    <div className="flex flex-wrap gap-4">
                                        <span className="text-grey font-medium text-lg italic mt-1 font-body">#Angers</span>
                                        <span className="text-grey font-medium text-lg italic mt-1 font-body">#Tours</span>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-6 tracking-wider">Mes intérêts</h4>
                                    <div className="flex flex-col gap-3">
                                        <span className="text-grey font-medium text-lg italic font-body">#Entrepreneuriat</span>
                                        <span className="text-grey font-medium text-lg italic font-body">#Leadership</span>
                                        <span className="text-grey font-medium text-lg italic font-body">#Tech</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Data & Settings Card */}
                            <div
                                className="bg-[#221722] rounded-[32px] p-10 border border-white/5 shadow-2xl relative"
                            >
                                <div className="space-y-8">
                                    {/* Mes données */}
                                    <div>
                                        <h4 className="text-xl font-semibold text-white mb-6">Mes données</h4>
                                        <div className="space-y-4">
                                            <button className="flex items-center justify-between w-full group/item text-grey hover:text-white transition-colors hover:cursor-pointer">
                                                <span className="flex items-center gap-3">
                                                    <Envelope size={20} className="text-grey group-hover/item:text-pure-orange transition-colors" />
                                                    Email
                                                </span>
                                                <CaretRight size={16} />
                                            </button>
                                            <button className="flex items-center justify-between w-full group/item text-grey hover:text-white transition-colors hover:cursor-pointer">
                                                <span className="flex items-center gap-3">
                                                    <Lock size={20} className="text-grey group-hover/item:text-pure-orange transition-colors" />
                                                    Mot de passe
                                                </span>
                                                <CaretRight size={16} />
                                            </button>
                                            <button className="flex items-center justify-between w-full group/item text-grey hover:text-white transition-colors hover:cursor-pointer">
                                                <span className="flex items-center gap-3">
                                                    <Bell size={20} className="text-grey group-hover/item:text-pure-orange transition-colors" />
                                                    Notifications
                                                </span>
                                                <CaretRight size={16} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="h-px bg-white/5 w-full" />

                                    {/* Historique de factures */}
                                    <div>
                                        <h4 className="text-xl font-semibold text-white mb-6">Historique de factures</h4>
                                        <button className="flex items-center gap-3 text-grey hover:text-white transition-colors group/item w-full hover:cursor-pointer">
                                            <DownloadSimple size={20} className="text-grey group-hover/item:text-pure-orange transition-colors" />
                                            <span>Télécharger mes factures</span>
                                        </button>
                                    </div>

                                    <div className="h-px bg-white/5 w-full" />

                                    {/* Gérer mon abonnement */}
                                    <div>
                                        <Link
                                            href="/en-construction"
                                            className="group flex items-center justify-between w-full hover:cursor-pointer">
                                            <span className="text-xl font-semibold text-white group-hover:text-pure-orange transition-colors">Gérer mon abonnement</span>
                                            <CaretRight size={20} weight="bold" className="text-pure-orange" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

