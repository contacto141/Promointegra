import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/sections/hero';
import ProblemSection from '@/components/sections/problem';
import SolutionSection from '@/components/sections/solution';
import RoadmapSection from '@/components/sections/roadmap';
import BenefitsSection from '@/components/sections/benefits';
import CTASection from '@/components/sections/cta';
import FooterSection from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <RoadmapSection />
      <BenefitsSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
