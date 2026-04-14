import type { Metadata } from "next";
import { Bricolage_Grotesque, Poppins } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
    subsets: ["latin"],
    variable: "--font-heading",
    display: "swap",
    weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap",
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: {
        default: "Résonance - Des conférences qui ont du sens",
        template: "%s | Résonance"
    },
    description: "Résonance organise des conférences de qualité à taille humaine, dans des lieux atypiques, avec des intervenants au parcours riche et authentique.",
    keywords: ["conférence", "Angers", "développement personnel", "inspiration", "rencontre"],
    authors: [{ name: "Résonance" }],
    creator: "Résonance",
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "https://resonance-v1.vercel.app",
        siteName: "Résonance",
        title: "Résonance - Des conférences qui ont du sens",
        description: "Découvrez des conférences authentiques dans des lieux atypiques.",
        images: [
            {
                url: "/images/site-preview.png",
                width: 1200,
                height: 630,
                alt: "Résonance - Des conférences qui ont du sens",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Résonance - Des conférences qui ont du sens",
        description: "Découvrez des conférences authentiques dans des lieux atypiques.",
        images: ["/images/site-preview.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="fr"
            className={`${bricolage.variable} ${poppins.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col font-body selection:bg-pure-orange selection:text-pure-white bg-dark-purple">
                {children}
            </body>
        </html>
    );
}
