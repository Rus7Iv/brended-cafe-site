import styled from 'styled-components'

export const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media ${({ theme }) => theme.media.upMd} {
    padding: 6rem 4rem;
  }
`
