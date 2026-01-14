import type { ReactNode } from 'react'
import { ScrollRestoration } from 'react-router-dom'

import { PageContainer } from '@/components/atoms/PageContainer'
import { Footer } from '@/components/organisms/Footer/Footer'
import { Header } from '@/components/organisms/Header/Header'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
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
