import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import UpcomingConferenceSection from "./components/UpcomingConferenceSection";
import LatestContentSection from "./components/LatestContentSection";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <UpcomingConferenceSection />
                <LatestContentSection />
            </main>
        </>
    );
}
