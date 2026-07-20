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
  portrait: `${import.meta.env.BASE_URL}images/mark-gromov.png`,
  marble: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
  glass: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80',
} as const

export const HERO_METRICS = [
  {
    value: 'ROI +420%',
    label: 'Средний рост прибыли клиентов',
  },
  {
    value: '140+ систем',
    label: 'Выстроено регламентов и&nbsp;процессов',
  },
  {
    value: '500 млн+',
    label: 'Суммарный оборот компаний',
  },
] as const

export const CREDENTIALS: Credential[] = [
  {
    label: 'Опыт',
    value: '12+ лет',
    detail: 'Масштабирование бизнеса, сделки и&nbsp;операционные системы роста.',
  },
  {
    label: 'Результат',
    value: '+420% ROI',
    detail: 'Средний прирост чистой прибыли клиентов за&nbsp;цикл работы.',
  },
  {
    label: 'Системы',
    value: '140+',
    detail: 'Регламенты, роли и&nbsp;процессы, которые работают без&nbsp;ручного управления.',
  },
  {
    label: 'Оборот',
    value: '500 млн+',
    detail: 'Суммарный оборот компаний под&nbsp;стратегическим сопровождением.',
  },
]

export const SERVICES: ServicePlan[] = [
  {
    id: 'session',
    title: 'Стратегическая сессия',
    price: '120 000 ₽',
    duration: '90 минут',
    description: 'Разбор узкого места: прибыль, воронка или&nbsp;управляемость команды.',
    features: ['Диагностика', 'Рычаги роста', 'План на 30 дней'],
  },
  {
    id: 'mentorship',
    title: 'Менторство 3 месяца',
    price: '890 000 ₽',
    duration: '12 недель',
    description: 'Сопровождение основателя: система решений, команда и&nbsp;темп масштаба.',
    features: ['Сессии каждую неделю', 'Аудит процессов', 'Канал связи'],
  },
  {
    id: 'workshop',
    title: 'Корпоративный воркшоп',
    price: 'По запросу',
    duration: '1–2 дня',
    description: 'Интенсив для топ-команды: стратегия, структура и&nbsp;план исполнения.',
    features: ['Фасилитация', 'Стратегическая карта', 'План действий'],
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Анна Воробьёва',
    role: 'CEO, LatticePay',
    quote:
      'За квартал выстроили систему приоритетов. Выручка выросла на&nbsp;68%, хаос в&nbsp;решениях ушёл.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '2',
    name: 'Даниил Чернов',
    role: 'Управляющий партнёр, NorthPeak',
    quote:
      'Mark видит архитектуру бизнеса раньше цифр. Портфельный актив закрыл раунд с&nbsp;чистой историей роста.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '3',
    name: 'Елена Мартынова',
    role: 'Основатель, Atelier Nova',
    quote:
      'Менторство дало не&nbsp;мотивацию, а&nbsp;операционную дисциплину. Масштаб без потери маржи — редкость.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '4',
    name: 'Игорь Белоногов',
    role: 'COO, Helix Labs',
    quote:
      'Воркшоп для топ-команды заменил три месяца споров. Вышли с&nbsp;единой картой действий.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
  },
]

export const CONTACTS = {
  telegram: 'https://t.me/markgromov',
  whatsapp: 'https://wa.me/79991234567',
  author: 'https://t.me/kuzoceo',
} as const
