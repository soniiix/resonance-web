import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/home/HeroSection";
import UpcomingConferenceSection from "./components/home/UpcomingConferenceSection";
import LatestContentSection from "./components/home/LatestContentSection";
import ConceptSection from "./components/home/ConceptSection";
import StatsSection from "./components/home/StatsSection";
import ReviewSection from "./components/home/ReviewSection";
import FaqSection from "./components/home/FaqSection";
import Footer from "./components/layout/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <UpcomingConferenceSection />
                <LatestContentSection />
                <ConceptSection />
                <StatsSection />
                <ReviewSection />
                <FaqSection />
            </main>
            <Footer />
        </>
    );
}
