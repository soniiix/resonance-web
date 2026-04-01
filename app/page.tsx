import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import UpcomingConferenceSection from "./components/UpcomingConferenceSection";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <UpcomingConferenceSection />
            </main>
        </>
    );
}
