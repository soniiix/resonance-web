"use client";

import { X, CircleNotch } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onOpenRegister: () => void;
    onLoginSuccess: () => void;
}

export default function LoginModal({ isOpen, onClose, onOpenRegister, onLoginSuccess }: LoginModalProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

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

    // Reset form state when modal opens/closes and load saved email
    useEffect(() => {
        if (isOpen) {
            const savedEmail = localStorage.getItem("remembered_email");
            if (savedEmail) {
                setEmail(savedEmail);
            }
        } else {
            setEmail("");
            setPassword("");
            setError("");
            setIsLoading(false);
        }
    }, [isOpen]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const res = await fetch("http://78.138.58.74:8080/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                if (data.message == "Invalid credentials.") {
                    setError("Identifiants incorrects");
                } else {
                    setError(data.message);
                }
                return;
            }

            localStorage.setItem("token", data.token);
            localStorage.setItem("remembered_email", email);
            onLoginSuccess();
            onClose();
        } catch (error) {
            console.log(error);
            setError("Impossible de se connecter au serveur");
        } finally {
            setIsLoading(false);
        }
    };

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

                            {/* Error Message */}
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="w-full mb-4 px-4 py-3 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 text-sm text-center"
                                >
                                    {error}
                                </motion.div>
                            )}

                            {/* Form */}
                            <form className="w-full space-y-5" onSubmit={handleLogin}>
                                {/* Email Field */}
                                <div className="space-y-2">
                                    <label className="block">
                                        <span className="text-white font-semibold text-lg">Adresse e-mail </span>
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="mon@email.fr"
                                        required
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
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="w-full bg-dark-purple border border-white/20 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-pure-orange transition-colors"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-white/10 hover:bg-white/15 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all duration-300 uppercase tracking-wide cursor-pointer flex items-center justify-center gap-2"
                                >
                                    {isLoading ? (
                                        <>
                                            <CircleNotch size={20} className="animate-spin" />
                                            Connexion...
                                        </>
                                    ) : (
                                        "Se connecter"
                                    )}
                                </button>

                                {/* Separator */}
                                <div className="flex items-center gap-4 py-4">
                                    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-pure-orange/40 to-transparent" />
                                    <span className="text-white font-bold">ou</span>
                                    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-pure-orange/40 to-transparent" />
                                </div>

                                {/* Sign Up Button */}
                                <button
                                    type="button"
                                    onClick={onOpenRegister}
                                    className="w-full bg-pure-orange hover:bg-pure-orange/90 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-pure-orange/20 uppercase tracking-wide cursor-pointer"
                                >
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
