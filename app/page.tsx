import { SpaceParticles } from "@/components/space-particles"
import { SinglePagePortfolio } from "@/components/single-page-portfolio"

export default function Home() {
  return (
    <main className="relative">
      {/* Background particle system */}
      <SpaceParticles />

      <SinglePagePortfolio />
    </main>
  )
}
