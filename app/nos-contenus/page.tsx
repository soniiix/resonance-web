import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ContentHeroSection from "../components/nos-contenus/ContentHeroSection";
import AllContentSection from "../components/nos-contenus/AllContentSection";
import LatestNewsSection from "../components/nos-contenus/LatestNewsSection";
import ReplaysSection from "../components/nos-contenus/ReplaysSection";

export const metadata = {
    title: "Nos Contenus | Résonance",
    description: "Découvrez tous nos contenus : podcasts, replays, articles et conférences.",
};

export default function NosContenusPage() {
    return (
        <>
            <Navbar />
            <main>
                <ContentHeroSection />
                <AllContentSection />
                <LatestNewsSection />
                <ReplaysSection />
            </main>
            <Footer />
        </>
    );
}
