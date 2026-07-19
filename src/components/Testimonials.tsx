import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { TESTIMONIALS } from '../data'

export function Testimonials() {
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLUListElement>(null)
  const [dragLeft, setDragLeft] = useState(0)

  useEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current
      const track = trackRef.current
      if (!viewport || !track) return
      const max = Math.max(0, track.scrollWidth - viewport.offsetWidth)
      setDragLeft(-max)
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <section id="testimonials" className="relative overflow-hidden py-8 sm:py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 sm:mb-8 md:mb-10">
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-cyber uppercase sm:mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-champagne text-balance sm:text-4xl md:text-5xl">
            Голоса клиентов
          </h2>
          <p className="mt-2 text-sm text-mist sm:mt-3 sm:text-base">
            Свайпните или&nbsp;перетащите карусель.
          </p>
        </div>

        <div ref={viewportRef} className="overflow-hidden">
          <motion.ul
            ref={trackRef}
            drag="x"
            dragConstraints={{ left: dragLeft, right: 0 }}
            dragElastic={0.12}
            dragTransition={{ bounceStiffness: 280, bounceDamping: 28 }}
            className="flex cursor-grab gap-3 active:cursor-grabbing sm:gap-4"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.li
                key={t.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="glass-plate w-[min(84vw,340px)] shrink-0 rounded-[24px] p-5 select-none sm:w-[360px] sm:p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover brightness-90"
                    loading="lazy"
                    draggable={false}
                  />
                  <div>
                    <p className="text-sm font-semibold text-champagne">{t.name}</p>
                    <p className="text-xs text-sage">{t.role}</p>
                  </div>
                </div>
                <p
                  className="font-display text-lg leading-snug text-champagne/95 italic sm:text-xl"
                  dangerouslySetInnerHTML={{ __html: `«${t.quote}»` }}
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
