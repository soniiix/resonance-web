"use client";

import { X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect } from "react";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-[550px] bg-dark-purple border border-white/10 rounded-3xl p-6 md:p-10 overflow-hidden shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors cursor-pointer"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col items-center">
                            {/* Logo */}
                            <div className="mb-5">
                                <Image
                                    src="/images/resonance-logo.png"
                                    alt="Résonance"
                                    width={80}
                                    height={80}
                                    className="w-14 h-14"
                                />
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl font-black text-white mb-8 tracking-wider font-heading">
                                SE CONNECTER
                            </h2>

                            {/* Form */}
                            <form className="w-full space-y-5" onSubmit={(e) => e.preventDefault()}>
                                {/* Email Field */}
                                <div className="space-y-2">
                                    <label className="block">
                                        <span className="text-white font-semibold text-lg">Adresse e-mail </span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="mon@email.fr"
                                        className="w-full bg-dark-purple border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-pure-orange transition-colors"
                                    />
                                </div>

                                {/* Password Field */}
                                <div className="space-y-2">
                                    <label className="block text-white font-semibold text-lg">
                                        Mot de passe
                                    </label>
                                    <input
                                        type="password"
                                        className="w-full bg-dark-purple border border-white/20 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-pure-orange transition-colors"
                                    />
                                </div>

                                {/* Separator */}
                                <div className="flex items-center gap-4 py-4">
                                    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-pure-orange/40 to-transparent" />
                                    <span className="text-white font-bold">ou</span>
                                    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-pure-orange/40 to-transparent" />
                                </div>

                                {/* Sign Up Button */}
                                <button className="w-full bg-pure-orange hover:bg-pure-orange/90 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-pure-orange/20 uppercase tracking-wide cursor-pointer">
                                    s'inscrire
                                </button>
                            </form>

                            {/* Footer Text */}
                            <p className="mt-8 text-white/70 text-sm text-center">
                                En continuant, vous acceptez nos{" "}
                                <button className="hover:text-pure-orange underline transition-colors cursor-pointer">
                                    conditions d'utilisation
                                </button>
                            </p>
                        </div>
                    </motion.div>


                </div>
            )}
        </AnimatePresence>
    );
}
