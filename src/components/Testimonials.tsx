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
    const id = window.requestAnimationFrame(measure)
    window.addEventListener('resize', measure)
    return () => {
      window.cancelAnimationFrame(id)
      window.removeEventListener('resize', measure)
    }
  }, [])

  return (
    <section id="testimonials" className="relative overflow-hidden section-y">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="section-head">
          <p className="mb-3 text-sm font-medium text-mist">Отзывы</p>
          <h2 className="font-display text-3xl font-black tracking-tighter text-white lowercase text-balance sm:text-4xl md:text-5xl">
            что говорят клиенты
          </h2>
          <p className="mt-4 text-base font-normal text-mist">
            Свайпните или&nbsp;перетащите карусель.
          </p>
        </div>

        <div ref={viewportRef} className="touch-pan-y overflow-hidden">
          <motion.ul
            ref={trackRef}
            drag="x"
            dragConstraints={{ left: dragLeft, right: 0 }}
            dragElastic={0.14}
            dragTransition={{ bounceStiffness: 260, bounceDamping: 26 }}
            className="flex cursor-grab gap-3 active:cursor-grabbing sm:gap-4"
            style={{ touchAction: 'pan-y' }}
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.li
                key={t.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="glass-dense w-[min(86vw,320px)] shrink-0 rounded-[24px] p-5 select-none sm:w-[340px] sm:p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-11 w-11 rounded-full object-cover brightness-90"
                    loading="lazy"
                    draggable={false}
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs font-medium text-mute">{t.role}</p>
                  </div>
                </div>
                <p
                  className="text-base font-normal leading-relaxed text-white/90"
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
