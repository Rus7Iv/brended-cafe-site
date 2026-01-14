import { useState } from 'react'
import styled, { keyframes } from 'styled-components'

import menuHeroBg from '@/assets/history_interior.png'
import { Button } from '@/components/atoms/Button'
import { Section } from '@/components/atoms/Section'
import Layout from '@/components/templates/Layout/Layout'
import { categories, menuItems } from '@/data/menu'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const MenuHero = styled.section`
  height: 60vh;
  min-height: 420px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  overflow: hidden;
  background-image: url(${menuHeroBg});
  background-size: cover;
  background-position: center;
  animation: ${fadeIn} 0.8s ease both;

  @media ${({ theme }) => theme.media.upMd} {
    height: 70vh;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.7)
    );
    z-index: 1;
  }

  h1 {
    z-index: 2;
    margin: 0 0 3rem;
    font-size: 3.5rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    animation: ${fadeUp} 0.9s ease 0.2s both;
  }
`

const MenuPageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`

const CategoriesNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`

const CategoryButton = styled(Button)<{ $active: boolean }>`
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.white : theme.colors.text};
  border-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
`

const Card = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  animation: ${fadeIn} 0.5s ease backwards;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`

const CardImage = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }
`

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: calc(100% - 200px);
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`

const Title = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin: 0;
`

const Price = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
  white-space: nowrap;
  margin-left: 1rem;
`

const Description = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  flex-grow: 1;
`

const Tag = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  margin-top: 1rem;
  align-self: flex-start;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredItems =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  return (
    <Layout>
      <MenuHero>
        <h1>Меню</h1>
      </MenuHero>
      <MenuPageWrapper>
        <Section>
          <CategoriesNav>
            {categories.map((cat) => (
              <CategoryButton
                key={cat.id}
                $active={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </CategoryButton>
            ))}
          </CategoriesNav>

          <Grid>
            {filteredItems.map((item, index) => (
              <Card key={item.id} style={{ animationDelay: `${index * 50}ms` }}>
                <CardImage>
                  <img src={item.image} alt={item.title} />
                </CardImage>
                <CardContent>
                  <CardHeader>
                    <Title>{item.title}</Title>
                    <Price>{item.price}</Price>
                  </CardHeader>
                  <Description>{item.description}</Description>
                  {item.tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Section>
      </MenuPageWrapper>
    </Layout>
  )
}

export default Menu
