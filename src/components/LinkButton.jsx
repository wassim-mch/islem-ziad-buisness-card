import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function LinkButton({ href, icon: Icon, label, color, delay = 0 }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 18, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="glass-btn relative flex items-center gap-3 w-full px-5 py-4 rounded-2xl cursor-pointer no-underline group overflow-hidden"
      style={{ color: '#fff' }}
    >
      {/* Icon container */}
      <span
        className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
        style={{ background: color + '22', border: `1px solid ${color}33` }}
      >
        <Icon size={20} style={{ color }} strokeWidth={1.8} />
      </span>

      {/* Label */}
      <span className="flex-1 text-sm font-medium tracking-wide text-white/80 group-hover:text-white transition-colors duration-200">
        {label}
      </span>

      {/* Arrow */}
      <motion.span
        className="opacity-0 group-hover:opacity-100 text-white/40"
        initial={{ x: -4, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowUpRight size={15} strokeWidth={1.5} />
      </motion.span>

      {/* Shimmer */}
      <motion.span
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)',
          backgroundSize: '200% 100%',
          backgroundPosition: '100%',
        }}
        whileHover={{ backgroundPosition: '-100%' }}
        transition={{ duration: 0.5 }}
      />
    </motion.a>
  )
}
