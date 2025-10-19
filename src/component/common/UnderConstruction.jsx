'use client';

import { motion } from 'framer-motion';
import HoverableText from './HoverText';

export default function UnderConstruction() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 px-6">
      {/* Rotating Gear Icon */}
      <motion.div
        className="mb-8 text-orange-500 dark:text-orange-400"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
      >
        {/* SVG gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 h-24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.983 3v2.4a6.012 6.012 0 0 0-2.53 1.11l-1.7-1.7-1.7 1.7 1.7 1.7A6.012 6.012 0 0 0 3 11.983H5.4a6.012 6.012 0 0 0 1.11 2.53l-1.7 1.7 1.7 1.7 1.7-1.7a6.012 6.012 0 0 0 2.53 1.11v2.4h2.4v-2.4a6.012 6.012 0 0 0 2.53-1.11l1.7 1.7 1.7-1.7-1.7-1.7a6.012 6.012 0 0 0 1.11-2.53h2.4v-2.4h-2.4a6.012 6.012 0 0 0-1.11-2.53l1.7-1.7-1.7-1.7-1.7 1.7a6.012 6.012 0 0 0-2.53-1.11V3h-2.4z"
          />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={1.8} />
        </svg>
      </motion.div>

      {/* Pulsing "Under Construction" Text */}
      <motion.h1
        className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight select-none"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
       <HoverableText text={' Under Construction'}/>
      </motion.h1>

      {/* Bouncing underline */}
      <motion.div
        className="h-1 w-32 bg-orange-500 rounded-full mb-8"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      />

      {/* Friendly message */}
      <motion.p
        className="max-w-xl text-center text-gray-700 dark:text-gray-300 text-lg font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        We're working hard to bring you an amazing experience. Stay tuned and check back soon!
      </motion.p>
    </main>
  );
}
