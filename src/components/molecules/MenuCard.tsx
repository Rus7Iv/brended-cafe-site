import styled from 'styled-components'

type MenuCardProps = {
  price: string
  title: string
  description: string
}

const Card = styled.div`
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
`

const Price = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.fonts.body};
`

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`

const Description = styled.p`
  color: #666;
  font-size: 0.95rem;
`

export const MenuCard = ({ price, title, description }: MenuCardProps) => {
  return (
    <Card data-reveal>
      <Price>{price}</Price>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  )
}
