'use client'

import { useRef, useState } from 'react'
import {
  Volume2,
  VolumeX,
  ShieldCheck,
  Video,
  IndianRupee,
} from 'lucide-react'

export default function Hero() {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [videoOk, setVideoOk] = useState(true)

  const toggleSound = () => {
    if (!videoRef.current) return

    videoRef.current.muted = !videoRef.current.muted
    setMuted(videoRef.current.muted)
  }

  return (
    <section className="relative min-h-[88vh] sm:min-h-screen overflow-hidden bg-[#0B1220]">

      {/* =========================================
          VIDEO BACKGROUND
      ========================================== */}
      <div className="absolute inset-0">

        {videoOk ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
            onError={() => setVideoOk(false)}
          >
            <source src="/videos/nri-plane.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
            alt="Navi Mumbai skyline"
            className="w-full h-full object-cover"
          />
        )}

      </div>


      {/* =========================================
          VERY LIGHT VIDEO OVERLAY
          Keeps video clearly visible
      ========================================== */}
      <div className="absolute inset-0 bg-black/25" />


      {/* =========================================
          BOTTOM GRADIENT
          Makes information readable
      ========================================== */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[55%]
          bg-gradient-to-t
          from-[#0B1220]/90
          via-[#0B1220]/35
          to-transparent
        "
      />


      {/* =========================================
          SOUND BUTTON
      ========================================== */}
      {videoOk && (
        <button
          onClick={toggleSound}
          className="
            absolute
            top-24
            sm:top-28
            right-4
            sm:right-6
            z-30
            w-10
            h-10
            sm:w-11
            sm:h-11
            rounded-full
            bg-black/45
            backdrop-blur-md
            border
            border-white/25
            flex
            items-center
            justify-center
            text-white
            hover:bg-[#C9970C]/80
            hover:border-[#F0C040]
            transition-all
          "
          aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
        >
          {muted ? (
            <VolumeX size={17} />
          ) : (
            <Volume2 size={17} />
          )}
        </button>
      )}


      {/* =========================================
          INFORMATION OVERLAY
      ========================================== */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-20
          pb-8
          sm:pb-12
          lg:pb-16
        "
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

            {/* Small label */}
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#F0C040]/50
                bg-black/35
                backdrop-blur-md
                px-3
                py-1.5
                text-[#F0C040]
                text-xs
                sm:text-sm
                font-semibold
              "
            >
              🌍 BUILT EXCLUSIVELY FOR NRI INVESTORS
            </span>


            {/* Main heading */}
            <h1
              className="
                font-display
                text-3xl
                sm:text-5xl
                lg:text-6xl
                font-bold
                text-white
                leading-tight
                mt-4
              "
            >
              Own a Home in{' '}
              <span className="gold-text">
                Navi Mumbai
              </span>
            </h1>


            {/* Description */}
            


            {/* =========================================
                INFO BADGES
            ========================================== */}
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-2
                mt-5
                text-gray-200
                text-xs
                sm:text-sm
              "
            >

              <span className="flex items-center gap-1.5">
                <ShieldCheck
                  size={15}
                  className="text-[#F0C040]"
                />
                RERA Verified
              </span>

              <span className="flex items-center gap-1.5">
                <Video
                  size={15}
                  className="text-[#F0C040]"
                />
                Live Video Site Tours
              </span>

              <span className="flex items-center gap-1.5">
                <IndianRupee
                  size={15}
                  className="text-[#F0C040]"
                />
                NRE/NRO Support
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          SCROLL INDICATOR
      ========================================== */}
      <div
        className="
          absolute
          bottom-5
          right-6
          sm:right-10
          z-20
          hidden
          sm:block
        "
      >
        <div
          className="
            w-6
            h-10
            border-2
            border-white/40
            rounded-full
            flex
            justify-center
            pt-2
          "
        >
          <div className="w-1 h-2 bg-[#F0C040] rounded-full" />
        </div>
      </div>

    </section>
  )
}