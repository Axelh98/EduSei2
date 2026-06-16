// app/signup/page.tsx
import { Suspense } from "react"
import { SignupForm } from "./signup-form"

interface PageProps {
  searchParams: Promise<{ invite?: string }>
}

export default async function SignupPage({ searchParams }: PageProps) {
  const { invite } = await searchParams
  return (
    <Suspense>
      <SignupForm initialInvite={invite ?? ""} />
    </Suspense>
  )
}
