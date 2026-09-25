'use client'
import { useEffect, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// Full-screen image viewer: dark backdrop, "1 / 4" counter, arrows, close button.
// Works with mouse, keyboard (← → Esc) and phone swipe.
export default function Lightbox({ images, startIndex = 0, alt = '', onClose }) {
  const [index, setIndex] = useState(startIndex)
  const touchX = useRef(null)
  const total = images.length

  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden' // stop the page scrolling behind
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = oldOverflow
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const diff = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(diff) > 50) (diff > 0 ? prev() : next())
    touchX.current = null
  }

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} image viewer`}
    >
      {/* Top bar: counter + close */}
      <div className="absolute top-0 inset-x-0 flex items-center justify-between px-4 py-3 text-white">
        <span className="text-sm tabular-nums">{total > 1 ? `${index + 1} / ${total}` : ''}</span>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F0C040]"
          aria-label="Close"
        >
          <X size={26} />
        </button>
      </div>

      {/* Image */}
      <img
        src={images[index]}
        alt={`${alt} ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
        className="max-w-[94vw] max-h-[82vh] object-contain select-none rounded-md shadow-2xl bg-white"
        draggable={false}
      />

      {/* Arrows (hidden when only one image) */}
      {total > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F0C040]"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F0C040]"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}
    </div>
  )
}
