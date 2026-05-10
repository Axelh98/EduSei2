// app/page.tsx
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { StatsSection } from "@/components/stats-section"
import { CategoriesSection } from "@/components/categories-section"
import { SiteFooter } from "@/components/site-footer"
import { RecoveryBanner } from "@/components/recovery-banner"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <RecoveryBanner />
      <main className="flex-1">
        <HeroSection />
        <HowItWorksSection />
        <StatsSection />
        <CategoriesSection />
      </main>
      <SiteFooter />
    </div>
  )
}