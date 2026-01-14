import { AboutSection } from '@/components/organisms/About/AboutSection'
import { Hero } from '@/components/organisms/Hero/Hero'
import { ImageBanner } from '@/components/organisms/ImageBanner/ImageBanner'
import { MenuSection } from '@/components/organisms/Menu/MenuSection'
import Layout from '@/components/templates/Layout/Layout'

export const Home = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ImageBanner />
      <MenuSection />
    </Layout>
  )
}

export default Home
