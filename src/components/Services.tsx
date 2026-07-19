import { useState } from 'react'
import { motion } from 'framer-motion'
import { SERVICES, type ServiceId } from '../data'
import { scrollToId } from '../lib/scroll'

interface ServicesProps {
  selected: ServiceId | null
  onSelect: (id: ServiceId) => void
}

export function Services({ selected, onSelect }: ServicesProps) {
  const [locking, setLocking] = useState(false)

  const handleSelect = (id: ServiceId) => {
    if (locking) return
    setLocking(true)
    onSelect(id)
    window.setTimeout(() => {
      scrollToId('contact')
      setLocking(false)
    }, 700)
  }

  return (
    <section id="services" className="relative section-y">
      <div
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(204,255,0,0.12), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="section-head max-w-2xl">
          <p className="mb-3 text-sm font-medium text-mist">Услуги</p>
          <h2 className="font-display text-3xl font-black tracking-tighter text-white lowercase text-balance sm:text-4xl md:text-5xl">
            форматы работы
          </h2>
          <p className="mt-4 text-base font-normal text-mist">
            Выберите формат — переход к&nbsp;заявке через&nbsp;700&nbsp;мс.
          </p>
        </div>

        <ul className="grid gap-4 md:grid-cols-3 md:gap-5">
          {SERVICES.map((plan, i) => {
            const isSelected = selected === plan.id
            return (
              <motion.li
                key={plan.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                animate={isSelected ? { scale: 1.02 } : { scale: 1 }}
                transition={{
                  duration: 0.35,
                  delay: isSelected ? 0 : i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative overflow-hidden rounded-[24px] p-5 transition-[box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] sm:p-6 ${
                  isSelected
                    ? 'glow-lime border border-lime/70 bg-[linear-gradient(155deg,rgba(204,255,0,0.18),rgba(16,20,18,0.96)_48%,#0a0d0c)]'
                    : 'glass-dense hover:-translate-y-0.5'
                }`}
              >
                <p className="text-sm font-medium text-mute">{plan.duration}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {plan.title}
                </h3>
                <p className="mt-2 font-display text-2xl font-black tracking-tighter text-lime">
                  {plan.price}
                </p>
                <p
                  className="mt-3 text-sm font-normal leading-relaxed text-mist"
                  dangerouslySetInnerHTML={{ __html: plan.description }}
                />
                <ul className="mt-4 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm font-medium text-white/90">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  disabled={locking && !isSelected}
                  onClick={() => handleSelect(plan.id)}
                  className={`touch-target mt-5 inline-flex w-full items-center justify-center rounded-[12px] px-4 text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] active:scale-[0.97] ${
                    isSelected
                      ? 'bg-white text-onyx'
                      : 'border border-lime/45 bg-lime/10 text-lime hover:bg-lime hover:text-onyx'
                  }`}
                >
                  {isSelected ? 'Выбрано ✓' : 'Выбрать'}
                </button>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
