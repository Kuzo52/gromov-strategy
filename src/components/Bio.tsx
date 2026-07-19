import { motion } from 'framer-motion'
import { CREDENTIALS, IMAGES } from '../data'

export function Bio() {
  return (
    <section id="bio" className="relative py-8 sm:py-14 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${IMAGES.marble})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.35) saturate(0.7)',
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-onyx via-onyx/95 to-onyx" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-6 px-4 sm:gap-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8">
        <div>
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-cyber uppercase sm:mb-3">
            Bio &amp; Credentials
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-champagne text-balance sm:text-4xl md:text-5xl">
            Mark Gromov
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-mist sm:mt-4 sm:text-base">
            Советник по&nbsp;масштабированию для&nbsp;компаний, где ставка — скорость без&nbsp;потери
            контроля. Соединяет стратегию, капитал и&nbsp;операционную систему роста.
          </p>

          <div className="relative mt-5 overflow-hidden rounded-[20px] sm:mt-7">
            <img
              src={IMAGES.bio}
              alt="Минималистичная архитектура делового центра"
              className="aspect-[16/10] w-full object-cover brightness-[0.55] contrast-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent" />
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {CREDENTIALS.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-plate rounded-[20px] p-4 transition-[box-shadow,border-color,transform] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-cyber/50 hover:shadow-[0_0_0_1px_rgba(0,255,133,0.35),0_0_32px_rgba(0,255,133,0.18)] sm:p-5"
            >
              <p className="text-xs font-medium tracking-[0.16em] text-sage uppercase">{item.label}</p>
              <p className="mt-2 font-display text-3xl font-semibold text-champagne sm:text-4xl">
                {item.value}
              </p>
              <p
                className="mt-2 text-sm leading-relaxed text-mist"
                dangerouslySetInnerHTML={{ __html: item.detail }}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
