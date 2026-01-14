import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import breadImg from '@/assets/bread.png'
import coffeeImg from '@/assets/coffee.png'
import heroImg from '@/assets/hero.png'

// --- Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`

// --- Styled Components ---

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
`

const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 8rem 4rem;
  }
`

// HEADER
const Header = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  transition: all 0.4s ease;
  background-color: ${({ $scrolled }) =>
    $scrolled ? 'rgba(250, 250, 248, 0.95)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(10px)' : 'none')};
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? '0 5px 20px rgba(0,0,0,0.05)' : 'none'};
  color: ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.secondary : '#fff'};
`

const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
`

const Nav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }

  a {
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 500;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 1px;
      background: currentColor;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`

// HERO SECTION
const HeroSection = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  overflow: hidden;

  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.6)
    );
    z-index: 1;
  }
`

const HeroContent = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 1rem;
`

const Subtitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  animation: ${fadeIn} 1s ease 0.2s backwards;
  color: ${({ theme }) => theme.colors.accent};
`

const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
  color: white;
  animation: ${fadeIn} 1s ease 0.4s backwards;

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`

const Button = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accent};
  padding: 1rem 2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  animation: ${fadeIn} 1s ease 0.6s backwards;
  align-self: center;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.secondary};
  }
`

// ABOUT SECTION
const SplitSection = styled(Section)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
`

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.secondary};
    position: relative;
    margin-bottom: 2rem;

    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 0;
      width: 60px;
      height: 2px;
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.8;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 20px 20px 0px ${({ theme }) => theme.colors.accent};
  animation: ${float} 6s ease-in-out infinite;

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.7s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`

// MENU SECTION
const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const MenuCard = styled.div`
  background: white;
  padding: 2rem;
  border: 1px solid #eee;
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
    border-color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  span {
    display: block;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: ${({ theme }) => theme.fonts.body};
  }

  p {
    color: #666;
    font-size: 0.95rem;
  }
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
`

const ImageBanner = styled.div`
  height: 400px;
  background-image: url(${coffeeImg});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
  }

  h2 {
    color: white;
    z-index: 1;
    font-size: 3rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
    padding-bottom: 10px;
  }
`

// FOOTER
const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    color: white;
    margin-bottom: 2rem;
  }

  p {
    color: #aaa;
    margin-bottom: 0.5rem;
  }

  .copy {
    margin-top: 3rem;
    font-size: 0.8rem;
    opacity: 0.5;
  }
`

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Container>
      <Header $scrolled={scrolled}>
        <Logo>Хлеб & Соль</Logo>
        <Nav>
          <a href="#about">О нас</a>
          <a href="#menu">Меню</a>
          <a href="#contact">Контакты</a>
        </Nav>
      </Header>

      <HeroSection>
        <HeroContent>
          <Subtitle>Ремесленная пекарня</Subtitle>
          <Title>Хлеб & Соль</Title>
          <Button>Смотреть Меню</Button>
        </HeroContent>
      </HeroSection>

      <Section id="about">
        <SplitSection>
          <TextBlock>
            <Subtitle style={{ color: '#D4A373' }}>Наша философия</Subtitle>
            <h2>Искусство живого хлеба</h2>
            <p>
              Мы верим, что хлеб — это не просто еда, а живая история. Каждая
              буханка в "Хлеб & Соль" создается вручную с использованием
              натуральной закваски и длительной ферментации.
            </p>
            <p>
              В нашем кафе время замедляется. Мы используем только органическую
              муку, чистую воду и щепотку морской соли. Никаких ускорителей,
              только терпение и любовь к ремеслу.
            </p>
            <Button
              style={{
                color: '#2C2C2C',
                borderColor: '#2C2C2C',
                alignSelf: 'flex-start',
                marginLeft: 0,
              }}
            >
              Читать историю
            </Button>
          </TextBlock>
          <ImageWrapper>
            <img src={breadImg} alt="Artisanal Bread" />
          </ImageWrapper>
        </SplitSection>
      </Section>

      <ImageBanner>
        <h2>Кофе и Атмосфера</h2>
      </ImageBanner>

      <Section id="menu">
        <SectionTitle>Зимнее Меню</SectionTitle>
        <p
          style={{
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            color: '#666',
          }}
        >
          Согревающие напитки и свежая выпечка, созданные для уютных моментов.
        </p>

        <MenuGrid>
          <MenuCard>
            <span>250 ₽</span>
            <h3>Капучино "Соленая Карамель"</h3>
            <p>
              Классический эспрессо с домашней карамелью и хлопьями морской
              соли.
            </p>
          </MenuCard>

          <MenuCard>
            <span>180 ₽</span>
            <h3>Миндальный Круассан</h3>
            <p>
              Воздушное слоеное тесто, французское масло и щедрая миндальная
              начинка.
            </p>
          </MenuCard>

          <MenuCard>
            <span>350 ₽</span>
            <h3>Тартин с Лососем</h3>
            <p>
              Наш фирменный хлеб на закваске, сливочный сыр, авокадо и
              слабосоленый лосось.
            </p>
          </MenuCard>

          <MenuCard>
            <span>290 ₽</span>
            <h3>Латте "Пряная Тыква"</h3>
            <p>Сезонный хит с натуральным тыквенным пюре и специями корицы.</p>
          </MenuCard>

          <MenuCard>
            <span>220 ₽</span>
            <h3>Краффин с Ванилью</h3>
            <p>
              Гибрид круассана и маффина с нежнейшим заварным кремом внутри.
            </p>
          </MenuCard>

          <MenuCard>
            <span>450 ₽</span>
            <h3>Завтрак Пекаря</h3>
            <p>
              Два яйца пашот, поджаренный бекон, томаты и корзина свежего хлеба.
            </p>
          </MenuCard>
        </MenuGrid>
      </Section>

      <Footer id="contact">
        <Logo style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Хлеб & Соль
        </Logo>
        <p>ул. Ремесленная, 12, Москва</p>
        <p>+7 (999) 000-00-00</p>
        <p>daily 08:00 - 22:00</p>

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          <a href="#">Instagram</a>
          <a href="#">Telegram</a>
          <a href="#">VK</a>
        </div>

        <div className="copy">© 2026 Хлеб & Соль. Все права защищены.</div>
      </Footer>
    </Container>
  )
}

export default HomePage
