import { Star } from "@phosphor-icons/react/dist/ssr";

const reviews = [
    {
        id: 1,
        name: "Joe",
        lastName: "Lassivière",
        text: "J'ai adoré l'expérience ! Un vrai échange",
        rating: 4
    },
    {
        id: 2,
        name: "Estelle",
        lastName: "Blain",
        text: "Une super ambiance ! Je recommande.",
        rating: 4
    },
    {
        id: 3,
        name: "Vanilla",
        lastName: "Le Fraisier",
        text: "Merci pour les contenus de qualité !",
        rating: 4
    }
];

export default function ReviewSection() {
    return (
        <section className="relative w-full py-24 flex flex-col items-center overflow-hidden">
            {/* Background design accents similar to other sections if needed */}

            {/* Header section with gradient title */}
            <div className="text-center mb-16 px-4">
                <h2 className="font-heading font-bold text-[34px] md:text-[52px] lg:text-[60px] leading-[0.9] uppercase bg-gradient-brand text-transparent bg-clip-text drop-shadow-sm inline-flex flex-col">
                    <span>ILS NOUS</span>
                    <span className="md:mt-[5px]">RECOMMANDENT</span>
                </h2>
            </div>

            {/* Grid of review cards */}
            <div className="w-full max-w-container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                {reviews.map((rev) => (
                    <div
                        key={rev.id}
                        className="bg-gradient-brand rounded-[24px] p-8 md:p-10 lg:pl-12 flex flex-col min-h-[350px] shadow-[0_15px_40px_rgba(255,125,0,0.2)] transition-all duration-500 filter-none"
                    >
                        {/* Header of card: User info + Stars */}
                        <div className="flex justify-between items-start mb-8 gap-4">
                            <div className="flex flex-col">
                                <span className="text-pure-white font-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-tight">
                                    {rev.name}
                                </span>
                                <span className="text-pure-white font-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-tight opacity-90">
                                    {rev.lastName}
                                </span>
                            </div>
                            <div className="flex gap-0.5 mt-1">
                                {[...Array(rev.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        weight="fill"
                                        className="text-pure-white w-5 h-5 md:w-6 md:h-6 drop-shadow-md"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Centered review text */}
                        <div className="flex-grow flex items-center justify-center py-6">
                            <p className="text-pure-white font-body font-semibold text-[19px] md:text-[21px] lg:text-[23px] text-center leading-snug tracking-tight">
                                {rev.text}
                            </p>
                        </div>

                        {/* Read more button at bottom right */}
                        <div className="text-right mt-4">
                            <button className="text-pure-white/80 hover:text-pure-white transition-colors text-[15px] md:text-[16px] font-body font-medium hover:underline decoration-1 underline-offset-4 cursor-pointer">
                                Lire la suite
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
