import AlienwareArea from './images/Alienware_Area_51m_R2.jpeg'
import HpSpectre from './images/HP_Spectre_x360.jpeg'
import HuaweiMatebook from './images/Huawei_Matebook_X_Pro.png'
import LenovoThinkpad from './images/Lenovo_ThinkPad_X1.jpg'
import MsiStealth from './images/MSI_Stealth_16_Studio.jpeg'
import MacbookAir from './images/Macbook_Air.jpeg'
import MacbookPro from './images/Macbook_Pro.png'
import SurfaceStudio from './images/Microsoft-Surface-Laptop-Studio.jpeg'
import RogZephyrus from './images/ROG_Zephyrus.jpeg'
import RogZephyrus1 from './images/ROG_Zephyrus_1.jpeg'
import RogZephyrus2 from './images/ROG_Zephyrus_2.jpeg'
import RogZephyrus3 from './images/ROG_Zephyrus_3.jpeg'
import SamsungGalaxy from './images/Samsung_Galaxy_Book4_Ultra.jpeg'
import Xps13 from './images/XPS_13.jpg'

export interface Laptop {
  img: string
  title: string
  description: string[]
  price: string
  score: number
  tag: string
}

const laptops: Laptop[] = [
  {
    img: RogZephyrus,
    title: 'Asus ROG Zephyrus G14',
    description: [
      'Компактный игровой ноутбук с Ryzen 9 8945HS, RTX 4070 и 14-дюймовым экраном 2880x1800 120 Гц.',
      'Модель весит около 1,5 кг, поэтому подходит не только для игр, но и для учебы, монтажа и разработки в дороге.',
    ],
    price: '$2099',
    score: 88,
    tag: 'Игры и креатив',
  },
  {
    img: MacbookPro,
    title: 'MacBook Pro M4',
    description: [
      'Ноутбук с чипом Apple M4, 16 ГБ унифицированной памяти, SSD 512 ГБ и плавным 120 Гц экраном.',
      'Хорошо подходит для программирования, графики начального-среднего уровня и длительной работы без розетки.',
    ],
    price: '$1599',
    score: 85,
    tag: 'Работа',
  },
  {
    img: MacbookAir,
    title: 'MacBook Air M4',
    description: [
      'Тонкая и легкая модель для учебы, документов, браузера и повседневных задач.',
      'Главные плюсы: малый вес, тихая работа и хорошая автономность.',
    ],
    price: '$1199',
    score: 82,
    tag: 'Учеба',
  },
  {
    img: MsiStealth,
    title: 'MSI Stealth 16 AI Studio',
    description: [
      'Производительная 16-дюймовая модель с Intel Core Ultra 9, RTX 4070 и экраном 240 Гц.',
      'Подойдет для игр, 3D, видео и тяжелой многозадачности.',
    ],
    price: '$2799',
    score: 86,
    tag: 'Студия',
  },
  {
    img: SamsungGalaxy,
    title: 'Samsung Galaxy Book4 Ultra',
    description: [
      'Ноутбук с OLED-экраном 16 дюймов, RTX 4070 и удобной связкой с устройствами Samsung.',
      'Хороший вариант для работы с цветом, презентаций и мобильного офиса.',
    ],
    price: '$2799',
    score: 85,
    tag: 'OLED',
  },
  {
    img: HuaweiMatebook,
    title: 'Huawei MateBook X Pro',
    description: [
      'Очень легкий премиальный ноутбук весом меньше килограмма с экраном высокого разрешения.',
      'Ставка сделана на мобильность, автономность и строгий внешний вид.',
    ],
    price: '$2199',
    score: 80,
    tag: 'Ультрабук',
  },
  {
    img: LenovoThinkpad,
    title: 'Lenovo ThinkPad X1 Carbon',
    description: [
      'Профессиональная модель с прочным корпусом, удобной клавиатурой и небольшим весом.',
      'Подходит для руководителей, разработчиков и тех, кому важна надежность.',
    ],
    price: '$2299',
    score: 78,
    tag: 'Бизнес',
  },
  {
    img: Xps13,
    title: 'Dell XPS 13',
    description: [
      'Компактный 13-дюймовый ноутбук с аккуратным корпусом и хорошим экраном.',
      'Удобен как универсальная рабочая машина на каждый день.',
    ],
    price: '$1799',
    score: 76,
    tag: 'Компактный',
  },
  {
    img: HpSpectre,
    title: 'HP Spectre x360 14',
    description: [
      'Трансформер с сенсорным OLED-экраном, 32 ГБ RAM и Intel Core Ultra 7.',
      'Формат 2-в-1 удобен для заметок, чтения и презентаций.',
    ],
    price: '$1899',
    score: 75,
    tag: '2-в-1',
  },
  {
    img: SurfaceStudio,
    title: 'Surface Laptop Studio 2',
    description: [
      'Ноутбук Microsoft с необычной конструкцией экрана, RTX 4060 и корпусом для творческих задач.',
      'Хорошо раскрывается в рисовании, работе с пером и графических приложениях.',
    ],
    price: '$2800',
    score: 84,
    tag: 'Креатив',
  },
  {
    img: AlienwareArea,
    title: 'Alienware Area-51m R2',
    description: [
      'Крупный игровой ноутбук с мощным железом и акцентом на максимальную производительность.',
      'Это скорее переносная игровая станция, чем легкий ноутбук на каждый день.',
    ],
    price: '$4999',
    score: 96,
    tag: 'Максимум',
  },
]

export const featureLaptop = {
  title: 'Asus ROG Zephyrus G14',
  images: [RogZephyrus1, RogZephyrus2, RogZephyrus3],
  description: [
    'Asus ROG Zephyrus G14 - компактный 14-дюймовый игровой и креативный ноутбук, сочетающий Ryzen 9 8945HS и GeForce RTX 4070 с экраном 2880x1800 120 Гц, 32 ГБ LPDDR5X и SSD 1 ТБ.',
    'Сводная оценка 88/100 отражает быстрый отклик интерфейса, уверенную работу IDE, инструментов для фото и видео, а также стабильный FPS при разумных игровых настройках.',
    'Модель подойдет тем, кому нужна портативная игровая машина и мощная станция для монтажа, 3D-графики начального-среднего уровня и разработки.',
  ],
}

export type DetailPageItem = Laptop & { id: string }

export const detailPages: DetailPageItem[] = laptops.map((item, index) => ({
  ...item,
  id: String(index),
}))

export default laptops
