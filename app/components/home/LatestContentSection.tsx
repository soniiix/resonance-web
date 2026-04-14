"use client";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import LivesSlider from "../sections/LivesSlider";
import PodcastsSlider from "../sections/PodcastsSlider";
import ArticlesSlider from "../sections/ArticlesSlider";
import { categories, lives, podcasts, articles } from "../../data/contentData";

export default function LatestContentSection() {
    return (
        <section className="relative w-full overflow-hidden flex flex-col items-center">

            <div className="relative z-10 w-full max-w-container mx-auto px-4 sm:px-8">
                {/* Section Header */}
                <h2 className="text-center mb-8 flex flex-col items-center px-4">
                    <span className="font-heading font-bold text-[32px] sm:text-4xl md:text-5xl lg:text-[60px] uppercase bg-gradient-brand text-transparent bg-clip-text md:mb-1 drop-shadow-sm">
                        Nos derniers
                    </span>
                    <span className="text-pure-white font-heading font-bold text-[32px] sm:text-4xl md:text-5xl lg:text-[60px] leading-none uppercase mb-2 md:mb-4 drop-shadow-md">
                        contenus
                    </span>
                </h2>

                {/* Search Bar */}
                <div className="w-full max-w-3xl mx-auto mb-8 relative">
                    <input
                        type="text"
                        placeholder="Rechercher un podcast, un replay, un contenu"
                        className="w-full py-4 md:py-4.5 pl-8 pr-[100px] rounded-full text-black font-body text-[15px] outline-none shadow-[0_0_20px_rgba(255,125,0,0.15)] bg-pure-white placeholder-[#555] focus:ring-2 focus:ring-pure-orange transition-shadow duration-300"
                    />
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center h-full py-3">
                        <div className="h-full w-px bg-gradient-brand mr-4 opacity-50" />
                        <button className="text-[#a44ea6] hover:text-pure-orange transition-colors duration-300 group hover:cursor-pointer">
                            <MagnifyingGlass weight="regular" className="w-[28px] h-[28px] text-pure-orange transition-transform duration-300" />
                        </button>
                    </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6 mb-24 max-w-4xl mx-auto">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            className="bg-pure-white shadow-lg bg-opacity-100 hover:shadow-xl px-7.5 py-2 rounded-base transition-transform duration-300 transform hover:cursor-pointer"
                        >
                            <span className="font-regular text-[15px] tracking-wide text-transparent bg-clip-text bg-gradient-brand">
                                {cat}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            <LivesSlider title="NOS LIVES" lives={lives} />
            <PodcastsSlider title="NOS PODCASTS" podcasts={podcasts} />
            <ArticlesSlider title="NOS ARTICLES" articles={articles} />

        </section>
    );
}
