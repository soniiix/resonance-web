"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PodcastCard from "../cards/PodcastCard";

interface Episode {
    id: number;
    title: string;
    description: string;
}

interface Podcast {
    id: number;
    title: string;
    image: string;
    episodes: Episode[];
}

interface PodcastsSliderProps {
    title: string;
    podcasts: Podcast[];
}

export default function PodcastsSlider({ title, podcasts }: PodcastsSliderProps) {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const isDraggingRef = useRef(false);

    useEffect(() => {
        const updateWidth = () => {
            if (carouselRef.current) {
                setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
            }
        };

        const timer = setTimeout(updateWidth, 150);
        window.addEventListener("resize", updateWidth);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", updateWidth);
        };
    }, []);

    const handleDragStart = () => { isDraggingRef.current = true; };
    const handleDragEnd = () => { setTimeout(() => { isDraggingRef.current = false; }, 50); };
    const handleClickCapture = (e: React.MouseEvent) => {
        if (isDraggingRef.current) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    return (
        <section className="relative w-full overflow-hidden mt-16 md:mt-20">
            <div className="max-w-container mx-auto px-4 sm:px-8">
                <div className="text-center mb-4 md:mb-6">
                    <h3 className="font-heading font-bold text-[28px] md:text-4xl lg:text-[44px] uppercase text-pure-white drop-shadow-md">
                        {title}
                    </h3>
                </div>
            </div>

            <div className="relative z-10 w-full pl-6 md:pl-12 lg:pl-[max(3rem,calc((100vw-var(--max-width-container))/2+3rem))] overflow-hidden">
                <motion.div
                    ref={carouselRef}
                    className="cursor-grab active:cursor-grabbing pb-12"
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onClickCapture={handleClickCapture}
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
        </section>
    );
}
