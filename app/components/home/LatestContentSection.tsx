"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MagnifyingGlass, DotsThreeVertical } from "@phosphor-icons/react/dist/ssr";
import LiveCard from "../cards/LiveCard";
import PodcastCard from "../cards/PodcastCard";
import ArticleCard from "../cards/ArticleCard";

const categories = [
    "Santé",
    "Entreprenariat",
    "Nature",
    "IA",
    "Handicap"
];

const lives = [
    {
        id: 1,
        title: "L'IA au service des personnes en situation d'handicap",
        intervenant: "Grégory Nedelec",
        image: "/images/live-1.png"
    },
    {
        id: 2,
        title: "L'IA au service des personnes en situation d'handicap",
        intervenant: "Grégory Nedelec",
        image: "/images/live-2.png"
    },
    {
        id: 3,
        title: "L'IA au service des personnes en situation d'handicap",
        intervenant: "Grégory Nedelec",
        image: "/images/live-3.png"
    },
    {
        id: 4,
        title: "L'IA au service des personnes en situation d'handicap",
        intervenant: "Grégory Nedelec",
        image: "/images/live-1.png"
    },
    {
        id: 5,
        title: "L'IA au service des personnes en situation d'handicap",
        intervenant: "Grégory Nedelec",
        image: "/images/live-2.png"
    }
];

const podcasts = [
    {
        id: 1,
        title: "Comment l'IA peut structurer notre pensée ?",
        image: "/images/podcast-1.png",
        episodes: [
            { id: 1, title: "Épisode 1 : Définition de l'IA", description: "20/04/2026 à 15:30 - 20m40s" },
            { id: 2, title: "Épisode 2 : Les biais cognitifs", description: "20/04/2026 à 15:30 - 20m40s" },
            { id: 3, title: "Épisode 3 : Structurer ses prompts", description: "20/04/2026 à 15:30 - 20m40s" }
        ]
    },
    {
        id: 2,
        title: "Le futur du travail avec l'IA",
        image: "/images/podcast-2.png",
        episodes: [
            { id: 1, title: "Épisode 1 : Les nouveaux métiers", description: "20/04/2026 à 15:30 - 20m40s" },
            { id: 2, title: "Épisode 2 : Automatisation", description: "20/04/2026 à 15:30 - 20m40s" },
            { id: 3, title: "Épisode 3 : Ethique et IA", description: "20/04/2026 à 15:30 - 20m40s" }
        ]
    },
    {
        id: 3,
        title: "Handicap et nouvelles technologies",
        image: "/images/podcast-3.png",
        episodes: [
            { id: 1, title: "Épisode 1 : Accessibilité", description: "20/04/2026 à 15:30 - 20m40s" },
            { id: 2, title: "Épisode 2 : Outils du quotidien", description: "20/04/2026 à 15:30 - 20m40s" },
            { id: 3, title: "Épisode 3 : Témoignages", description: "20/04/2026 à 15:30 - 20m40s" }
        ]
    },
    {
        id: 4,
        title: "Handicap et nouvelles technologies",
        image: "/images/podcast-1.png",
        episodes: [
            { id: 1, title: "Épisode 1 : Accessibilité", description: "20/04/2026 à 15:30 - 20m40s" },
            { id: 2, title: "Épisode 2 : Outils du quotidien", description: "20/04/2026 à 15:30 - 20m40s" },
            { id: 3, title: "Épisode 3 : Témoignages", description: "20/04/2026 à 15:30 - 20m40s" }
        ]
    }
];

const articles = [
    {
        id: 1,
        title: "L'IA au service des personnes en situation d'handicap",
        image: "/images/article-1.png",
        href: "/"
    },
    {
        id: 2,
        title: "L'IA au service des personnes en situation d'handicap",
        image: "/images/article-2.png",
        href: "/"
    },
    {
        id: 3,
        title: "L'IA au service des personnes en situation d'handicap",
        image: "/images/article-3.png",
        href: "/"
    }
];

