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

  useEffect(() => {
    const revealAll = () => {
      document
        .querySelectorAll('[data-reveal]')
        .forEach((element) => element.classList.add('is-visible'))
    }

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      revealAll()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    const observeElement = (element: Element) => {
      if (element.classList.contains('is-visible')) return
      observer.observe(element)
    }

    document
      .querySelectorAll('[data-reveal]')
      .forEach((element) => observeElement(element))

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return
          if (node.matches('[data-reveal]')) {
            observeElement(node)
          }
          node.querySelectorAll?.('[data-reveal]').forEach((element) => {
            observeElement(element)
          })
        })
      })
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
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
