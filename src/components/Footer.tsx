import { CONTACTS } from '../data'

export function Footer() {
  return (
    <footer
      className="border-t border-white/10 py-4 sm:py-5"
      style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      <p className="text-center text-sm text-mute">
        Made by{' '}
        <a
          href={CONTACTS.author}
          target="_blank"
          rel="noopener noreferrer"
          className="touch-target inline-flex items-center font-semibold text-white transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-lime"
        >
          @kuzoceo
        </a>
      </p>
    </footer>
  )
}
