"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LiveCard from "../cards/LiveCard";

const replays = [
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

export default function ReplaysSection() {
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
        <section className="py-20 overflow-hidden">
            <div className="max-w-container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="font-heading font-bold text-[32px] sm:text-4xl md:text-5xl lg:text-[60px] uppercase text-pure-white drop-shadow-md">
                        NOS REPLAYS
                    </h2>
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
                        {replays.map(replay => (
                            <LiveCard
                                key={replay.id}
                                title={replay.title}
                                intervenant={replay.intervenant}
                                image={replay.image}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
