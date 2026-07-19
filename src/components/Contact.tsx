import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { CONTACTS, SERVICES, type ServiceId } from '../data'

interface ContactProps {
  selected: ServiceId | null
  onSuccess: () => void
}

interface FormState {
  name: string
  phone: string
  telegram: string
}

interface FormErrors {
  name?: string
  phone?: string
  telegram?: string
}

function getDeadline(): Date {
  const d = new Date()
  d.setDate(d.getDate() + 5)
  d.setHours(23, 59, 59, 999)
  return d
}

function pad(n: number): string {
  return String(n).padStart(2, '0')
}

const inputClass =
  'touch-target w-full rounded-[12px] border border-white/12 bg-onyx/60 px-3 text-sm font-normal text-white outline-none transition-[border-color,box-shadow] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] placeholder:text-mute focus:border-lime focus:shadow-[0_0_0_3px_rgba(204,255,0,0.18)]'

export function Contact({ selected, onSuccess }: ContactProps) {
  const deadline = useMemo(() => getDeadline(), [])
  const [now, setNow] = useState(() => Date.now())
  const [form, setForm] = useState<FormState>({ name: '', phone: '', telegram: '' })
  const [errors, setErrors] = useState<FormErrors>({})

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const remaining = Math.max(0, deadline.getTime() - now)
  const days = Math.floor(remaining / 86_400_000)
  const hours = Math.floor((remaining % 86_400_000) / 3_600_000)
  const minutes = Math.floor((remaining % 3_600_000) / 60_000)
  const seconds = Math.floor((remaining % 60_000) / 1000)

  const selectedLabel = SERVICES.find((s) => s.id === selected)?.title ?? null

  const validate = (): FormErrors => {
    const next: FormErrors = {}
    if (form.name.trim().length < 2) next.name = 'Укажите имя (минимум 2 символа)'
    const phone = form.phone.replace(/[\s()-]/g, '')
    if (!/^\+?\d{10,15}$/.test(phone)) next.phone = 'Введите корректный телефон'
    const tg = form.telegram.replace(/^@/, '').trim()
    if (!/^[a-zA-Z][a-zA-Z0-9_]{4,31}$/.test(tg)) {
      next.telegram = 'Логин: 5–32 символа, латиница'
    }
    return next
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return
    onSuccess()
    setForm({ name: '', phone: '', telegram: '' })
  }

  const units = [
    { label: 'Дни', value: pad(days) },
    { label: 'Часы', value: pad(hours) },
    { label: 'Мин', value: pad(minutes) },
    { label: 'Сек', value: pad(seconds) },
  ]

  return (
    <section id="contact" className="relative section-y">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/45 to-transparent"
        aria-hidden
      />

      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-8">
        <div>
          <p className="mb-3 text-sm font-medium text-mist">Заявка</p>
          <h2 className="font-display text-3xl font-black tracking-tighter text-white lowercase text-balance sm:text-4xl md:text-5xl">
            забронируйте место
          </h2>
          <p className="mt-4 text-base font-normal text-mist">
            Ограниченный слот разборов. Таймер обновляется в&nbsp;реальном времени.
          </p>

          <div className="mt-6 grid grid-cols-4 gap-2.5 sm:mt-8 sm:gap-3" aria-live="polite">
            {units.map((u) => (
              <div
                key={u.label}
                className="glass-dense rounded-[14px] px-1.5 py-3 text-center sm:rounded-[18px] sm:py-4"
              >
                <p className="font-display text-xl font-black tracking-tighter tabular-nums text-lime sm:text-3xl">
                  {u.value}
                </p>
                <p className="mt-1 text-[10px] font-medium text-mute sm:text-xs">{u.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
            <a
              href={CONTACTS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target inline-flex items-center justify-center gap-2 rounded-[12px] border border-white/15 bg-white/5 px-4 text-sm font-medium text-white transition-colors duration-300 hover:border-lime/50 hover:text-lime active:scale-[0.97]"
            >
              <TelegramIcon />
              Телеграм
            </a>
            <a
              href={CONTACTS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target inline-flex items-center justify-center gap-2 rounded-[12px] border border-white/15 bg-white/5 px-4 text-sm font-medium text-white transition-colors duration-300 hover:border-lime/50 hover:text-lime active:scale-[0.97]"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="glass-dense rounded-[24px] p-5 sm:p-7">
          {selectedLabel && (
            <p className="mb-4 rounded-[12px] border border-lime/35 bg-lime/10 px-3 py-2.5 text-sm font-medium text-lime">
              Выбранный тариф: <span className="font-semibold">{selectedLabel}</span>
            </p>
          )}

          <label className="mb-4 block">
            <span className="mb-2 block text-sm font-medium text-mute">Имя</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className={inputClass}
              placeholder="Как к вам обращаться"
            />
            {errors.name && <span className="mt-1.5 block text-xs text-red-300">{errors.name}</span>}
          </label>

          <label className="mb-4 block">
            <span className="mb-2 block text-sm font-medium text-mute">Телефон</span>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              className={inputClass}
              placeholder="+7 900 000-00-00"
            />
            {errors.phone && <span className="mt-1.5 block text-xs text-red-300">{errors.phone}</span>}
          </label>

          <label className="mb-6 block">
            <span className="mb-2 block text-sm font-medium text-mute">Telegram</span>
            <div className="relative">
              <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 font-semibold text-lime">
                @
              </span>
              <input
                type="text"
                name="telegram"
                autoComplete="username"
                value={form.telegram}
                onChange={(e) =>
                  setForm((f) => ({ ...f, telegram: e.target.value.replace(/^@/, '') }))
                }
                className={`${inputClass} pr-3 pl-8`}
                placeholder="Username"
              />
            </div>
            {errors.telegram && (
              <span className="mt-1.5 block text-xs text-red-300">{errors.telegram}</span>
            )}
          </label>

          <button
            type="submit"
            className="glow-lime touch-target inline-flex w-full items-center justify-center rounded-[12px] bg-lime px-4 text-sm font-semibold text-onyx transition-transform duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] hover:brightness-110 active:scale-[0.97]"
          >
            Оставить заявку
          </button>
        </form>
      </div>
    </section>
  )
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21.7 3.3a1.4 1.4 0 0 0-1.5-.2L3.4 10.1c-1 .4-1 1.8 0 2.1l4.3 1.4 1.6 5c.3.9 1.4 1.1 2 .4l2.4-2.5 4.4 3.2c.7.5 1.7.1 1.9-.7L22 4.7c.2-.6 0-1.1-.3-1.4ZM9.3 13.7l7.8-5.1c.2-.1.4.2.2.4l-6.5 6.3-.3 2.7-1.2-4.3Z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.3-1.4A9.9 9.9 0 1 0 12 2Zm0 18a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.1 8.1 0 1 1 12 20Zm4.6-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.2.2-.3.2-.6.1a6.6 6.6 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.3.1-.2 0-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.8 1.6.6 2.2.6 3 .5.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  )
}
