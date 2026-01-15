import { type ReactNode, useEffect } from 'react'
import { ScrollRestoration } from 'react-router-dom'
import Lenis from 'lenis'

import { PageContainer } from '@/components/atoms/PageContainer'
import { Footer } from '@/components/organisms/Footer/Footer'
import { Header } from '@/components/organisms/Header/Header'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      wheelMultiplier: 0.6,
      touchMultiplier: 0.8,
    })

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <PageContainer>
      <ScrollRestoration />
      <Header />
      {children}
      <Footer />
    </PageContainer>
  )
}

export default Layout
