import { motion } from 'framer-motion'
import { HERO_METRICS, IMAGES } from '../data'
import { scrollToId } from '../lib/scroll'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-end overflow-hidden pt-20 pb-10 sm:items-center sm:pt-24 sm:pb-16 md:pb-24"
    >
      <img
        src={IMAGES.hero}
        alt="Премиальный офисный интерьер"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 75% 35%, rgba(204,255,0,0.10), transparent 55%), linear-gradient(180deg, rgba(10,13,12,0.55) 0%, rgba(10,13,12,0.82) 48%, #0A0D0C 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full opacity-50 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(204,255,0,0.16), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3 text-sm font-medium text-mist sm:mb-4 sm:text-base"
        >
          Mark Gromov · стратегия роста
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[2.15rem] leading-[1.05] font-black tracking-tighter text-white lowercase text-balance sm:text-5xl md:text-6xl lg:text-7xl"
        >
          масштабирование бизнеса.
          <br />
          система работает за&nbsp;тебя.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-2xl text-base font-normal leading-relaxed text-mist sm:mt-6 sm:text-lg"
        >
          Стратегический консалтинг для&nbsp;основателей компаний, инвесторов и&nbsp;топ-менеджеров.
          Увеличиваем чистую прибыль и&nbsp;убираем хаос из&nbsp;операционки.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8"
        >
          <button
            type="button"
            onClick={() => scrollToId('contact')}
            className="glow-lime touch-target inline-flex items-center justify-center rounded-[12px] bg-lime px-6 text-sm font-semibold text-onyx transition-transform duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] hover:brightness-110 active:scale-[0.97] sm:px-7 sm:text-base"
          >
            Записаться на разбор
          </button>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 grid grid-cols-1 gap-3 border-t border-white/10 pt-6 sm:mt-10 sm:grid-cols-3 sm:gap-4 sm:pt-8"
        >
          {HERO_METRICS.map((m) => (
            <li key={m.value} className="glass-dense rounded-[16px] px-4 py-4 sm:rounded-[20px] sm:px-5 sm:py-5">
              <p className="font-display text-xl font-black tracking-tighter text-lime sm:text-2xl">
                {m.value}
              </p>
              <p
                className="mt-2 text-sm font-normal leading-snug text-mist"
                dangerouslySetInnerHTML={{ __html: m.label }}
              />
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
