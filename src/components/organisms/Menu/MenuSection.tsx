import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from '@/components/atoms/Button'
import { Section } from '@/components/atoms/Section'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { MenuCard } from '@/components/molecules/MenuCard'
import { menuItems } from '@/data/menu'

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const MenuDescription = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  color: #666;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`

const ViewAllButton = styled(Button)`
  min-width: 200px;
`

export const MenuSection = () => {
  // Take only the first 3 items (or specific popular ones) for the teaser
  const teaserItems = menuItems.slice(0, 3)

  return (
    <Section id="menu" data-reveal>
      <SectionTitle>Зимнее Меню</SectionTitle>
      <MenuDescription>
        Согревающие напитки и свежая выпечка, созданные для уютных моментов.
      </MenuDescription>
      <MenuGrid>
        {teaserItems.map((item) => (
          <MenuCard
            key={item.id}
            price={item.price}
            title={item.title}
            description={item.description}
          />
        ))}
      </MenuGrid>
      <ButtonWrapper>
        <ViewAllButton as={Link} to="/menu">
          Смотреть всё меню
        </ViewAllButton>
      </ButtonWrapper>
    </Section>
  )
}