export default function LatestContentSection() {
    const [livesWidth, setLivesWidth] = useState(0);
    const [podcastsWidth, setPodcastsWidth] = useState(0);
    const [articlesWidth, setArticlesWidth] = useState(0);

    const livesCarouselRef = useRef<HTMLDivElement>(null);
    const podcastsCarouselRef = useRef<HTMLDivElement>(null);
    const articlesCarouselRef = useRef<HTMLDivElement>(null);

    const isDraggingLivesRef = useRef(false);
    const isDraggingPodcastsRef = useRef(false);
    const isDraggingArticlesRef = useRef(false);

    useEffect(() => {
        const updateWidths = () => {
            if (livesCarouselRef.current) {
                setLivesWidth(livesCarouselRef.current.scrollWidth - livesCarouselRef.current.offsetWidth);
            }
            if (podcastsCarouselRef.current) {
                setPodcastsWidth(podcastsCarouselRef.current.scrollWidth - podcastsCarouselRef.current.offsetWidth);
            }
            if (articlesCarouselRef.current) {
                setArticlesWidth(articlesCarouselRef.current.scrollWidth - articlesCarouselRef.current.offsetWidth);
            }
        };

        // Initial calculation with a small delay to ensure layout
        const timer = setTimeout(updateWidths, 150);
        
        window.addEventListener("resize", updateWidths);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", updateWidths);
        };
    }, []);

    // Handlers for Lives
    const handleDragStartLives = () => { isDraggingLivesRef.current = true; };
    const handleDragEndLives = () => { setTimeout(() => { isDraggingLivesRef.current = false; }, 50); };
    const handleClickCaptureLives = (e: React.MouseEvent) => {
        if (isDraggingLivesRef.current) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    // Handlers for Podcasts
    const handleDragStartPodcasts = () => { isDraggingPodcastsRef.current = true; };
    const handleDragEndPodcasts = () => { setTimeout(() => { isDraggingPodcastsRef.current = false; }, 50); };
    const handleClickCapturePodcasts = (e: React.MouseEvent) => {
        if (isDraggingPodcastsRef.current) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    // Handlers for Articles
    const handleDragStartArticles = () => { isDraggingArticlesRef.current = true; };
    const handleDragEndArticles = () => { setTimeout(() => { isDraggingArticlesRef.current = false; }, 50); };
    const handleClickCaptureArticles = (e: React.MouseEvent) => {
        if (isDraggingArticlesRef.current) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

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
                <div className="w-full max-w-3xl mx-auto mb-10 relative">
                    <input
                        type="text"
                        placeholder="Rechercher un podcast, un replay, un contenu"
                        className="w-full py-4 md:py-5 pl-8 pr-[100px] rounded-full text-black font-body text-[15px] outline-none shadow-[0_0_20px_rgba(255,125,0,0.15)] bg-pure-white placeholder-[#555] focus:ring-2 focus:ring-pure-orange transition-shadow duration-300"
                    />
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center h-full py-3">
                        <div className="h-full w-px bg-gradient-brand mr-4 opacity-50" />
                        <button className="text-[#a44ea6] hover:text-pure-orange transition-colors duration-300 group hover:cursor-pointer">
                            <MagnifyingGlass weight="regular" className="w-[28px] h-[28px] text-pure-orange transform group-hover:scale-110 transition-transform duration-300" />
                        </button>
                    </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6 mb-24 max-w-4xl mx-auto">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            className="bg-pure-white shadow-lg bg-opacity-100 hover:shadow-xl px-8 py-2 rounded-base transition-transform duration-300 transform hover:cursor-pointer"
                        >
                            <span className="font-regular text-[15px] tracking-wide text-transparent bg-clip-text bg-gradient-brand">
                                {cat}
                            </span>
                        </button>
                    ))}
                </div>

                {/* NOS LIVES Title */}
                <div className="text-center mb-4 md:mb-6">
                    <h3 className="font-heading font-bold text-[28px] md:text-4xl lg:text-[44px] uppercase text-pure-white drop-shadow-md">
                        NOS LIVES
                    </h3>
                </div>
            </div>

            {/* Lives Cards Slider Container */}
            <div className="relative z-10 w-full pl-6 md:pl-12 lg:pl-[max(3rem,calc((100vw-var(--max-width-container))/2+3rem))] overflow-hidden">
                <motion.div
                    ref={livesCarouselRef}
                    className="cursor-grab active:cursor-grabbing pb-12"
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -livesWidth }}
                        onDragStart={handleDragStartLives}
                        onDragEnd={handleDragEndLives}
                        onClickCapture={handleClickCaptureLives}
                        className="flex gap-6 sm:gap-8 pt-4 pr-6 md:pr-12"
                    >
                        {lives.map(live => (
                            <LiveCard
                                key={live.id}
                                title={live.title}
                                intervenant={live.intervenant}
                                image={live.image}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* NOS PODCASTS Title */}
            <div className="text-center mb-4 md:mb-6 mt-16 md:mt-20">
                <h3 className="font-heading font-bold text-[28px] md:text-4xl lg:text-[44px] uppercase text-pure-white drop-shadow-md">
                    NOS PODCASTS
                </h3>
            </div>

            {/* Podcasts Cards Slider Container */}
            <div className="relative z-10 w-full pl-6 md:pl-12 lg:pl-[max(3rem,calc((100vw-var(--max-width-container))/2+3rem))] overflow-hidden">
                <motion.div
                    ref={podcastsCarouselRef}
                    className="cursor-grab active:cursor-grabbing pb-12"
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -podcastsWidth }}
                        onDragStart={handleDragStartPodcasts}
                        onDragEnd={handleDragEndPodcasts}
                        onClickCapture={handleClickCapturePodcasts}
                        className="flex gap-6 sm:gap-8 pt-4 pr-6 md:pr-12"
                    >
                        {podcasts.map(podcast => (
                            <PodcastCard
                                key={podcast.id}
                                title={podcast.title}
                                image={podcast.image}
                                episodes={podcast.episodes}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* NOS ARTICLES Title */}
            <div className="text-center mb-4 md:mb-6 mt-16 md:mt-20">
                <h3 className="font-heading font-bold text-[28px] md:text-4xl lg:text-[44px] uppercase text-pure-white drop-shadow-md">
                    NOS ARTICLES
                </h3>
            </div>

            {/* Articles Cards Slider Container */}
            <div className="relative z-10 w-full pl-6 md:pl-12 lg:pl-[max(3rem,calc((100vw-var(--max-width-container))/2+3rem))] overflow-hidden pb-10 md:pb-20">
                <motion.div
                    ref={articlesCarouselRef}
                    className="cursor-grab active:cursor-grabbing pb-12"
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -articlesWidth }}
                        onDragStart={handleDragStartArticles}
                        onDragEnd={handleDragEndArticles}
                        onClickCapture={handleClickCaptureArticles}
                        className="flex gap-6 sm:gap-8 pt-4 pr-6 md:pr-12"
                    >
                        {articles.map(article => (
                            <ArticleCard
                                key={article.id}
                                title={article.title}
                                image={article.image}
                                href={article.href}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
