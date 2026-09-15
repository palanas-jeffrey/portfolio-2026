import { useRef, useState } from 'react'

import { ScreenshotModal } from './ScreenshotModal'

export type ScreenshotThumbnailProps = {
  src: string
  alt: string
  images?: string[]
  index?: number
  onImageError?: () => void
}

export function ScreenshotThumbnail({
  src,
  alt,
  images = [src],
  index = 0,
  onImageError,
}: ScreenshotThumbnailProps) {
  const [isOpen, setIsOpen] = useState(false)
  const thumbnailRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <button
        ref={thumbnailRef}
        className="screenshot-thumbnail"
        type="button"
        aria-label={`Open ${alt}`}
        onClick={() => setIsOpen(true)}
      >
        <img src={src} alt={alt} onError={onImageError} />
      </button>
      <ScreenshotModal
        images={images}
        initialIndex={index}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        returnFocusRef={thumbnailRef}
        alt={alt}
      />
    </>
  )
}
