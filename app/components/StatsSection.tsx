export default function StatsSection() {
    return (
        <section className="relative w-full py-20 overflow-hidden flex flex-col items-center justify-center">
            <div className="relative z-10 w-full max-w-6xl px-4">
                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="font-heading font-bold text-[34px] md:text-[48px] lg:text-[54px] uppercase text-pure-white leading-tight">
                        EN QUELQUES
                    </h2>
                    <h2 className="font-heading font-bold text-[34px] md:text-[48px] lg:text-[54px] uppercase bg-gradient-brand text-transparent bg-clip-text leading-tight md:mt-[-8px]">
                        CHIFFRES
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
                    <div className="flex flex-col items-center transition-transform duration-300">
                        <span className="font-heading font-bold text-[52px] md:text-[68px] lg:text-[78px] bg-gradient-brand text-transparent bg-clip-text leading-none drop-shadow-sm">
                            523
                        </span>
                        <span className="bg-gradient-brand text-transparent bg-clip-text font-body font-semibold text-[18px] md:text-[21px] lg:text-[23px] mt-3 text-center max-w-[150px] leading-tight py-1 px-2">
                            Membres inscrits
                        </span>
                    </div>

                    <div className="flex flex-col items-center transition-transform duration-300">
                        <span className="font-heading font-bold text-[52px] md:text-[68px] lg:text-[78px] bg-gradient-brand text-transparent bg-clip-text leading-none drop-shadow-sm">
                            29
                        </span>
                        <span className="bg-gradient-brand text-transparent bg-clip-text font-body font-semibold text-[18px] md:text-[21px] lg:text-[23px] mt-3 text-center max-w-[150px] leading-tight">
                            Conférences données
                        </span>
                    </div>

                    <div className="flex flex-col items-center transition-transform duration-300">
                        <span className="font-heading font-bold text-[52px] md:text-[68px] lg:text-[78px] bg-gradient-brand text-transparent bg-clip-text leading-none drop-shadow-sm">
                            +52
                        </span>
                        <span className="bg-gradient-brand text-transparent bg-clip-text font-body font-semibold text-[18px] md:text-[21px] lg:text-[23px] mt-3 text-center max-w-[150px] leading-tight">
                            Intervenants
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
