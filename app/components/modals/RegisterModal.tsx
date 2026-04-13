"use client";

import { X, Check } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type Step = 1 | 2 | 3;

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
    const [step, setStep] = useState<Step>(1);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setStep(1); // Reset to step 1 when opening
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleNextStep = () => {
        if (step < 3) setStep((prev) => (prev + 1) as Step);
    };

    const renderStepHeader = () => {
        const steps = [
            { id: 1, label: "Créer un compte" },
            { id: 2, label: "Abonnement" },
            { id: 3, label: "Activation" },
        ];

        return (
            <div className="flex items-center justify-between mb-12 px-4">
                {steps.map((s) => (
                    <div
                        key={s.id}
                        className={`flex flex-col gap-1 transition-opacity duration-300 ${step === s.id ? "opacity-100" : "opacity-40"
                            }`}
                    >
                        <span className="text-white font-semibold text-xl">{s.id}</span>
                        <span className={`text-white text-sm font-bold ${step === s.id ? "font-black" : ""}`}>
                            {s.label}
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    const renderStep1 = () => (
        <div className="space-y-6">
            <h2 className="text-3xl font-black text-white mb-8 font-heading">
                Créez votre compte
            </h2>
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="block text-white font-semibold text-lg">Nom*</label>
                        <input
                            type="text"
                            placeholder="Léa"
                            className="w-full bg-dark-purple border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-pure-orange transition-colors"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-white font-semibold text-lg">Prénom*</label>
                        <input
                            type="text"
                            placeholder="Dupont"
                            className="w-full bg-dark-purple border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-pure-orange transition-colors"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-white font-semibold text-lg">Adresse mail*</label>
                    <input
                        type="email"
                        placeholder="nom@email.com"
                        className="w-full bg-dark-purple border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-pure-orange transition-colors"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-white font-semibold text-lg">
                        Téléphone <span className="text-white/50 text-sm ml-1 font-medium">Facultatif</span>
                    </label>
                    <input
                        type="tel"
                        placeholder="06 00 00 00 00"
                        className="w-full bg-dark-purple border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-pure-orange transition-colors"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-white font-semibold text-lg">Mot de passe*</label>
                    <input
                        type="password"
                        className="w-full bg-dark-purple border border-white/20 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-pure-orange transition-colors"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-white font-semibold text-lg">Confirmation du mot de passe*</label>
                    <input
                        type="password"
                        className="w-full bg-dark-purple border border-white/20 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-pure-orange transition-colors"
                        required
                    />
                </div>

                <div className="space-y-4 pt-2">
                    <label className="flex items-start gap-3 group cursor-pointer">
                        <div className="relative flex items-center justify-center">
                            <input type="checkbox" className="peer sr-only" />
                            <div className="w-8 h-8 rounded-lg border-2 border-pure-orange/50 peer-checked:bg-pure-orange transition-all duration-200" />
                            <Check className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity" size={20} weight="bold" />
                        </div>
                        <span className="text-white font-medium pt-1">
                            Je souhaite recevoir les actualités Résonance par mail
                        </span>
                    </label>

                    <label className="flex items-start gap-3 group cursor-pointer">
                        <div className="relative flex items-center justify-center">
                            <input type="checkbox" className="peer sr-only" required />
                            <div className="w-8 h-8 rounded-lg border-2 border-pure-orange/50 peer-checked:bg-pure-orange transition-all duration-200" />
                            <Check className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity" size={20} weight="bold" />
                        </div>
                        <span className="text-white font-medium pt-1">
                            J'accepte les conditions d'utilisation (en savoir plus)
                        </span>
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-pure-orange hover:bg-pure-orange/90 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-pure-orange/20 cursor-pointer text-lg mt-4"
                >
                    Je crée mon compte
                </button>
            </form>
        </div>
    );

    const renderStep2 = () => (
        <div className="flex flex-col items-center">
            <h2 className="text-4xl font-black text-white text-center mb-4 font-heading uppercase tracking-tight">
                BIENVENUE PARMIS NOUS !
            </h2>
            <p className="text-xl font-semibold text-white text-center mb-12 max-w-[80%] leading-tight">
                Accédez à tous le contenu en choisissant votre formule
            </p>

            <div className="grid md:grid-cols-2 gap-8 w-full mb-12 items-start">
                {/* Monthly */}
                <div className="bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-xl flex flex-col">
                    <div className="relative h-44 bg-gradient-to-br from-purple to-pure-orange flex items-center justify-center overflow-hidden p-6">
                        <div className="absolute top-4 left-4 bg-light-purple/80 backdrop-blur px-3 py-1 rounded-lg">
                            <span className="text-black font-semibold text-sm">7 jours d'essais offerts</span>
                        </div>
                        <Image
                            src="/images/resonance-logo.png"
                            alt="Logo"
                            width={90}
                            height={90}
                            className="opacity-50 brightness-0 invert"
                        />
                    </div>
                    <div className="p-6 flex flex-col">
                        <span className="text-black/60 font-semibold mb-1">Abonnement mensuel</span>
                        <span className="text-black font-bold text-3xl mb-8 tracking-tight">3€/mois</span>
                        <button
                            onClick={handleNextStep}
                            className="mt-6 w-full bg-pure-orange text-white font-semibold py-3.5 rounded-xl hover:bg-pure-orange/90 transition-colors cursor-pointer"
                        >
                            Choisir
                        </button>
                    </div>
                </div>

                {/* Yearly */}
                <div className="bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-xl flex flex-col">
                    <div className="relative h-44 bg-gradient-to-br from-purple to-pure-orange flex items-center justify-center overflow-hidden p-6">
                        <div className="absolute top-4 left-4 bg-light-purple/80 backdrop-blur px-3 py-1 rounded-lg">
                            <span className="text-black font-semibold text-sm">7 jours d'essais offerts</span>
                        </div>
                        <Image
                            src="/images/resonance-logo.png"
                            alt="Logo"
                            width={90}
                            height={90}
                            className="opacity-50 brightness-0 invert"
                        />
                    </div>
                    <div className="p-6 flex flex-col">
                        <span className="text-black/60 font-semibold mb-1">Abonnement annuel</span>
                        <span className="text-black font-bold text-3xl mb-8 tracking-tight">30€/an</span>
                        <button
                            onClick={handleNextStep}
                            className="mt-6 w-full bg-pure-orange text-white font-semibold py-3.5 rounded-xl hover:bg-pure-orange/90 transition-colors cursor-pointer"
                        >
                            Choisir
                        </button>
                    </div>
                </div>
            </div>

            <button
                onClick={onClose}
                className="bg-white text-pure-orange font-semibold py-3.5 px-12 rounded-xl hover:bg-white/90 transition-colors cursor-pointer text-lg"
            >
                Je choisis plus tard
            </button>
        </div>
    );

    const renderStep3 = () => (
        <div className="space-y-6">
            <h2 className="text-3xl font-black text-white mb-8 font-heading">
                Entrez vos coordonnés bancaires
            </h2>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                <div className="space-y-2">
                    <label className="block text-white font-semibold text-lg">Nom de la carte</label>
                    <input
                        type="text"
                        placeholder="Léa"
                        className="w-full bg-dark-purple border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-pure-orange transition-colors"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-white font-semibold text-lg">Numéro de la carte</label>
                    <input
                        type="text"
                        placeholder="Léa"
                        className="w-full bg-dark-purple border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-pure-orange transition-colors"
                        required
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="block text-white font-semibold text-lg">Date d'expiration</label>
                        <input
                            type="text"
                            placeholder="MM/AA"
                            className="w-full bg-dark-purple border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-pure-orange transition-colors"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-white font-semibold text-lg">CCV</label>
                        <input
                            type="text"
                            className="w-full bg-dark-purple border border-white/20 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-pure-orange transition-colors"
                            required
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center pt-8">
                    <button
                        onClick={onClose}
                        className="bg-white text-pure-orange font-semibold py-3 px-10 rounded-xl hover:bg-white/90 transition-colors cursor-pointer text-lg"
                    >
                        Payer plus tard
                    </button>
                </div>
            </form>
            <div className="flex justify-end pt-10">
                <Image
                    src="/images/resonance-logo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                />
            </div>
        </div>
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className={`relative w-full max-w-[800px] bg-dark-purple border border-white/10 rounded-3xl p-8 md:p-12 overflow-y-auto max-h-[90vh] shadow-2xl transition-all duration-500 ${step === 2 ? "max-w-[1000px]" : "max-w-[800px]"
                            }`}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors cursor-pointer z-10"
                        >
                            <X size={24} />
                        </button>

                        {renderStepHeader()}

                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {step === 1 && renderStep1()}
                            {step === 2 && renderStep2()}
                            {step === 3 && renderStep3()}
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
