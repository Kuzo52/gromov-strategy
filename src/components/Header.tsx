import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { scrollToId } from '../lib/scroll'

const NAV = [
  { href: 'bio', label: 'Expertise' },
  { href: 'services', label: 'Services' },
  { href: 'testimonials', label: 'Reviews' },
  { href: 'contact', label: 'Contact' },
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
          ? 'border-b border-champagne/10 bg-onyx/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-8">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            go('hero')
          }}
          className="touch-target inline-flex items-center font-display text-[1.05rem] font-semibold tracking-[0.14em] text-champagne transition-colors duration-300 hover:text-cyber sm:text-lg"
        >
          GROMOV STRATEGY
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              onClick={(e) => {
                e.preventDefault()
                go(item.href)
              }}
              className="touch-target inline-flex items-center text-sm font-medium text-mist transition-colors duration-300 hover:text-champagne"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go('contact')}
            className="glow-gold touch-target hidden items-center rounded-[12px] bg-champagne/95 px-4 text-sm font-semibold text-onyx transition-transform duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-champagne active:scale-[0.97] sm:inline-flex"
          >
            Book a Call
          </button>

          <button
            type="button"
            className="touch-target inline-flex items-center justify-center rounded-[12px] border border-champagne/15 px-3 text-champagne md:hidden"
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
            className="border-t border-champagne/10 bg-onyx/95 backdrop-blur-xl md:hidden"
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
                  className="touch-target flex items-center rounded-[12px] px-3 text-base font-medium text-champagne transition-colors hover:bg-champagne/5"
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => go('contact')}
                className="glow-gold touch-target mt-2 inline-flex items-center justify-center rounded-[12px] bg-champagne px-4 text-sm font-semibold text-onyx active:scale-[0.97]"
              >
                Book a Call
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
