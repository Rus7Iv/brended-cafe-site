import styled from 'styled-components'

import { Logo } from '@/components/atoms/Logo'

const FooterWrapper = styled.footer`
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

export const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <FooterInner>
        <FooterTop>
          <FooterBrand>
            <FooterLogo>Хлеб & Соль</FooterLogo>
            <p>ул. Ремесленная, 12, Москва</p>
            <p>+7 (999) 000-00-00</p>
            <p>daily 08:00 - 22:00</p>
          </FooterBrand>
          <FooterLinks>
            <a href="#">Дзен</a>
            <a href="#">Telegram</a>
            <a href="#">VK</a>
          </FooterLinks>
        </FooterTop>
        <FooterDivider />
        <FooterBottom>
          <div className="copy">© 2026 Хлеб & Соль. Все права защищены.</div>
        </FooterBottom>
      </FooterInner>
    </FooterWrapper>
  )
}
