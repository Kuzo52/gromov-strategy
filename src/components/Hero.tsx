import { motion } from 'framer-motion'
import { IMAGES } from '../data'
import { scrollToId } from '../lib/scroll'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-end overflow-hidden pb-8 pt-20 sm:items-center sm:pb-16 sm:pt-24 md:pb-20"
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
            'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(0,255,133,0.08), transparent 55%), linear-gradient(180deg, rgba(4,13,12,0.55) 0%, rgba(4,13,12,0.78) 45%, #040D0C 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(0,255,133,0.18), transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3 font-display text-sm font-semibold tracking-[0.22em] text-gold-soft sm:mb-5 sm:text-base"
        >
          MARK GROMOV · STRATEGY ADVISORY
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[2.35rem] leading-[1.05] font-semibold tracking-tight text-champagne text-balance sm:text-5xl md:text-6xl lg:text-[4.5rem]"
        >
          Scale Your Vision.
          <br />
          Systematize Your Success.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-xl text-base leading-relaxed text-mist sm:mt-6 sm:text-lg"
        >
          Стратегический консалтинг для&nbsp;фаундеров, инвесторов и&nbsp;топ-менеджеров.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8"
        >
          <button
            type="button"
            onClick={() => scrollToId('services')}
            className="glow-cyber touch-target inline-flex items-center justify-center rounded-[12px] bg-cyber px-6 text-sm font-semibold tracking-wide text-onyx transition-transform duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] hover:brightness-110 active:scale-[0.97] sm:px-7 sm:text-base"
          >
            Start Consultation
          </button>
        </motion.div>
      </div>
    </section>
  )
}
