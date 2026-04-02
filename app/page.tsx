import { HomeHero } from "@/components/home/home-hero";
import { HomeInsights } from "@/components/home/home-insights";
import { HomeIntroduction } from "@/components/home/home-introduction";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeIntroduction />
      <HomeInsights />
    </>
  );
}
