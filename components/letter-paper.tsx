// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"
// import TypewriterText from "./typewriter-text"
// import { Home } from "lucide-react"

// export default function LetterPaper() {
//   return (

//     <motion.div
//       initial={{ opacity: 0, y: 40, scale: 0.95 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ duration: 1.4, ease: "easeOut" }}
//       className="relative w-full max-w-3xl mx-auto"
//     >

//       {/* Old torn paper */}
//       <Image
//         src="/images/oldpaper2.png"
//         alt="Old torn letter paper"
//         width={1000}
//         height={1500}
//         priority
//         className="w-full h-auto drop-shadow-2xl"
//       />

//       {/* Text over paper */}
//       <motion.div
//         initial={{ opacity: 0, filter: "blur(4px)" }}
//         animate={{ opacity: 1, filter: "blur(0px)" }}
//         transition={{ delay: 0.6, duration: 1 }}
//         className="
//           absolute inset-0
//           flex items-start justify-center
//           px-12 sm:px-10 md:px-16
//           pt-10 sm:pt-16 md:pt-20
//         "
//       >
//         <div className="w-full  max-w-prose text-[#3b2f1e] leading-[1.35] text-[0.98rem]">
//   <TypewriterText
//     speed={45}

//     text={`Dear Araya,
//       Thank you for seeing me when I didnt see myself. You loved parts of me I thought were unlovable and helped me become someone I didnt know I could be. I love you I love how I feel safe around you.

//       You are gentle, strong, and deeply caring in ways that dont always get noticed you being peace into my life just by being yourself. You matter more than you know, and the love you give is something rare, I'm grateful for you, always.

//       - me.`}
//   />
// </div>

//       </motion.div>
//     </motion.div>
//   )
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import TypewriterText from "./typewriter-text";

export default function LetterPaper() {
  return (
    <>
      {/* Fixed Home Button */}
      <Link
        href="/"
        className="
          fixed top-4 right-4
          xs:top-3 xs:right-3
          sm:top-4 sm:right-4
          md:top-6 md:right-6
          lg:top-8 lg:right-8
          z-[999]
          group
        "
      >
        <div
          className="
            flex items-center justify-center
            w-10 h-10
            xs:w-9 xs:h-9
            sm:w-10 sm:h-10
            md:w-12 md:h-12
            lg:w-14 lg:h-14
            rounded-full
            bg-[#fdf6ec]/90
            backdrop-blur-md
            shadow-[0_0_20px_rgba(59,47,30,0.2)]
            border border-[#3b2f1e]/20
            transition-all duration-300
            group-hover:scale-110
            group-hover:bg-white
          "
        >
          <Home
            className="w-5 h-5 md:w-6 md:h-6 text-[#3b2f1e]"
            strokeWidth={1.5}
          />
        </div>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative w-full max-w-3xl mx-auto"
      >
        <Image
          src="/images/oldpaper2.png"
          alt="Old torn letter paper"
          width={1000}
          height={1500}
          priority
          className="w-full h-auto drop-shadow-2xl"
        />

        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.6, duration: 1 }}
          className="
            absolute inset-0
            flex items-start justify-center
            px-12 sm:px-10 md:px-16
            pt-10 sm:pt-16 md:pt-20
          "
        >
          <div className="w-full max-w-prose text-[#3b2f1e] leading-[1.35] text-[0.98rem]">
            <TypewriterText
              speed={45}
              text={`Dear Araya,
       Thank you for seeing me when I didnt see myself. You loved parts of me I thought were unlovable and helped me become someone I didnt know I could be. I love you I love how I feel safe around you. 
      
       You are gentle, strong, and deeply caring in ways that dont always get noticed you being peace into my life just by being yourself. You matter more than you know, and the love you give is something rare, I'm grateful for you, always.
      
      - me.`}
            />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
