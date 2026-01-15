import styled, { keyframes } from 'styled-components'

import exteriorImg from '@/assets/history_exterior.webp'
import interiorImg from '@/assets/history_interior.webp'
import peopleImg from '@/assets/history_people.webp'
import { Section } from '@/components/atoms/Section'
import { Subtitle } from '@/components/atoms/Subtitle'
import Layout from '@/components/templates/Layout/Layout'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const HistoryHero = styled.section`
  height: 60vh;
  min-height: 420px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  overflow: hidden;
  background-image: url(${exteriorImg});
  background-size: cover;
  background-position: center;
  animation: ${fadeIn} 0.8s ease both;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.65)
    );
    z-index: 1;
  }

  h1 {
    z-index: 2;
    margin: 0 0 3rem;
    font-size: 3.5rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    animation: ${fadeUp} 0.9s ease 0.2s both;
  }

  @media ${({ theme }) => theme.media.upMd} {
    height: 70vh;
  }
`

const HistorySection = styled(Section)``

const HistoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 6rem;

  & > div {
    animation: ${fadeUp} 0.8s ease both;
  }

  & > div:nth-child(1) {
    animation-delay: 0.2s;
  }

  & > div:nth-child(2) {
    animation-delay: 0.35s;
  }

  & > div:nth-child(3) {
    animation-delay: 0.5s;
  }
`

const HistoryBlock = styled.div<{ $reverse?: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;

  @media ${({ theme }) => theme.media.upLg} {
    grid-template-columns: 1fr 1fr;
    direction: ${({ $reverse }) => ($reverse ? 'rtl' : 'ltr')};
  }
`

const TextContent = styled.div`
  direction: ltr;

  h3 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
`

const ImageWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    right: 20px;
    bottom: -20px;
    left: -20px;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    z-index: -1;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: translate(10px, -10px);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    filter: sepia(30%);
    transition: filter 0.3s ease;
    display: block;

    &:hover {
      filter: sepia(0%);
    }
  }
`

const History = () => {
  return (
    <Layout>
      <HistoryHero>
        <h1>История</h1>
      </HistoryHero>
      <HistorySection id="about">
        <HistoryGrid>
          <HistoryBlock>
            <ImageWrapper>
              <img
                src={exteriorImg}
                alt="Фасад пекарни на набережной Ижевского пруда"
              />
            </ImageWrapper>
            <TextContent>
              <Subtitle>1925</Subtitle>
              <h3>Пекарня у воды</h3>
              <p>
                Мы открылись в Ижевске на набережной Ижевского пруда. Здесь
                утренний ветер пахнет водой и хвойным лесом, а вечерние огни
                отражаются в гладкой поверхности. В этот ритм мы вписали
                ремесленную пекарню, где хлеб созревает медленно и честно.
              </p>
              <p>
                Первые гости приходили после прогулки по набережной и брали
                теплый хлеб с собой. С их улыбок и разговоров началась история
                "Хлеб & Соль".
              </p>
            </TextContent>
          </HistoryBlock>

          <HistoryBlock $reverse>
            <ImageWrapper>
              <img src={interiorImg} alt="Интерьер пекарни в Ижевске" />
            </ImageWrapper>
            <TextContent>
              <Subtitle>Сегодня</Subtitle>
              <h3>Ремесло и городской ритм</h3>
              <p>
                Мы печем на закваске малыми партиями и выбираем локальные
                продукты. Витрина меняется по сезону, а кофейная карта собирает
                зерно с понятным происхождением и чистым вкусом.
              </p>
              <p>
                Внутри светло и спокойно: дерево, камень и много воздуха. Мы
                хотели, чтобы ощущение набережной оставалось с вами даже в
                непогоду.
              </p>
            </TextContent>
          </HistoryBlock>

          <HistoryBlock>
            <ImageWrapper>
              <img src={peopleImg} alt="Гости на террасе пекарни" />
            </ImageWrapper>
            <TextContent>
              <Subtitle>Сообщество</Subtitle>
              <h3>Место встреч у набережной</h3>
              <p>
                На нашей террасе встречаются соседи, гости города и команды с
                событий на набережной. Мы проводим небольшие дегустации и
                утренние выпечки по выходным, сохраняя атмосферу тишины и уюта.
              </p>
              <p>
                Ижевск вдохновляет нас быть теплыми и внимательными: хлебом,
                кофе и деталями, которые делают день чуть спокойнее.
              </p>
            </TextContent>
          </HistoryBlock>
        </HistoryGrid>
      </HistorySection>
    </Layout>
  )
}

export default History
