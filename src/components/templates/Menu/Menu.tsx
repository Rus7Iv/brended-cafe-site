import { useState } from 'react'
import styled, { keyframes } from 'styled-components'

import menuHeroBg from '@/assets/history_interior.webp'
import { Section } from '@/components/atoms/Section'
import Layout from '@/components/templates/Layout/Layout'
import { categories, menuItems } from '@/data/menu'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
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
  background-attachment: fixed; /* Parallax effect on hero */

  @media ${({ theme }) => theme.media.upMd} {
    height: 70vh;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
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
    text-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
`

const MenuPageWrapper = styled.div`
  background-color: #f9f9f9; /* Lighter background for contrast */
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  /* Decorative background element */
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    right: -5%;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
    opacity: 0.3;
    filter: blur(80px);
    z-index: 0;
  }
`

const CategoriesNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 5rem;
  flex-wrap: wrap;
  position: sticky;
  top: 90px;
  z-index: 10;
  padding: 1rem 0;
  background: rgba(249, 249, 249, 0.8);
  backdrop-filter: blur(10px);
  width: 100%;
`

const CategoryButton = styled.button<{ $active: boolean }>`
  background: transparent;
  border: none;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.1rem;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.text};
  padding: 0.5rem 1rem;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scaleX(${({ $active }) => ($active ? 1 : 0)});
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const StaggeredGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  column-gap: 3rem;
  row-gap: 5rem; /* Large gap for pop-out effect */
  padding-bottom: 4rem;
  max-width: 1200px;
  margin: 0 auto;
`

const PriceTag = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  font-weight: 700;
  border-radius: 0 8px 0 8px;
  font-family: ${({ theme }) => theme.fonts.heading};
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 2;
`

const CardImage = styled.div`
  width: var(--image-size);
  height: var(--image-size);
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: var(--image-offset); /* Break out of top */
  left: 20px;
  border: 4px solid white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const CardContent = styled.div`
  padding: calc(var(--image-size) + var(--image-offset) + 1.75rem) 1.5rem 2rem; /* Top padding clears the image */
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Card = styled.div<{ $index: number }>`
  --image-size: 140px;
  --image-offset: -40px;

  background: white;
  border-radius: 12px;
  position: relative;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  animation: ${fadeIn} 0.6s ease backwards;
  animation-delay: ${({ $index }) => `${$index * 100}ms`};
  border: 1px solid rgba(0, 0, 0, 0.03);

  /* Glass/Shadow Effect */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);

    ${CardImage} {
      transform: scale(1.1) rotate(5deg);
    }
  }

  /* Stagger effect for desktop */
  @media ${({ theme }) => theme.media.upLg} {
    margin-top: ${({ $index }) => ($index % 2 !== 0 ? '3rem' : '0')};
  }

  @media ${({ theme }) => theme.media.downMd} {
    --image-size: 120px;
    --image-offset: -30px;
  }
`

const Title = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin: 0 0 0.5rem;
`

const Portion = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.subtle};
  margin-bottom: 0.75rem;
`

const Description = styled.p`
  color: #777;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`

const Tag = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.7rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  align-self: flex-start;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  margin-bottom: 5px;
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

          <StaggeredGrid>
            {filteredItems.map((item, index) => (
              <Card key={item.id} $index={index}>
                <PriceTag>{item.price}</PriceTag>
                <CardImage>
                  <img src={item.image} alt={item.title} />
                </CardImage>
                <CardContent>
                  <Title>{item.title}</Title>
                  {item.portion && <Portion>{item.portion}</Portion>}
                  <Description>{item.description}</Description>
                  {item.tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                </CardContent>
              </Card>
            ))}
          </StaggeredGrid>
        </Section>
      </MenuPageWrapper>
    </Layout>
  )
}

export default Menu
