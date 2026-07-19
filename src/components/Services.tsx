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
        <div className="mb-3 max-w-2xl sm:mb-6 md:mb-8">
          <p className="mb-1.5 text-xs font-bold tracking-tighter text-lime lowercase sm:mb-2">
            услуги
          </p>
          <h2 className="font-display text-3xl font-black tracking-tighter text-white lowercase text-balance sm:text-4xl md:text-5xl">
            форматы работы
          </h2>
          <p className="mt-1.5 text-sm text-mist sm:mt-2 sm:text-base">
            Выберите формат — переход к&nbsp;заявке через&nbsp;700&nbsp;мс.
          </p>
        </div>

        <ul className="grid gap-2.5 sm:gap-3 md:grid-cols-3 md:gap-4">
          {SERVICES.map((plan, i) => {
            const isSelected = selected === plan.id
            return (
              <motion.li
                key={plan.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                animate={isSelected ? { scale: 1.02 } : { scale: 1 }}
                transition={{ duration: 0.35, delay: isSelected ? 0 : i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden rounded-[24px] p-4 transition-[box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] sm:p-5 ${
                  isSelected
                    ? 'glow-lime border border-lime/70 bg-[linear-gradient(155deg,rgba(204,255,0,0.18),rgba(16,20,18,0.96)_48%,#0a0d0c)]'
                    : 'glass-dense hover:-translate-y-0.5'
                }`}
              >
                <p className="text-xs font-semibold tracking-tight text-mute lowercase">
                  {plan.duration}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-black tracking-tighter text-white lowercase sm:text-2xl">
                  {plan.title}
                </h3>
                <p className="mt-1 font-display text-2xl font-black tracking-tighter text-lime lowercase">
                  {plan.price}
                </p>
                <p
                  className="mt-2.5 text-sm leading-relaxed text-mist"
                  dangerouslySetInnerHTML={{ __html: plan.description }}
                />
                <ul className="mt-3 space-y-1.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/90">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                      <span dangerouslySetInnerHTML={{ __html: f }} />
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  disabled={locking && !isSelected}
                  onClick={() => handleSelect(plan.id)}
                  className={`touch-target mt-4 inline-flex w-full items-center justify-center rounded-[12px] px-4 text-sm font-extrabold tracking-tight transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] active:scale-[0.97] ${
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
