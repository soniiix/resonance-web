import Image from "next/image";
import { Star } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

interface LiveCardProps {
    title: string;
    intervenant: string;
    image: string;
}

export default function LiveCard({ title, intervenant, image }: LiveCardProps) {
    return (
        <div className="flex flex-col bg-card-bg rounded-[20px] overflow-hidden w-[350px] md:w-[400px] lg:w-[420px] flex-shrink-0 snap-center border border-pure-white/5 hover:border-pure-white/10 transition-all duration-300 shadow-xl">
            {/* Image section */}
            <Link
                href="/"
                className="relative w-full h-[220px] md:h-[250px] lg:h-[270px] overflow-hidden group"
                draggable="false"
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-center scale-100 transition-transform duration-700 ease-out hover:scale-110"
                    sizes="(max-width: 768px) 350px, (max-width: 1024px) 400px, 500px"
                    draggable="false"
                />
                {/* Grading overlay if needed, but simple image looks fine */}

                {/* Star icon at bottom right */}
                <div className="absolute bottom-4 right-4 z-10 drop-shadow-md">
                    <Star weight="fill" className="text-pure-white w-8 h-8 md:w-9 md:h-9 group-hover:text-alt-orange transition-colors duration-300" />
                </div>
            </Link>

            {/* Content section */}
            <div className="flex flex-col flex-grow p-6 lg:p-8">
                <Link
                   href="/"
                   draggable="false"
                >
                    <h4 className="text-pure-white font-semibold text-[18px] lg:text-[20px] leading-snug mb-6 transition-colors duration-300 hover:text-light-orange">
                        {title}
                    </h4>
                </Link>

                <p className="text-light-grey text-[15px] lg:text-[16px] mb-8">
                    Intervenant : {intervenant}
                </p>

                <div className="mt-auto flex justify-center pt-2">
                    <Link
                        href="/"
                        className="w-[60%] inline-flex items-center justify-center px-8 py-2.5 text-xl bg-pure-orange text-pure-white font-body font-semibold rounded-base hover:bg-pure-orange/95 transition-colors duration-200"
                        draggable="false"
                    >
                        Visionner
                    </Link>
                </div>
            </div>
        </div>
    );
}
