import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Logo } from '@/components/atoms/Logo'

const HeaderWrapper = styled.header`
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

export const Header = () => {
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
    <HeaderWrapper>
      <HeaderInner $scrolled={scrolled}>
        <Logo as={Link} to="/">
          Хлеб & Соль
        </Logo>
        <Nav id="primary-navigation" $scrolled={scrolled} $open={menuOpen}>
          <a href="/#about" onClick={handleNavClick}>
            О нас
          </a>
          <a href="/menu" onClick={handleNavClick}>
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
    </HeaderWrapper>
  )
}
