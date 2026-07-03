import { motion } from 'framer-motion'

export default function SkillPill({ label, delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.07, borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}
      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase cursor-default transition-colors duration-200"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        color: 'rgba(255,255,255,0.38)',
      }}
    >
      {label}
    </motion.span>
  )
}
