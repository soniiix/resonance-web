import Image from "next/image";
import Link from "next/link";
import { InstagramLogo, LinkedinLogo, YoutubeLogo, TwitterLogo, MapPin, EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
    return (
        <footer className="relative w-full bg-pure-purple text-pure-white overflow-hidden pt-20">
            <div className="max-w-container mx-auto px-6 md:px-12 relative z-10">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
                    {/* Col 1: Brand */}
                    <div className="flex flex-col items-start gap-6">
                        <Link href="/">
                            <Image
                                src="/images/resonance-logo.png"
                                alt="Résonance Logo"
                                width={120}
                                height={120}
                                className="w-24 md:w-28 h-auto"
                            />
                        </Link>
                        <p className="text-white/70 font-body text-lg leading-relaxed max-w-xs">
                            Résonance - des conférences <br />qui ont du sens.
                        </p>
                    </div>

                    {/* Col 2: Navigation */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-heading font-bold text-xl uppercase tracking-wider text-alt-orange">Navigation</h3>
                        <nav className="flex flex-col gap-4 font-body text-lg">
                            <Link href="/nos-contenus" className="hover:text-pure-white text-white/80 transition-colors inline-block w-fit">Nos contenus</Link>
                            <Link href="/conferencier" className="hover:text-pure-white text-white/80 transition-colors inline-block w-fit">Intervenants</Link>
                            <Link href="/besoin-conference" className="hover:text-pure-white text-white/80 transition-colors inline-block w-fit">Organisation d'événements</Link>
                            <Link href="/a-propos" className="hover:text-pure-white text-white/80 transition-colors inline-block w-fit">À propos</Link>
                        </nav>
                    </div>

                    {/* Col 3: Contact Info */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-heading font-bold text-xl uppercase tracking-wider text-alt-orange">Contact</h3>
                        <div className="flex flex-col gap-5 font-body text-lg text-white/80">
                            <div className="flex items-center gap-4 group">
                                <span className="p-3 bg-white/5 rounded-2xl border border-white/10 transition-all">
                                    <EnvelopeSimple size={24} />
                                </span>
                                <a href="mailto:contact@resonance.fr" className="hover:text-pure-white transition-colors">contact@resonance.fr</a>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <span className="p-3 bg-white/5 rounded-2xl border border-white/10 transition-all">
                                    <Phone size={24} />
                                </span>
                                <a href="tel:+33123456789" className="hover:text-pure-white transition-colors">+33 1 23 45 67 89</a>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <span className="p-3 bg-white/5 rounded-2xl border border-white/10 transition-all">
                                    <MapPin size={24} />
                                </span>
                                <a href="https://maps.app.goo.gl/xu1ipuCYd35L4zVw5" target="_blank" rel="noopener noreferrer" className="hover:text-pure-white transition-colors">Angers, France</a>
                            </div>
                        </div>
                    </div>

                    {/* Col 4: Legal */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-heading font-bold text-xl uppercase tracking-wider text-alt-orange">Juridique</h3>
                        <nav className="flex flex-col gap-4 font-body text-lg text-white/70">
                            <Link href="/mentions-legales" className="hover:text-pure-white transition-colors">Mentions Légales</Link>
                            <Link href="/privacy" className="hover:text-pure-white transition-colors">Politique de confidentialité</Link>
                            <Link href="/cookies" className="hover:text-pure-white transition-colors">Gestion des Cookies</Link>
                            <Link href="/cgu" className="hover:text-pure-white transition-colors">CGU</Link>
                        </nav>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="font-body text-white/50 text-base">
                        © {new Date().getFullYear()} Résonance. Tous droits réservés.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-6">
                        <a href="#" className="p-3 bg-white/5 hover:bg-pure-orange rounded-full transition-all duration-300 border border-white/10">
                            <InstagramLogo size={24} weight="regular" />
                        </a>
                        <a href="#" className="p-3 bg-white/5 hover:bg-pure-orange rounded-full transition-all duration-300 border border-white/10">
                            <LinkedinLogo size={24} weight="regular" />
                        </a>
                        <a href="#" className="p-3 bg-white/5 hover:bg-pure-orange rounded-full transition-all duration-300 border border-white/10">
                            <YoutubeLogo size={24} weight="regular" />
                        </a>
                        <a href="#" className="p-3 bg-white/5 hover:bg-pure-orange rounded-full transition-all duration-300 border border-white/10">
                            <TwitterLogo size={24} weight="regular" />
                        </a>
                    </div>

                    <p className="font-body text-white/50 text-base flex items-center gap-2">
                        Créé avec passion à Angers ✨
                    </p>
                </div>
            </div>
        </footer>
    );
}
