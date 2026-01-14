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

  @media ${({ theme }) => theme.media.upMd} {
    padding: 8rem 4rem;
  }
`

// HEADER
const Header = styled.header`
  position: fixed;
  top: 1.25rem;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  padding: 0 1.5rem;
  transition:
    transform 0.4s ease,
    opacity 0.4s ease;

  @media ${({ theme }) => theme.media.downSm} {
    top: 0.75rem;
    padding: 0 1rem;
  }
`

const HeaderInner = styled.div<{ $scrolled: boolean }>`
  position: relative;
  width: min(1200px, 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding: 0.65rem 1.25rem;
  border-radius: 999px;
  background: ${({ $scrolled }) =>
    $scrolled
      ? 'rgba(250, 250, 248, 0.9)'
      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04))'};
  backdrop-filter: blur(18px) saturate(140%);
  border: 1px solid
    ${({ $scrolled }) =>
      $scrolled ? 'rgba(44, 44, 44, 0.12)' : 'rgba(255, 255, 255, 0.25)'};
  box-shadow: ${({ $scrolled }) =>
    $scrolled
      ? '0 12px 30px rgba(0, 0, 0, 0.08)'
      : '0 20px 45px rgba(0, 0, 0, 0.25)'};
  color: ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.secondary : theme.colors.white};
  transition:
    background 0.4s ease,
    box-shadow 0.4s ease,
    color 0.4s ease,
    border-color 0.4s ease;
`

const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  white-space: nowrap;
`

const Nav = styled.nav<{ $scrolled: boolean; $open: boolean }>`
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.media.upMd} {
    gap: 0.35rem;
    padding: 0.35rem;
    border-radius: 999px;
    background: ${({ $scrolled }) =>
      $scrolled ? 'rgba(44, 44, 44, 0.06)' : 'rgba(255, 255, 255, 0.12)'};
    border: 1px solid
      ${({ $scrolled }) =>
        $scrolled ? 'rgba(44, 44, 44, 0.08)' : 'rgba(255, 255, 255, 0.2)'};
  }

  @media ${({ theme }) => theme.media.downMd} {
    position: absolute;
    top: calc(100% + 0.75rem);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 1.25rem;
    background: ${({ $scrolled }) =>
      $scrolled ? 'rgba(250, 250, 248, 0.98)' : 'rgba(20, 20, 20, 0.75)'};
    border: 1px solid
      ${({ $scrolled }) =>
        $scrolled ? 'rgba(44, 44, 44, 0.12)' : 'rgba(255, 255, 255, 0.22)'};
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
    transform: translateY(${({ $open }) => ($open ? '0' : '-6px')});
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }

  a {
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 600;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    padding: 0.6rem 0.95rem;
    border-radius: 999px;
    transition:
      background 0.3s ease,
      color 0.3s ease,
      transform 0.3s ease;
  }

  a:hover {
    background: ${({ $scrolled, theme }) =>
      $scrolled ? theme.colors.accent : 'rgba(255, 255, 255, 0.2)'};
    color: ${({ $scrolled, theme }) =>
      $scrolled ? theme.colors.secondary : theme.colors.white};
    transform: translateY(-1px);
  }
`

const MenuButton = styled.button<{ $scrolled: boolean; $open: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  border: 1px solid
    ${({ $scrolled }) =>
      $scrolled ? 'rgba(44, 44, 44, 0.12)' : 'rgba(255, 255, 255, 0.3)'};
  background: ${({ $scrolled }) =>
    $scrolled ? 'rgba(44, 44, 44, 0.05)' : 'rgba(255, 255, 255, 0.12)'};
  color: inherit;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  transition:
    transform 0.3s ease,
    background 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-1px);
  }

  span {
    display: inline-flex;
    width: 16px;
    height: 2px;
    background: currentColor;
    position: relative;
  }

  span::before,
  span::after {
    content: '';
    position: absolute;
    left: 0;
    width: 16px;
    height: 2px;
    background: currentColor;
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
  }

  span::before {
    top: -6px;
    opacity: ${({ $open }) => ($open ? 0 : 1)};
    transform: ${({ $open }) => ($open ? 'translateY(6px)' : 'none')};
  }

  span::after {
    top: 6px;
    opacity: ${({ $open }) => ($open ? 0 : 1)};
    transform: ${({ $open }) => ($open ? 'translateY(-6px)' : 'none')};
  }

  @media ${({ theme }) => theme.media.upMd} {
    display: none;
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

  @media ${({ theme }) => theme.media.upMd} {
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

  @media ${({ theme }) => theme.media.upLg} {
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
    padding: 0 10px 10px;
    text-align: center;
  }
`

// FOOTER
const Footer = styled.footer`
  background: radial-gradient(
    120% 120% at 15% 0%,
    rgba(230, 221, 196, 0.22) 0%,
    rgba(44, 44, 44, 1) 55%
  );
  color: ${({ theme }) => theme.colors.white};
  padding: 6rem 2rem 3rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -40% 0 auto 0;
    height: 60%;
    background: radial-gradient(
      circle,
      rgba(230, 221, 196, 0.18) 0%,
      transparent 65%
    );
    pointer-events: none;
  }

  p {
    color: rgba(255, 255, 255, 0.72);
  }

  .copy {
    font-size: 0.85rem;
    letter-spacing: 0.04em;
    color: rgba(255, 255, 255, 0.6);
  }
`

const FooterInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

const FooterTop = styled.div`
  display: grid;
  gap: 2rem;
  align-items: start;

  @media ${({ theme }) => theme.media.upLg} {
    grid-template-columns: 2fr 1fr;
  }
`

const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`

const FooterLogo = styled(Logo)`
  font-size: 2rem;
`

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  justify-content: flex-start;

  a {
    padding: 0.5rem 0.95rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    transition:
      transform 0.3s ease,
      border-color 0.3s ease,
      background 0.3s ease;
  }

  a:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.accent};
    background: rgba(230, 221, 196, 0.2);
  }
`

const FooterDivider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(230, 221, 196, 0.45),
    rgba(255, 255, 255, 0)
  );
`

const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const handleNavClick = () => setMenuOpen(false)

  return (
    <Container>
      <Header>
        <HeaderInner $scrolled={scrolled}>
          <Logo>Хлеб & Соль</Logo>
          <Nav id="primary-navigation" $scrolled={scrolled} $open={menuOpen}>
            <a href="#about" onClick={handleNavClick}>
              О нас
            </a>
            <a href="#menu" onClick={handleNavClick}>
              Меню
            </a>
            <a href="#contact" onClick={handleNavClick}>
              Контакты
            </a>
          </Nav>
          <MenuButton
            type="button"
            $scrolled={scrolled}
            $open={menuOpen}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            onClick={toggleMenu}
          >
            <span />
            Меню
          </MenuButton>
        </HeaderInner>
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
        <FooterInner>
          <FooterTop>
            <FooterBrand>
              <FooterLogo>Хлеб & Соль</FooterLogo>
              <p>ул. Ремесленная, 12, Москва</p>
              <p>+7 (999) 000-00-00</p>
              <p>08:00 - 22:00</p>
            </FooterBrand>
            <FooterLinks>
              <a href="#">Telegram</a>
              <a href="#">VK</a>
            </FooterLinks>
          </FooterTop>
          <FooterDivider />
          <FooterBottom>
            <div className="copy">© 2026 Хлеб & Соль. Все права защищены.</div>
          </FooterBottom>
        </FooterInner>
      </Footer>
    </Container>
  )
}

export default HomePage
