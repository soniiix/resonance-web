"use client";

import { User, SignOut, UserCircle } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import LoginModal from "../modals/LoginModal";
import RegisterModal from "../modals/RegisterModal";
import Toast from "../ui/Toast";

export default function Navbar() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Check token on mount
    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setToastMessage("Connexion réussie !");
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setIsDropdownOpen(false);
        setToastMessage("Déconnexion réussie !");
        router.push("/");
    };

    return (
        <>
            <nav className="absolute top-0 left-0 w-full z-50 px-8 py-6">
                <div className="max-w-container mx-auto flex items-center justify-between">
                    {/* Left: Logo + Nav Links */}
                    <div className="flex items-center gap-10">
                        <Link href="/" className="mt-1">
                            <Image
                                src="/images/resonance-logo.png"
                                alt="Résonance"
                                width={40}
                                height={40}
                            />
                        </Link>
                        <div className="hidden md:flex items-center gap-8">
                            <Link
                                href="/nos-contenus"
                                className="relative group text-pure-white font-medium text-xl hover:text-light-orange transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-light-orange after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Nos contenus
                            </Link>
                            <Link
                                href="/en-construction"
                                className="relative group text-pure-white font-medium text-xl hover:text-light-orange transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-light-orange after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Conférencier
                            </Link>
                            <Link
                                href="/en-construction"
                                className="relative group text-pure-white font-medium text-xl hover:text-light-orange transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-light-orange after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Besoin d&apos;une conférence
                            </Link>
                        </div>
                    </div>

                    {/* Right: About + User Icon */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="/en-construction"
                            className="relative group text-pure-white font-medium text-xl hover:text-light-orange transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-light-orange after:transition-all after:duration-300 hover:after:w-full"
                        >
                            À propos
                        </Link>
                        <div className="w-[2px] h-5 bg-white" />
                        {isLoggedIn ? (
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                                    aria-label="Mon compte"
                                    className="text-pure-white hover:text-light-orange hover:cursor-pointer transition-colors duration-200"
                                >
                                    <User size={28} weight="regular" />
                                </button>

                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -8, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -8, scale: 0.95 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute right-0 mt-3 w-56 bg-dark-purple border border-white/10 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden"
                                        >
                                            <Link
                                                href="/espace-personnel"
                                                onClick={() => setIsDropdownOpen(false)}
                                                className="flex items-center gap-3 px-5 py-3.5 text-white hover:bg-white/5 transition-colors duration-200"
                                            >
                                                <UserCircle size={20} weight="regular" />
                                                <span className="font-medium text-sm">Espace personnel</span>
                                            </Link>
                                            <div className="h-[1px] bg-white/10" />
                                            <button
                                                onClick={handleLogout}
                                                className="flex items-center gap-3 w-full px-5 py-3.5 text-red-400 bg-red-500/5 hover:bg-red-500/15 transition-colors duration-200 cursor-pointer"
                                            >
                                                <SignOut size={20} weight="regular" />
                                                <span className="font-medium text-sm">Déconnexion</span>
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <button
                                onClick={() => setIsLoginModalOpen(true)}
                                aria-label="Mon compte"
                                className="text-pure-white hover:text-light-orange hover:cursor-pointer transition-colors duration-200"
                            >
                                <User size={28} weight="regular" />
                            </button>
                        )}
                    </div>
                </div>
            </nav>

            <LoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
                onLoginSuccess={handleLoginSuccess}
                onOpenRegister={() => {
                    setIsLoginModalOpen(false);
                    setIsRegisterModalOpen(true);
                }}
            />

            <RegisterModal
                isOpen={isRegisterModalOpen}
                onClose={() => setIsRegisterModalOpen(false)}
            />

            <Toast
                message={toastMessage}
                isVisible={!!toastMessage}
                onClose={() => setToastMessage("")}
            />
        </>
    );
}
