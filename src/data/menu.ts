import breadImg from '@/assets/bread.png'
import coffeeImg from '@/assets/coffee.png'
const pastryImg = breadImg // Placeholder until we have a pastry image

export type MenuItem = {
  id: string
  title: string
  description: string
  price: string
  portion?: string
  image: string
  category: 'coffee' | 'bakery' | 'breakfast' | 'special'
  tags?: string[]
}

export const menuItems: MenuItem[] = [
  // Coffee
  {
    id: 'c1',
    title: 'Капучино "Соленая Карамель"',
    description:
      'Классический эспрессо с домашней карамелью и хлопьями морской соли.',
    price: '250 ₽',
    portion: '250 мл.',
    image: coffeeImg,
    category: 'coffee',
    tags: ['Хит', 'Сезонно'],
  },
  {
    id: 'c2',
    title: 'Латте "Пряная Тыква"',
    description: 'Сезонный хит с натуральным тыквенным пюре и специями корицы.',
    price: '290 ₽',
    portion: '300 мл.',
    image: coffeeImg,
    category: 'coffee',
    tags: ['Сезонно'],
  },
  {
    id: 'c3',
    title: 'Флэт Уайт',
    description: 'Двойной эспрессо с тонкой молочной пеной. Насыщенный вкус.',
    price: '220 ₽',
    portion: '200 мл.',
    image: coffeeImg,
    category: 'coffee',
  },
  {
    id: 'c4',
    title: 'Раф "Цитрусовый"',
    description: 'Сливочный кофе с цедрой апельсина и ванильным сахаром.',
    price: '310 ₽',
    portion: '280 мл.',
    image: coffeeImg,
    category: 'coffee',
  },

  // Bakery
  {
    id: 'b1',
    title: 'Тартин с Лососем',
    description:
      'Наш фирменный хлеб на закваске, сливочный сыр, авокадо и слабосоленый лосось.',
    price: '350 ₽',
    portion: '140 гр.',
    image: breadImg,
    category: 'bakery',
    tags: ['Популярный'],
  },
  {
    id: 'b2',
    title: 'Завтрак Пекаря',
    description:
      'Два яйца пашот, поджаренный бекон, томаты и корзина свежего хлеба.',
    price: '450 ₽',
    portion: '170 гр.',
    image: breadImg,
    category: 'bakery',
  },
  {
    id: 'b3',
    title: 'Ржаной на закваске',
    description:
      'Буханка темного хлеба с тмином и кориандром. Ферментация 24 часа.',
    price: '180 ₽',
    portion: '95 гр.',
    image: breadImg,
    category: 'bakery',
  },

  // Pastries
  {
    id: 'p1',
    title: 'Миндальный Круассан',
    description:
      'Воздушное слоеное тесто, французское масло и щедрая миндальная начинка.',
    price: '180 ₽',
    portion: '120 гр.',
    image: pastryImg,
    category: 'breakfast', // Grouping pastries into breakfast/dessert for now or separate
    tags: ['бестселлер'],
  },
  {
    id: 'p2',
    title: 'Краффин с Ванилью',
    description:
      'Гибрид круассана и маффина с нежнейшим заварным кремом внутри.',
    price: '220 ₽',
    portion: '130 гр.',
    image: pastryImg,
    category: 'breakfast',
  },
  {
    id: 'p3',
    title: 'Даниш с Ягодами',
    description: 'Слойка с заварным кремом и сезонными лесными ягодами.',
    price: '240 ₽',
    portion: '150 гр.',
    image: pastryImg,
    category: 'breakfast',
  },
]

export const categories = [
  { id: 'all', label: 'Всё меню' },
  { id: 'coffee', label: 'Кофе и Напитки' },
  { id: 'bakery', label: 'Хлеб и Еда' },
  { id: 'breakfast', label: 'Выпечка и Десерты' },
]
