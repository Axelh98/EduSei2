import { redirect } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { StatsSection } from "@/components/stats-section"
import { CategoriesSection } from "@/components/categories-section"
import { SiteFooter } from "@/components/site-footer"
import { RecoveryBanner } from "@/components/recovery-banner"

interface HomePageProps {
  searchParams: Promise<{ key?: string }>
}

export default async function HomePage({ searchParams }: HomePageProps) {

  /* 
  const { key } = await searchParams
  const secret = process.env.ADMIN_SECRET

  const hasAccess = secret && key === secret

  if (!hasAccess) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center px-4">
        <h1 className="text-3xl font-bold text-foreground mb-3">🚧 En mantenimiento</h1>
        <p className="text-muted-foreground text-base max-w-sm">
          Estamos trabajando para mejorar la plataforma. Volvé en unos momentos.
        </p>
      </div>
    )
  }
*/
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