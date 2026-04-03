import Image from "next/image";
import { Star } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

interface ArticleCardProps {
    title: string;
    image: string;
    href: string;
}

export default function ArticleCard({ title, image, href }: ArticleCardProps) {
    return (
        <div className="flex flex-col bg-card-bg rounded-[20px] overflow-hidden w-[350px] md:w-[400px] lg:w-[420px] flex-shrink-0 snap-center group cursor-pointer border border-pure-white/5 hover:border-pure-white/10 transition-all duration-300 shadow-xl">
            {/* Image section with title and star overlaid */}
            <div className="relative w-full h-[250px] md:h-[280px] lg:h-[300px] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-center scale-100 transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 350px, (max-width: 1024px) 400px, 420px"
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b101b] via-[#291C29]/60 to-transparent top-[30%] z-10" />

                <div className="absolute bottom-5 left-6 right-4 z-20 flex justify-between items-end gap-2">
                    <h4 className="text-pure-white font-semibold text-[16px] md:text-[17px] lg:text-[18px] leading-snug drop-shadow-md group-hover:text-light-orange transition-colors duration-300">
                        {title}
                    </h4>
                    <Star weight="fill" className="text-pure-white w-8 h-8 md:w-9 md:h-9 flex-shrink-0 drop-shadow-md group-hover:text-alt-orange transition-colors duration-300" />
                </div>
            </div>

            {/* Content / Button section */}
            <div className="flex items-center justify-center p-6 lg:p-8 bg-card-bg">
                <Link
                    href={href}
                    className="w-[70%] md:w-[65%] inline-flex items-center justify-center px-6 py-2.5 text-lg md:text-xl bg-pure-orange text-pure-white font-body font-semibold rounded-base hover:bg-pure-orange/95 transition-colors duration-200"
                >
                    Lire l'article
                </Link>
            </div>
        </div>
    );
}
