import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

import breadImg from '@/assets/bread.png'
import { Button } from '@/components/atoms/Button'
import { Section } from '@/components/atoms/Section'
import { Subtitle } from '@/components/atoms/Subtitle'

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`

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

const AboutSubtitle = styled(Subtitle)`
  color: ${({ theme }) => theme.colors.primary};
`

const StoryButton = styled(Button)`
  color: ${({ theme }) => theme.colors.secondary};
  border-color: ${({ theme }) => theme.colors.secondary};
  align-self: flex-start;
  margin-top: 1rem;
`

export const AboutSection = () => {
  return (
    <Section id="about">
      <SplitSection>
        <TextBlock>
          <AboutSubtitle>Наша философия</AboutSubtitle>
          <h2>Искусство живого хлеба</h2>
          <p>
            Мы верим, что хлеб - это не просто еда, а живая история. Каждая
            буханка в "Хлеб & Соль" создается вручную с использованием
            натуральной закваски и длительной ферментации.
          </p>
          <p>
            В нашем кафе время замедляется. Мы используем только органическую
            муку, чистую воду и щепотку морской соли. Никаких ускорителей,
            только терпение и любовь к ремеслу.
          </p>
          <StoryButton as={Link} to="/history">
            Читать историю
          </StoryButton>
        </TextBlock>
        <ImageWrapper>
          <img src={breadImg} alt="Artisanal Bread" />
        </ImageWrapper>
      </SplitSection>
    </Section>
  )
}
