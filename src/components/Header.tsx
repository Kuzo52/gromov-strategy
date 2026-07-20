import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { scrollToId } from '../lib/scroll'

const NAV = [
  { href: 'bio', label: 'Обо мне' },
  { href: 'services', label: 'Услуги' },
  { href: 'testimonials', label: 'Отзывы' },
  { href: 'contact', label: 'Контакт' },
] as const

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (id: string) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        scrolled || open
          ? 'border-b border-white/10 bg-onyx/75 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            go('hero')
          }}
          className="touch-target inline-flex items-center font-display text-sm font-extrabold tracking-tighter text-white transition-colors duration-300 hover:text-lime sm:text-base"
        >
          Gromov Strategy
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              onClick={(e) => {
                e.preventDefault()
                go(item.href)
              }}
              className="touch-target inline-flex items-center text-sm font-medium text-mist transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go('contact')}
            className="glow-lime touch-target hidden items-center rounded-[12px] bg-lime px-4 text-sm font-semibold text-onyx transition-transform duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] hover:brightness-110 active:scale-[0.97] sm:inline-flex"
          >
            Записаться
          </button>

          <button
            type="button"
            className="touch-target inline-flex items-center justify-center rounded-[12px] border border-white/15 px-3 text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-[1.5px] w-full bg-current transition-opacity duration-200 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-white/10 bg-onyx/95 backdrop-blur-md md:hidden"
            aria-label="Мобильная навигация"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  onClick={(e) => {
                    e.preventDefault()
                    go(item.href)
                  }}
                  className="touch-target flex items-center rounded-[12px] px-3 text-base font-medium text-white transition-colors hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => go('contact')}
                className="glow-lime touch-target mt-2 inline-flex items-center justify-center rounded-[12px] bg-lime px-4 text-sm font-semibold text-onyx active:scale-[0.97]"
              >
                Записаться
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
