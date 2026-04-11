import Image from "next/image";
import { Star, Play, DotsThreeVertical } from "@phosphor-icons/react/dist/ssr";

interface PodcastEpisode {
    id: number;
    title: string;
    description: string;
}

interface PodcastCardProps {
    title: string;
    image: string;
    episodes: PodcastEpisode[];
}

export default function PodcastCard({ title, image, episodes }: PodcastCardProps) {
    return (
        <div className="flex flex-col bg-card-bg rounded-[20px] overflow-hidden w-[350px] md:w-[400px] lg:w-[420px] flex-shrink-0 snap-center group cursor-pointer border border-pure-white/5 hover:border-pure-white/10 transition-all duration-300 shadow-xl">
            {/* Define the gradient for Phosphor icons */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--color-pure-orange)" />
                        <stop offset="100%" stopColor="var(--color-purple)" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Image section with title and star overlaid */}
            <div className="relative w-full h-[220px] md:h-[250px] lg:h-[260px] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-center scale-100 transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 350px, (max-width: 1024px) 400px, 420px"
                    draggable="false"
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent top-[30%] z-10" />

                <div className="absolute bottom-4 left-6 right-4 z-20 flex justify-between items-end gap-4">
                    <h4 className="text-pure-white font-semibold text-[18px] lg:text-[20px] leading-snug drop-shadow-md group-hover:text-light-orange transition-colors duration-300">
                        {title}
                    </h4>
                    <Star weight="fill" className="text-pure-white w-8 h-8 md:w-9 md:h-9 flex-shrink-0 drop-shadow-md group-hover:text-alt-orange transition-colors duration-300" />
                </div>
            </div>

            {/* Episodes List section */}
            <div className="flex flex-col p-6 lg:p-8 gap-6 flex-grow">
                {episodes.map((ep) => (
                    <div key={ep.id} className="flex items-center justify-between group/episode hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors duration-200 cursor-pointer">
                        <div className="flex items-center gap-4 flex-1 overflow-hidden">
                            {/* Play Button */}
                            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-pure-white flex items-center justify-center flex-shrink-0 shadow-md transition-transform duration-200">
                                <Play weight="fill" color="url(#brandGradient)" className="w-5 h-5 md:w-6 md:h-6" />
                            </div>

                            {/* Episode Info */}
                            <div className="flex flex-col flex-1 overflow-hidden">
                                <span className="text-pure-white font-semibold text-[14px] md:text-[15px] truncate">
                                    {ep.title}
                                </span>
                                <span className="text-light-grey text-[12px] md:text-[13px] truncate">
                                    {ep.description}
                                </span>
                            </div>
                        </div>

                        {/* Three Dots Icon */}
                        <button className="flex-shrink-0 ml-3 p-1 rounded-full hover:bg-white/10 transition-colors">
                            <DotsThreeVertical weight="bold" className="text-pure-white w-5 h-5 md:w-6 md:h-6" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
