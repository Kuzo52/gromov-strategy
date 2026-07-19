import { motion } from 'framer-motion'
import { CREDENTIALS, IMAGES } from '../data'

export function Bio() {
  return (
    <section id="bio" className="relative section-y">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url(${IMAGES.marble})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3) saturate(0.55)',
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-onyx via-onyx/95 to-onyx" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        <div>
          <p className="mb-3 text-sm font-medium text-mist">Обо мне</p>
          <h2 className="font-display text-3xl font-black tracking-tighter text-white lowercase text-balance sm:text-4xl md:text-5xl">
            марк громов
          </h2>
          <p className="mt-4 max-w-lg text-base font-normal leading-relaxed text-mist sm:mt-5">
            Стратег по&nbsp;масштабированию для&nbsp;компаний, где нужна скорость без&nbsp;потери
            контроля. Выстраиваю систему прибыли, команды и&nbsp;управляемости.
          </p>

          <div className="relative mt-6 overflow-hidden rounded-[20px] sm:mt-8">
            <img
              src={IMAGES.bio}
              alt="Минималистичная архитектура делового центра"
              className="aspect-[16/10] w-full object-cover brightness-[0.5] contrast-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent" />
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {CREDENTIALS.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="glass-dense rounded-[20px] p-5 transition-[box-shadow,border-color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-lime/60 hover:shadow-[0_0_0_1px_rgba(204,255,0,0.45),0_0_36px_rgba(204,255,0,0.18)] sm:p-6"
            >
              <p className="text-sm font-medium text-mute">{item.label}</p>
              <p className="mt-2 font-display text-2xl font-black tracking-tighter text-lime sm:text-3xl">
                {item.value}
              </p>
              <p
                className="mt-2 text-sm font-normal leading-relaxed text-mist"
                dangerouslySetInnerHTML={{ __html: item.detail }}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
