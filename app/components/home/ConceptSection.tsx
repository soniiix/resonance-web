import Image from "next/image";

export default function ConceptSection() {
    return (
        <section className="relative w-full flex flex-col items-center pb-20">
            {/* Section Header */}
            <div className="text-center mb-12 flex flex-col items-center px-4">
                <h2 className="flex flex-row flex-wrap items-center justify-center gap-x-4">
                    <span className="text-pure-white font-heading font-bold text-[32px] sm:text-4xl md:text-5xl lg:text-[60px] uppercase drop-shadow-md">
                        NOTRE
                    </span>
                    <span className="font-heading font-bold text-[32px] sm:text-4xl md:text-5xl lg:text-[60px] uppercase bg-gradient-brand text-transparent bg-clip-text drop-shadow-sm">
                        CONCEPT
                    </span>
                </h2>
                <span className="text-pure-white font-body font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] mt-4 drop-shadow-sm">
                    un média-conférence d'un nouveau genre.
                </span>
            </div>

            {/* Images Container with Curved Top */}
            <div className="w-full max-w-[1920px] h-[500px] md:h-[600px] lg:h-[700px] relative mx-auto overflow-hidden flex flex-col md:flex-row"
                style={{
                    borderTopLeftRadius: '50% 8%',
                    borderTopRightRadius: '50% 8%'
                }}>

                {/* Image 1: NOS VALEURS */}
                <div className="relative flex-1 h-full group">
                    <Image
                        src="/images/concept-cover-1.png"
                        alt="Nos valeurs"
                        fill
                        className="object-cover object-center transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent top-1/2" />
                    <div className="absolute inset-0 bg-gradient-to-t from-pure-orange/20 to-transparent top-[60%] z-10" />
                    <div className="absolute bottom-10 left-0 right-0 px-6 text-center z-10 transition-transform duration-500">
                        <h3 className="text-pure-white font-body font-semibold text-[24px] md:text-[32px] lg:text-[40px] leading-tight uppercase drop-shadow-lg">
                            NOS<br />VALEURS
                        </h3>
                    </div>
                </div>

                {/* Image 2: NOS CONFÉRENCES */}
                <div className="relative flex-1 h-full group">
                    <Image
                        src="/images/concept-cover-2.png"
                        alt="Nos conférences"
                        fill
                        className="object-cover object-center transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent top-1/2" />
                    <div className="absolute inset-0 bg-gradient-to-t from-pure-orange/20 to-transparent top-[60%] z-10" />
                    <div className="absolute bottom-10 left-0 right-0 px-6 text-center z-10 transition-transform duration-500">
                        <h3 className="text-pure-white font-body font-semibold text-[24px] md:text-[32px] lg:text-[40px] leading-tight uppercase drop-shadow-lg">
                            NOS<br />CONFÉRENCES
                        </h3>
                    </div>
                </div>

                {/* Image 3: NOTRE MÉDIA */}
                <div className="relative flex-1 h-full group">
                    <Image
                        src="/images/concept-cover-3.png"
                        alt="Notre média"
                        fill
                        className="object-cover object-center transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent top-1/2" />
                    <div className="absolute inset-0 bg-gradient-to-t from-pure-orange/20 to-transparent top-[60%] z-10" />
                    <div className="absolute bottom-10 left-0 right-0 px-6 text-center z-10 transition-transform duration-500">
                        <h3 className="text-pure-white font-body font-semibold text-[24px] md:text-[32px] lg:text-[40px] leading-tight uppercase drop-shadow-lg">
                            NOTRE<br />MÉDIA
                        </h3>
                    </div>
                </div>

            </div>
        </section>
    );
}
