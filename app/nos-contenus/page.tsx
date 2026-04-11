import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ContentHeroSection from "../components/nos-contenus/ContentHeroSection";
import AllContentSection from "../components/nos-contenus/AllContentSection";
import LatestNewsSection from "../components/nos-contenus/LatestNewsSection";
import LivesSlider from "../components/sections/LivesSlider";
import PodcastsSlider from "../components/sections/PodcastsSlider";
import ArticlesSlider from "../components/sections/ArticlesSlider";
import { lives, podcasts, articles } from "../data/contentData";

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
                <LivesSlider title="NOS REPLAYS" lives={lives} />
                <PodcastsSlider title="NOS PODCASTS" podcasts={podcasts} />
                <ArticlesSlider title="NOS ARTICLES" articles={articles} />
            </main>
            <Footer />
        </>
    );
}
