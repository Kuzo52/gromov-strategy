import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface ModalProps {
  open: boolean
  onClose: () => void
}

export function Modal({ open, onClose }: ModalProps) {
  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          style={{
            paddingTop: 'env(safe-area-inset-top)',
            paddingBottom: 'env(safe-area-inset-bottom)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        >
          <button
            type="button"
            aria-label="Закрыть окно"
            className="absolute inset-0 bg-onyx/75 backdrop-blur-xl"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="thanks-title"
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-md overflow-hidden rounded-[24px] border border-white/12 bg-pine/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-8"
          >
            <div
              className="pointer-events-none absolute -top-16 right-0 h-40 w-40 rounded-full opacity-60 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(204,255,0,0.28), transparent 70%)',
              }}
              aria-hidden
            />

            <p className="text-sm font-medium text-mist">Заявка принята</p>
            <h2
              id="thanks-title"
              className="mt-3 font-display text-2xl font-black tracking-tighter text-white lowercase text-balance sm:text-3xl"
            >
              спасибо за&nbsp;заявку! марк свяжется с&nbsp;вами в&nbsp;ближайшее время.
            </h2>
            <p className="mt-3 text-sm font-normal leading-relaxed text-mist">
              Мы&nbsp;уже получили ваши данные и&nbsp;свяжемся для&nbsp;подтверждения разбора.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="touch-target mt-6 inline-flex w-full items-center justify-center rounded-[12px] bg-lime px-4 text-sm font-semibold text-onyx transition-transform duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] hover:brightness-110 active:scale-[0.97]"
            >
              Закрыть
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
