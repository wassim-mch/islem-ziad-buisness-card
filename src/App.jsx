import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, MessageCircle, Music2, Palette, Aperture } from 'lucide-react'
import LinkButton from './components/LinkButton'
import Noise from './components/Noise'

/* ─── LINKS ─────────────────────────────────────────────────────── */
const LINKS = [
  { href: 'https://www.instagram.com/islem_zd', icon: Instagram, label: 'Instagram — @islem_zd', color: '#E1306C' },
  { href: 'https://wa.me/213557865893', icon: MessageCircle, label: 'WhatsApp — Contactez-moi', color: '#25D366' },
  { href: 'https://www.tiktok.com/@islem.ziad26', icon: Music2, label: 'TikTok — @islem.ziad26', color: '#ffffff' },
  { href: 'https://www.pinterest.com', icon: Palette, label: 'Pinterest — Inspirations', color: '#E60023' },
  { href: 'https://www.behance.net/Zd_islem', icon: Aperture, label: 'Behance — Portfolio', color: '#1769FF' },
]

/* ─── MORPHING WORDS ─────────────────────────────────────────────── */
const WORDS = [
  'Brand Identity', 'Logo Design', 'Packaging',
  'Visual Identity', 'Creative Direction', 'Minimal Design',
  'Print Design', 'Digital Design',
]

function MorphWord() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % WORDS.length), 2200)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="h-8 overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 18, opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -18, opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm font-semibold tracking-widest uppercase"
          style={{ color: '#ffffff' }}
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

/* ─── LOGO IMAGE — sans carré, juste l'image ─────────────────────── */
function LogoImg({
  src = "/logo-white.svg",
  style = {},
  className = "w-24 h-24",
}) {
  return (
    <div className={className} style={style}>
      <img
        src={src}
        alt="ISLEM ZIAD"
        className="w-full h-full object-contain"
      />
    </div>
  )
}

/* ─── LOADER — phase 1: blanc → phase 2: noir ───────────────────── */
function Loader({ onDone }) {
  const [phase, setPhase] = useState(1)
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(2), 1300)
    const t2 = setTimeout(onDone, 2700)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  return (
    <AnimatePresence mode="wait">
      {phase === 1 ? (
        /* PHASE 1 : fond blanc, logo original (noir sur blanc) */
        <motion.div
          key="phase1"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6"
          style={{ background: '#ffffff' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.65 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Logo original — fond blanc, .Zi noir naturellement */}
            <LogoImg
      src="/logo-dark.svg"
      className="w-28 h-28"
    />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-1"
          >
            <p className="text-xs tracking-[0.28em] uppercase font-medium" style={{ color: 'rgba(0,0,0,0.65)' }}>
              Loading Links
            </p>
            <p className="text-xs tracking-[0.35em] uppercase font-light" style={{ color: 'rgba(0,0,0,0.3)' }}>
              Graphic Designer
            </p>
          </motion.div>

          <motion.div
            className="w-36 h-px overflow-hidden rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ background: 'rgba(0,0,0,0.08)' }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'rgba(0,0,0,0.45)' }}
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.1, delay: 0.55, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>

      ) : (
        /* PHASE 2 : fond noir, logo inversé (blanc sur noir) */
        <motion.div
          key="phase2"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6"
          style={{ background: '#000000' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.45, ease: [0.7, 0, 0.84, 0] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Logo inversé — fond noir, .Zi blanc */}
            <LogoImg
  src="/logo-white.svg"
  className="w-28 h-28"
/>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-1"
          >
            <p className="text-xs tracking-[0.28em] uppercase font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Loading Portfolio...
            </p>
            <p className="text-xs tracking-[0.35em] uppercase font-light" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Graphic Designer
            </p>
          </motion.div>

          <motion.div
            className="w-36 h-px overflow-hidden rounded-full"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'rgba(255,255,255,0.7)' }}
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.0, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ─── APP ────────────────────────────────────────────────────────── */
export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <Noise />

      {/* BG watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0" aria-hidden="true">
        <img
        src="/logo-white.svg"
        alt=""
        className="w-[60vmin] h-[60vmin] object-contain select-none"
        style={{
          opacity: 0.025
        }}
      />
      </div>

      {/* LOADER */}
      <AnimatePresence>
        {!loaded && <Loader onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      {/* MAIN */}
      <AnimatePresence>
        {loaded && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative z-10 flex flex-col items-center justify-center w-full h-full px-5"
          >
            <div className="w-full max-w-sm flex flex-col items-center gap-5">

              {/* LOGO — sans carré, sans border, juste l'image inversée */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <LogoImg
  src="/logo-white.svg"
  className="w-20 h-20"
/>
                {/* Online dot */}
                <span
                  className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-black"
                  style={{ background: '#22c55e' }}
                />
              </motion.div>

              {/* NOM + DESCRIPTION + MORPHING */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-center space-y-2"
              >
                <h1 className="text-2xl font-bold tracking-tight" style={{ color: '#ffffff' }}>
                  ISLEM ZIAD
                </h1>
                <p className="text-sm font-light leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Designer Graphique Digital &amp; Print.
                </p>
                <MorphWord />
              </motion.div>

              {/* DIVIDER */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.32 }}
                className="w-full h-px"
                style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)' }}
              />

              {/* LINK BUTTONS */}
              <div className="w-full flex flex-col gap-2.5">
                {LINKS.map((link, i) => (
                  <LinkButton key={link.label} {...link} delay={0.36 + i * 0.07} />
                ))}
              </div>

              {/* FOOTER */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.85 }}
                className="text-xs tracking-widest font-light"
                style={{ color: '#ffffff' }}
              >
                © 2026 ISLEM ZIAD
              </motion.p>

            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}