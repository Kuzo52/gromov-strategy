export type ServiceId = 'session' | 'mentorship' | 'workshop'

export interface ServicePlan {
  id: ServiceId
  title: string
  price: string
  duration: string
  description: string
  features: string[]
}

export interface Credential {
  label: string
  value: string
  detail: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  quote: string
  image: string
}

export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80',
  bio: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
  marble: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
  glass: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80',
} as const

export const CREDENTIALS: Credential[] = [
  {
    label: 'Опыт',
    value: '12+ лет',
    detail: 'Стратегия роста, M&A и операционная архитектура в&nbsp;B2B и&nbsp;tech.',
  },
  {
    label: 'ROI клиентов',
    value: '×3.4',
    detail: 'Средний мультипликатор выручки за&nbsp;цикл mentorship-программ.',
  },
  {
    label: 'Проекты',
    value: '80+',
    detail: 'Масштабированные компании от&nbsp;seed до&nbsp;международной экспансии.',
  },
  {
    label: 'Капитал',
    value: '$420M+',
    detail: 'Сопровождённые раунды и&nbsp;стратегические сделки под&nbsp;управлением.',
  },
]

export const SERVICES: ServicePlan[] = [
  {
    id: 'session',
    title: 'Strategy Session',
    price: '$1,200',
    duration: '90 минут',
    description: 'Точечный разбор узкого места: продукт, unit-экономика или&nbsp;go-to-market.',
    features: ['Диагностика модели', 'Приоритизация рычагов', 'План на&nbsp;30 дней'],
  },
  {
    id: 'mentorship',
    title: '3-Month Mentorship',
    price: '$9,800',
    duration: '12 недель',
    description: 'Глубокое сопровождение фаундера: система решений, команда и&nbsp;темп роста.',
    features: ['Еженедельные сессии', 'Аудит процессов', 'Доступ в&nbsp;async-канале'],
  },
  {
    id: 'workshop',
    title: 'Corporate Workshop',
    price: 'Custom',
    duration: '1–2 дня',
    description: 'Интенсив для C-level и&nbsp;leadership-команд: стратегия, структура, execution.',
    features: ['Фасилитация на&nbsp;месте', 'Стратегическая карта', 'Follow-up отчёт'],
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Анна Воробьёва',
    role: 'CEO, LatticePay',
    quote:
      'За квартал выстроили систему приоритетов. Выручка выросла на&nbsp;68%, а&nbsp;хаос в&nbsp;решениях ушёл.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '2',
    name: 'Darius Chen',
    role: 'Managing Partner, NorthPeak',
    quote:
      'Mark видит архитектуру бизнеса раньше цифр. Наш портфельный актив закрыл Series&nbsp;B с&nbsp;чистой историей роста.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '3',
    name: 'Елена Мартынова',
    role: 'Founder, Atelier Nova',
    quote:
      'Mentorship дал не&nbsp;мотивацию, а&nbsp;операционную дисциплину. Масштаб без потери маржи — редкость.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '4',
    name: 'Igor Belonogov',
    role: 'COO, Helix Labs',
    quote:
      'Workshop для топ-команды заменил три месяца внутренних споров. Вышли с&nbsp;единой картой действий.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
  },
]

export const CONTACTS = {
  telegram: 'https://t.me/markgromov',
  whatsapp: 'https://wa.me/79991234567',
  author: 'https://t.me/kuzoceo',
} as const
