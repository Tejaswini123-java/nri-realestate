'use client'
import { useState } from 'react'
import { Expand } from 'lucide-react'
import Lightbox from './Lightbox'

// Floor plan shown in full (no cropping). Tap/click to open it full-screen.
// Pass one image as `src`, or several as `images` (e.g. 2 BHK, 3 BHK plans).
export default function FloorPlanImage({ src, images, name = '' }) {
  const [openAt, setOpenAt] = useState(null)
  const list = images?.length ? images : src ? [src] : []
  if (!list.length) return null

  return (
    <>
      <button
        type="button"
        onClick={() => setOpenAt(0)}
        className="group relative block w-full rounded-xl overflow-hidden border border-gray-100 bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9970C]"
        aria-label={`Open ${name} floor plan full screen`}
      >
        <img src={list[0]} alt={`${name} site and floor plan`} className="w-full h-auto" />
        <span className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/60 text-white text-xs font-medium rounded-full px-3 py-1.5">
          <Expand size={13} /> Tap to enlarge
        </span>
      </button>

      {openAt !== null && (
        <Lightbox images={list} startIndex={openAt} alt={`${name} floor plan`} onClose={() => setOpenAt(null)} />
      )}
    </>
  )
}
