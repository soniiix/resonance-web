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
    title: "Résonance - Des conférences qui ont du sens",
    description:
        "Résonance organise des conférences de qualité à taille humaine, dans des lieux atypiques, avec des intervenants au parcours riche et authentique.",
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
            <body className="min-h-full flex flex-col font-body">
                {children}
            </body>
        </html>
    );
}
