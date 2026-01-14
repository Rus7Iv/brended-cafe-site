import styled, { keyframes } from 'styled-components'

import heroImg from '@/assets/hero.png'
import { Button } from '@/components/atoms/Button'
import { Subtitle } from '@/components/atoms/Subtitle'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const HeroWrapper = styled.section`
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

const HeroSubtitle = styled(Subtitle)`
  animation: ${fadeIn} 1s ease 0.2s backwards;
`

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin: 0;
  color: white;
  animation: ${fadeIn} 1s ease 0.4s backwards;

  @media ${({ theme }) => theme.media.upMd} {
    font-size: 6rem;
  }
`

const HeroButton = styled(Button)`
  margin-top: 1rem;
  animation: ${fadeIn} 1s ease 0.6s backwards;
  align-self: center;
`

export const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <HeroSubtitle>Ремесленная пекарня</HeroSubtitle>
        <HeroTitle>Хлеб & Соль</HeroTitle>
        <HeroButton>Смотреть Меню</HeroButton>
      </HeroContent>
    </HeroWrapper>
  )
}
