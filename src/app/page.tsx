import {HeroSection} from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import {Section} from "@/components/SectionPage";
import {AboutMeSection} from "@/components/AboutMeSection";
import {SkillsSection} from "@/components/SkillsSection";
import {ProjectsSection} from "@/components/ProjectsSection";
import {CareerSection} from "@/components/CareerSection";
import {FooterSection} from "@/components/FooterSection";

export default function Home() {
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
