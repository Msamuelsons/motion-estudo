import './App.css'
import { motion, useTime, useTransform } from 'framer-motion'

export default function Aula01() {
  const time = useTime()
  const rotate = useTransform(time, [1, 0], [1, 0], { clamp: false })
  return (
    <div className="content">
      <motion.div
        className="main"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.4 }}
      />
      <motion.div
        className="main"
        whileHover={{ scale: 0.7 }}
        transition={{ ease: 'easeOut', duration: 3 }}
      />

      <motion.div
        className="main"
        animate={{ scaleX: [0, 1.2, 0], scaleY: [1, 1, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatDelay: 1,
        }}
      />
      <motion.div
        className="main"
        animate={{ x: [0, 50, 0] }}
        transition={{
          ease: 'easeOut',
          duration: 2,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />
      <motion.div
        className="main"
        style={{ marginLeft: 50 }}
        animate={{
          x: 0,
          backgroundColor: 'rgb(48, 38, 87)',
          transitionEnd: { backgroundColor: 'initial' },
          boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
        }}
        transition={{
          ease: 'easeInOut',
          duration: 1.7,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <motion.div className="main-2" style={{ rotate }} />
    </div>
  )
}
