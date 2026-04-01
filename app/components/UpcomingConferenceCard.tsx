import Image from "next/image";
import { Star } from "@phosphor-icons/react/dist/ssr";

interface UpcomingConferenceCardProps {
    placesLeft: string;
    date: string;
    title: string;
    image: string;
}

export default function UpcomingConferenceCard({ placesLeft, date, title, image }: UpcomingConferenceCardProps) {
    return (
        <div className="relative min-w-[380px] max-w-[380px] lg:min-w-[500px] lg:max-w-[500px] h-[450px] sm:h-[550px] rounded-base overflow-hidden snap-center flex-shrink-0 group cursor-pointer  border border-white/5 transition-all duration-300  hover:border-white/10">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover scale-102 w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 300px, 380px"
                />
            </div>

            {/* Gradient Overlay for text readability at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-black)] via-[var(--color-black)]/60 to-transparent top-[30%] z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Subtle color tint on hover overlaying the whole card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-pure-purple)]/40 to-transparent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            <div className="relative z-20 h-full px-6 pb-8 pt-5 flex flex-col justify-between">
                <div className="flex justify-between items-center w-full">
                    <div className="bg-pure-white px-4 py-1.5 rounded-[10px] shadow-lg transition-transform duration-300">
                        <span className="bg-gradient-brand text-transparent bg-clip-text text-sm tracking-wide">
                            {placesLeft}
                        </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-pure-white font-semibold text-[17px] drop-shadow-md">
                        {date}
                        <Star weight="fill" className="text-pure-white w-[22px] h-[22px] drop-shadow-md group-hover:text-alt-orange transition-colors duration-300 mb-0.5" />
                    </div>
                </div>

                <div className="mt-auto flex flex-col gap-4">
                    <h4 className="text-pure-white font-semibold text-[20px] leading-[1.25] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:text-light-orange transition-colors duration-300">
                        {title}
                    </h4>
                </div>
            </div>
        </div>
    );
}
