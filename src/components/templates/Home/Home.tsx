import { PageContainer } from '@/components/atoms/PageContainer'
import { AboutSection } from '@/components/organisms/About/AboutSection'
import { Footer } from '@/components/organisms/Footer/Footer'
import { Header } from '@/components/organisms/Header/Header'
import { Hero } from '@/components/organisms/Hero/Hero'
import { ImageBanner } from '@/components/organisms/ImageBanner/ImageBanner'
import { MenuSection } from '@/components/organisms/Menu/MenuSection'

export const Home = () => {
  return (
    <PageContainer>
      <Header />
      <Hero />
      <AboutSection />
      <ImageBanner />
      <MenuSection />
      <Footer />
    </PageContainer>
  )
}

export default Home
