import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Bio } from './components/Bio'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Modal } from './components/Modal'
import { Footer } from './components/Footer'
import type { ServiceId } from './data'
import { IMAGES } from './data'

function App() {
  const [selected, setSelected] = useState<ServiceId | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="relative min-h-dvh bg-onyx">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `url(${IMAGES.glass})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.35) saturate(0.5)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 8% 18%, rgba(204,255,0,0.07), transparent 50%), radial-gradient(ellipse 55% 40% at 92% 78%, rgba(204,255,0,0.04), transparent 45%)',
        }}
        aria-hidden
      />

      <Header />
      <main className="relative">
        <Hero />
        <Bio />
        <Services selected={selected} onSelect={setSelected} />
        <Testimonials />
        <Contact selected={selected} onSuccess={() => setModalOpen(true)} />
      </main>
      <Footer />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default App
