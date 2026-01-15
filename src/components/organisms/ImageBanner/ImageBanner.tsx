import styled from 'styled-components'

import coffeeImg from '@/assets/coffee.webp'

const Banner = styled.div`
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
    text-align: center;
  }
`

export const ImageBanner = () => {
  return (
    <Banner>
      <h2>Кофе и Атмосфера</h2>
    </Banner>
  )
}
