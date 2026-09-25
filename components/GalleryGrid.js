'use client'
import { useState } from 'react'
import { Expand } from 'lucide-react'
import Lightbox from './Lightbox'

// Shows up to 3 thumbnails; clicking any opens the full-screen viewer with ALL images.
export default function GalleryGrid({ images = [], name = '' }) {
  const [openAt, setOpenAt] = useState(null)
  if (!images.length) return null

  const shown = images.slice(0, 3)
  const extra = images.length - shown.length

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {shown.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpenAt(i)}
            className={`group relative rounded-xl overflow-hidden aspect-[16/9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C9970C] ${
              i === 2 ? 'col-span-2 sm:col-span-1' : ''
            }`}
            aria-label={`Open ${name} photo ${i + 1} of ${images.length}`}
          >
            <img
              src={img}
              alt={`${name} gallery ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute bottom-2 right-2 bg-black/55 text-white rounded-full p-1.5 opacity-90">
              <Expand size={14} />
            </span>
            {i === 2 && extra > 0 && (
              <span className="absolute inset-0 bg-black/55 flex items-center justify-center text-white font-semibold text-lg">
                +{extra} more
              </span>
            )}
          </button>
        ))}
      </div>

      {openAt !== null && (
        <Lightbox images={images} startIndex={openAt} alt={name} onClose={() => setOpenAt(null)} />
      )}
    </>
  )
}
