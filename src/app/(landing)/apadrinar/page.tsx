import {
  ChangeLivesSection,
  FrequentQuestionsSection,
  HowWorkSection,
  SponsorRequirementSection
} from "@/sections";

export default function SponsorPage() {
  return (
    <main>
      <ChangeLivesSection />

      <SponsorRequirementSection />

      <HowWorkSection />

      <FrequentQuestionsSection />
    </main>
  );
}