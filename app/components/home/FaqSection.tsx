'use client';
import { useState } from 'react';
import { CaretDown } from "@phosphor-icons/react/dist/ssr";

const faqData = [
    {
        question: "Comment se passe une conférence ?",
        answer: "Les conférences Résonance sont des moments d'échange privilégiés. Elles durent généralement 1h30, avec une première partie de présentation inspirante suivie d'un temps de questions-réponses interactif avec le public, que vous soyez sur place ou en ligne."
    },
    {
        question: "Quels sont les tarifs ?",
        answer: "Nous proposons plusieurs formules adaptées à vos besoins : un accès à l'unité pour une conférence spécifique à 15€, ou un abonnement Premium à 29€/mois qui vous donne un accès illimité à tous nos contenus, replays et événements exclusifs."
    },
    {
        question: "Quel est le concept de Résonance ?",
        answer: "Résonance est un média-conférence d'un nouveau genre. Notre mission est de démocratiser l'accès au savoir en croisant les regards d'experts sur la santé, l'entreprenariat et les technologies, le tout dans un format immersif et participatif."
    }
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="relative w-full pt-10 pb-34 flex flex-col items-center overflow-hidden">
            {/* Background Curved Section (Convex style) */}
            <div
                className="absolute inset-x-[-15%] top-0 bottom-0 bg-[#1a161d]"
                style={{
                    borderRadius: '50% / 15%',
                    zIndex: 0
                }}
            />

            <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center">
                <h2 className="font-heading font-bold text-[34px] md:text-[54px] uppercase bg-gradient-brand text-transparent bg-clip-text mb-10 drop-shadow-sm">
                    FAQ
                </h2>

                <div className="w-full flex flex-col gap-6">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col w-full relative transition-all duration-500 rounded-[40px] 
                                ${openIndex === index ? 'bg-white/5 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]' : 'bg-transparent border-transparent'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full bg-cool-white rounded-full py-4 md:py-6 px-10 md:px-14 flex justify-between items-center cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:bg-cool-white/95 transition-all duration-300 z-20 relative"
                            >
                                <span className="text-black font-body font-semibold text-[16px] md:text-[18px] lg:text-[20px] text-left">
                                    {item.question}
                                </span>
                                <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-black/5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <CaretDown
                                        weight="bold"
                                        className="w-5 h-5 md:w-6 md:h-6 text-black/60"
                                    />
                                </div>
                            </button>

                            {/* Answer dropdown with animation */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out z-10
                                    ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 invisible'}`}
                            >
                                <div className="py-10 px-10 md:px-14 text-cool-white/90 font-body text-[16px] md:text-[18px] leading-[1.7]">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
