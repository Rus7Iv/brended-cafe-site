import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

import notFoundBg from '@/assets/history_exterior.webp'
import { Button } from '@/components/atoms/Button'
import Layout from '@/components/templates/Layout/Layout'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`

const slowFloat = keyframes`
  0% { transform: translate3d(0, 0, 0); opacity: 0.6; }
  50% { transform: translate3d(8px, -12px, 0); opacity: 0.9; }
  100% { transform: translate3d(0, 0, 0); opacity: 0.6; }
`

const Hero = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  background-image: url(${notFoundBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.75)
    );
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    width: 420px;
    height: 420px;
    right: -120px;
    top: 10%;
    border-radius: 50%;
    background: rgba(230, 221, 196, 0.25);
    filter: blur(60px);
    animation: ${slowFloat} 8s ease-in-out infinite;
    z-index: 1;
  }
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 0 1.5rem;
  max-width: 720px;
  animation: ${fadeIn} 0.9s ease both;
`

const Code = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.8rem;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
`

const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
  color: white;

  @media ${({ theme }) => theme.media.upMd} {
    font-size: 6rem;
  }
`

const Description = styled.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
`

const Actions = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`

const PrimaryButton = styled(Button)`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`

const GhostButton = styled(Button)`
  border-color: rgba(255, 255, 255, 0.6);
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: ${({ theme }) => theme.colors.white};
  }
`

const NotFound = () => {
  return (
    <Layout>
      <Hero>
        <Content>
          <Code>Ошибка 404</Code>
          <Title>Страница потерялась</Title>
          <Description>
            Похоже, мы ушли за свежей выпечкой и забыли эту страницу. Вернемся
            обратно на главную или заглянем в меню.
          </Description>
          <Actions>
            <PrimaryButton as={Link} to="/">
              На главную
            </PrimaryButton>
            <GhostButton as={Link} to="/menu">
              Открыть меню
            </GhostButton>
          </Actions>
        </Content>
      </Hero>
    </Layout>
  )
}

export default NotFound
