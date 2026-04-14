"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import RegisterModal from "../modals/RegisterModal";

export default function HeroSection() {
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);



    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };

    const buttonContainerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.45,
            },
        },
    };

    return (
        <>
            <section className="relative w-full h-[866px] max-h-screen overflow-hidden">
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
                            "linear-gradient(263deg, rgba(255, 125, 0, 0.17) 20%, rgba(221, 108, 61, 0.78) 40%, rgba(164, 78, 166, 0.9) 80%)",
                    }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex items-center px-8">
                    <div className="max-w-container mx-auto w-full">
                        <motion.h1
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-pure-white uppercase leading-tight"
                        >
                            <motion.div variants={itemVariants} className="-mb-4">
                                DES CONFÉRENCES
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                QUI ONT DU SENS
                            </motion.div>
                        </motion.h1>

                        <motion.div
                            variants={buttonContainerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap items-center gap-4 mt-5"
                        >
                            <motion.div variants={itemVariants}>
                                <button
                                    onClick={() => setIsRegisterOpen(true)}
                                    className="inline-flex items-center justify-center px-8 py-2.5 text-xl bg-pure-orange text-pure-white font-body font-semibold rounded-base hover:bg-pure-orange/95 transition-colors duration-200 cursor-pointer"
                                >
                                    Rejoindre l'expérience
                                </button>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <Link
                                    href="/en-construction"
                                    className="inline-flex items-center justify-center px-8 py-2.5 text-xl bg-pure-white text-pure-orange font-body font-semibold rounded-base hover:bg-cool-white transition-colors duration-200"
                                >
                                    Besoin d'une conférence
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <RegisterModal
                isOpen={isRegisterOpen}
                onClose={() => setIsRegisterOpen(false)}
            />
        </>
    );
}
