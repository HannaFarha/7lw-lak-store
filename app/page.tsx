import { ProfileHeader } from "@/components/profile-header"
import { ProfileInfo } from "@/components/profile-info"
import { Highlights } from "@/components/highlights"
import { ProductGrid } from "@/components/product-grid"
import  TopSlider  from "@/components/TopSlider"
export default function Home() {
  return (
    <main className="relative min-h-screen bg-background max-w-lg mx-auto"><TopSlider />
      <ProfileHeader />
      <ProfileInfo />
      <Highlights />
      <ProductGrid />
    </main>
  )
}
