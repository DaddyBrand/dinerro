// "use client"

// import { motion } from "framer-motion"

// export default function Envelope({ onOpen }: { onOpen: () => void }) {
//   return (
//     <motion.div
//       onClick={onOpen}
//       initial={{ y: 0 }}
//       animate={{ y: [0, -12, 0] }}
//       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//       className="cursor-pointer relative w-64 h-40"
//     >
//       {/* Glow */}
//       <div className="absolute inset-0 rounded-xl bg-pink-500/10 blur-xl" />

//       {/* Envelope body */}
//       <div className="absolute inset-0 bg-neutral-900 border border-neutral-700 rounded-md" />

//       {/* Envelope flap */}
//       <motion.div
//         className="absolute top-0 left-0 w-full h-full origin-top"
//         initial={{ rotateX: 0 }}
//         whileHover={{ rotateX: -15 }}
//       >
//         <div
//           className="w-full h-full bg-neutral-800 border border-neutral-700"
//           style={{
//             clipPath: "polygon(0 0, 50% 50%, 100% 0, 100% 0, 0 0)",
//           }}
//         />
//       </motion.div>

//       {/* Hint */}
//       <p className="absolute bottom-2 w-full text-center text-xs text-neutral-400 font-mono">
//         click to open
//       </p>
//     </motion.div>
//   )
// }


"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Envelope({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      onClick={onOpen}
      className="relative w-72 aspect-[3/2] cursor-pointer select-none"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Soft glow */}
      <div className="absolute inset-0 rounded-xl bg-white/10 blur-2xl" />

      {/* Envelope image */}
      <Image
        src="/images/envelopewhite.png"
        alt="Envelope"
        fill
        priority
        className="object-contain drop-shadow-2xl"
      />

      {/* Subtle hover cue */}
      <motion.p
        initial={{ opacity: 0.4 }}
        whileHover={{ opacity: 0.9 }}
        className="absolute -bottom-6 w-full text-center text-xs tracking-widest text-neutral-400 font-mono"
      >
        click to open
      </motion.p>
    </motion.div>
  )
}
