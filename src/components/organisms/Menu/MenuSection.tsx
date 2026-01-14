import styled from 'styled-components'

import { Section } from '@/components/atoms/Section'
import { SectionTitle } from '@/components/atoms/SectionTitle'
import { MenuCard } from '@/components/molecules/MenuCard'

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const MenuDescription = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  color: #666;
`

const menuItems = [
  {
    price: '250 ₽',
    title: 'Капучино "Соленая Карамель"',
    description:
      'Классический эспрессо с домашней карамелью и хлопьями морской соли.',
  },
  {
    price: '180 ₽',
    title: 'Миндальный Круассан',
    description:
      'Воздушное слоеное тесто, французское масло и щедрая миндальная начинка.',
  },
  {
    price: '350 ₽',
    title: 'Тартин с Лососем',
    description:
      'Наш фирменный хлеб на закваске, сливочный сыр, авокадо и слабосоленый лосось.',
  },
  {
    price: '290 ₽',
    title: 'Латте "Пряная Тыква"',
    description: 'Сезонный хит с натуральным тыквенным пюре и специями корицы.',
  },
  {
    price: '220 ₽',
    title: 'Краффин с Ванилью',
    description:
      'Гибрид круассана и маффина с нежнейшим заварным кремом внутри.',
  },
  {
    price: '450 ₽',
    title: 'Завтрак Пекаря',
    description:
      'Два яйца пашот, поджаренный бекон, томаты и корзина свежего хлеба.',
  },
]

export const MenuSection = () => {
  return (
    <Section id="menu">
      <SectionTitle>Зимнее Меню</SectionTitle>
      <MenuDescription>
        Согревающие напитки и свежая выпечка, созданные для уютных моментов.
      </MenuDescription>
      <MenuGrid>
        {menuItems.map((item) => (
          <MenuCard
            key={item.title}
            price={item.price}
            title={item.title}
            description={item.description}
          />
        ))}
      </MenuGrid>
    </Section>
  )
}
