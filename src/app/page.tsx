"use client"

import {HeroSection} from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import {Section} from "@/components/SectionPage";
import {AboutMeSection} from "@/components/AboutMeSection";
import {SkillsSection} from "@/components/SkillsSection";
import {ProjectsSection} from "@/components/ProjectsSection";
import {CareerSection} from "@/components/CareerSection";
import {FooterSection} from "@/components/FooterSection";
import {useIsMobile} from "@/components/hook/useIsMobile";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Video} from "lucide-react";

export default function Home() {
    const isMobile = useIsMobile();
    if(isMobile){
        return (
            <div className="flex items-center justify-center h-screen w-full bg-gradient-to-br from-black via-[#0d1e2c] to-[#152331]">
                <div className="flex flex-col items-center justify-center gap-6 text-center px-6">
                    <div className="text-8xl animate-bounce">🚧</div>

                    <h1 className="text-4xl sm:text-5xl font-bold">
                        <span className="bg-gradient-to-r from-green-300 to-green-400 bg-clip-text text-transparent">
                            Site en Construction
                        </span>
                    </h1>

                    <p className="text-lg text-white/70 max-w-md">
                        Le site n'est pas encore optimisé pour les appareils mobiles.
                        Je travaille dur pour vous proposer la meilleure expérience !
                    </p>

                    <p className="text-sm text-white/50">
                        Revenez bientôt ou consultez-le sur un ordinateur pour une meilleure expérience.
                    </p>

                    <div className="flex flex-col gap-3 mt-4 w-full">
                        <Dialog>
                            <DialogTrigger className="w-full bg-green-400/20 border  rounded-lg border-green-400/50 text-green-400 hover:bg-green-400/30"
                            >
                                Aperçu du Portfolio
                   </DialogTrigger>
                            <DialogContent>
                                <DialogTitle>Apercu :</DialogTitle>
                                <video width="750" height="500" controls className="rounded-lg">
                                    <source src="/portfoliovideo.mp4" type="video/mp4"/>
                                </video>
                            </DialogContent>
                        </Dialog>


                        <a
                            href="mailto:alex.marescaux62@gmail.com"
                            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all text-center"
                        >
                            Me Contacter
                        </a>
                    </div>
                </div>
            </div>
        );
    }
  return (
    <>
      <Section id="hero">
        <HeroSection/>
      </Section>

      <Section id="aboutme" bg="bgreen">
            <AboutMeSection/>
      </Section>

      <Section id="skills" bg="bg-gradient-to-r from-black to-[#152331]">
        <SkillsSection/>
      </Section>

        <Section id="projects" bg="bgreen">
            <ProjectsSection/>
        </Section>
        <Section id="career" bg="bg-gradient-to-r from-black to-[#152331]">
            <CareerSection/>
        </Section>
        <Section id="footer" bg="border-white border-4 bg-gradient-to-r from-black to-[#152331]">
            <FooterSection/>
        </Section>
    </>
  );
}
