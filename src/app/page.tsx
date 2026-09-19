import { CtaBanner } from "@/components/shared/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  HomeArticles,
  HomeAutomation,
  HomeCompliance,
  HomeDualCta,
  HomeHero,
  HomePillars,
  HomeProcess,
  HomeProjects,
  HomeSectors,
  HomeTechServices,
  HomeTestimonials,
  HomeWhy,
  HomeWorkforceServices,
} from "@/sections/home";

export default function HomePage() {
  return (
    <>
      <JsonLd type="home" />
      <HomeHero />
      <HomePillars />
      <HomeWhy />
      <HomeTechServices />
      <HomeWorkforceServices />
      <HomeSectors />
      <HomeAutomation />
      <HomeProcess />
      <HomeProjects />
      <HomeDualCta />
      <HomeCompliance />
      <HomeTestimonials />
      <CtaBanner
        title="Let's Build, Connect & Grow Together"
        description="Whether you need technology, automation, workforce support or a complete business solution, let's discuss what your business needs next."
        primaryLabel="Get a Free Consultation"
        secondaryLabel="Talk to Our Team"
      />
      <HomeArticles />
    </>
  );
}
