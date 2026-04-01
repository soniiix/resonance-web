import UpcomingConferenceCard from "./UpcomingConferenceCard";

const conferences = [
    {
        id: 1,
        placesLeft: "6 places restantes",
        date: "17 avril",
        title: "L'IA au service des personnes en situation d'handicap",
        image: "/images/conference-1.png",
    },
    {
        id: 2,
        placesLeft: "12 places restantes",
        date: "17 avril",
        title: "L'IA au service des personnes en situation d'handicap",
        image: "/images/conference-2.png",
    },
    {
        id: 3,
        placesLeft: "Bientôt complet",
        date: "18 avril",
        title: "Comment l'IA transforme notre façon de travailler au quotidien",
        image: "/images/conference-1.png",
    },
    {
        id: 4,
        placesLeft: "3 places restantes",
        date: "20 avril",
        title: "Les grands enjeux éthiques de l'intelligence artificielle",
        image: "/images/conference-2.png",
    }
];

export default function UpcomingConferenceSection() {
    return (
        <section className="relative w-full py-24 bg-[var(--color-black)] overflow-hidden">
            {/* Dynamic Ribbon Background */}
            <div className="absolute top-1/2 left-0 w-[150%] h-[500px] -translate-y-1/2 -translate-x-[10%] opacity-40 z-0 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 1440 600" className="absolute top-0 left-0 w-full h-full object-cover" preserveAspectRatio="none">
                    <path
                        d="M-200,300 C200,500 800,100 1440,300 L1600,450 C1000,200 400,600 -200,400 Z"
                        fill="url(#ribbon-gradient-1)"
                        opacity="0.8"
                    />
                    <path
                        d="M-200,350 C300,600 900,150 1440,350 L1600,400 C900,250 300,650 -200,450 Z"
                        fill="url(#ribbon-gradient-2)"
                        opacity="0.5"
                    />
                    <defs>
                        <linearGradient id="ribbon-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="var(--color-alt-purple)" />
                            <stop offset="40%" stopColor="var(--color-pure-purple)" />
                            <stop offset="80%" stopColor="var(--color-orange)" />
                            <stop offset="100%" stopColor="var(--color-pure-orange)" />
                        </linearGradient>
                        <linearGradient id="ribbon-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="var(--color-orange)" />
                            <stop offset="50%" stopColor="var(--color-pure-purple)" />
                            <stop offset="100%" stopColor="var(--color-alt-purple)" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="relative z-10 w-full mx-auto">
                <div className="text-center mb-16 flex flex-col items-center px-4">
                    <h2 className="font-heading font-bold text-[32px] sm:text-4xl md:text-5xl lg:text-[60px] uppercase bg-gradient-brand text-transparent bg-clip-text md:mb-1 drop-shadow-sm">
                        Nos prochaines
                    </h2>
                    <h3 className="text-pure-white font-heading font-bold text-[32px] sm:text-4xl md:text-5xl lg:text-[60px] leading-none uppercase mb-2 md:mb-4 drop-shadow-md">
                        Conférences & Lives
                    </h3>
                    <p className="text-pure-white font-heading font-bold md:text-lg lg:text-xl tracking-wide drop-shadow-md">
                        Le thème du mois : l'IA dans notre quotidien
                    </p>
                </div>

                {/* Cards Container with Horizontal Scroll */}
                <div className="w-full pl-6 md:pl-12 lg:pl-[max(3rem,calc((100vw-var(--max-width-container))/2+3rem))]">
                    <div
                        className="flex overflow-x-auto gap-6 sm:gap-8 pb-12 snap-x snap-mandatory pt-4 pr-6 md:pr-12 w-full"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {/* Hide scrollbar for Chrome/Safari */}
                        <style dangerouslySetInnerHTML={{
                            __html: `
                            div::-webkit-scrollbar { display: none; }
                        `}} />

                        {conferences.map((conf) => (
                            <UpcomingConferenceCard
                                key={conf.id}
                                placesLeft={conf.placesLeft}
                                date={conf.date}
                                title={conf.title}
                                image={conf.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
