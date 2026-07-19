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
    <section id="services" className="relative py-8 sm:py-14 md:py-20">
      <div
        className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(212,175,106,0.16), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 max-w-2xl sm:mb-8 md:mb-10">
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-cyber uppercase sm:mb-3">
            Services &amp; Formats
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-champagne text-balance sm:text-4xl md:text-5xl">
            Форматы работы
          </h2>
          <p className="mt-2 text-sm text-mist sm:mt-3 sm:text-base">
            Выберите формат — автоматический переход к&nbsp;заявке через&nbsp;700&nbsp;мс.
          </p>
        </div>

        <ul className="grid gap-3 sm:gap-4 md:grid-cols-3 md:gap-5">
          {SERVICES.map((plan, i) => {
            const isSelected = selected === plan.id
            return (
              <motion.li
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden rounded-[24px] p-5 transition-[transform,box-shadow] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] sm:p-6 ${
                  isSelected
                    ? 'glow-cyber text-champagne'
                    : 'glass-plate hover:-translate-y-0.5'
                }`}
                style={
                  isSelected
                    ? {
                        background:
                          'linear-gradient(145deg, rgba(0,255,133,0.22) 0%, rgba(212,175,106,0.18) 45%, rgba(10,26,23,0.95) 100%)',
                        border: '1px solid rgba(0,255,133,0.45)',
                      }
                    : undefined
                }
              >
                <p className="text-xs font-medium tracking-[0.14em] text-sage uppercase">
                  {plan.duration}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-champagne">
                  {plan.title}
                </h3>
                <p className="mt-1 font-display text-3xl font-semibold text-gold-soft">
                  {plan.price}
                </p>
                <p
                  className="mt-3 text-sm leading-relaxed text-mist"
                  dangerouslySetInnerHTML={{ __html: plan.description }}
                />
                <ul className="mt-4 space-y-2">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-champagne/90"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyber" />
                      <span dangerouslySetInnerHTML={{ __html: f }} />
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  disabled={locking && !isSelected}
                  onClick={() => handleSelect(plan.id)}
                  className={`touch-target mt-5 inline-flex w-full items-center justify-center rounded-[12px] px-4 text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] active:scale-[0.97] ${
                    isSelected
                      ? 'bg-champagne text-onyx'
                      : 'border border-cyber/40 bg-cyber/10 text-cyber hover:bg-cyber hover:text-onyx'
                  }`}
                >
                  {isSelected ? 'Selected ✓' : 'Выбрать'}
                </button>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
