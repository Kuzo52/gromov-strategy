import { CONTACTS } from '../data'

export function Footer() {
  return (
    <footer className="border-t border-champagne/10 py-5 sm:py-6" style={{ paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}>
      <p className="text-center text-sm text-sage">
        Made by{' '}
        <a
          href={CONTACTS.author}
          target="_blank"
          rel="noopener noreferrer"
          className="touch-target inline-flex items-center font-medium text-champagne transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-cyber"
        >
          @kuzoceo
        </a>
      </p>
    </footer>
  )
}
