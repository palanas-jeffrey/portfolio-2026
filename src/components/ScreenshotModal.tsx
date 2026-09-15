import { AnimatePresence, motion } from 'framer-motion'
import {
  useEffect,
  useRef,
  useState,
  type RefObject,
} from 'react'
import { createPortal } from 'react-dom'

export type ScreenshotModalProps = {
  images: string[]
  initialIndex?: number
  isOpen: boolean
  onClose: () => void
  returnFocusRef?: RefObject<HTMLElement | null>
  alt?: string
}

const focusableSelector =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

export function ScreenshotModal({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
  returnFocusRef,
  alt = 'Project screenshot',
}: ScreenshotModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const [activeIndex, setActiveIndex] = useState(() =>
    clampIndex(initialIndex, images.length),
  )

  useEffect(() => {
    // Reset while closed so reopening never briefly shows the previous slide.
    setActiveIndex(clampIndex(initialIndex, images.length))
  }, [images.length, initialIndex, isOpen])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    // Warm the browser cache so changing slides does not wait on a network request.
    images.forEach((imageUrl) => {
      const image = new Image()
      image.src = imageUrl
    })
  }, [images, isOpen])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    // Lock the page behind the lightbox and remember the element to restore focus to.
    const previousOverflow = document.body.style.overflow
    const returnFocusElement = returnFocusRef?.current
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      returnFocusElement?.focus()
    }
  }, [isOpen, returnFocusRef])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      // Keep Tab and Shift+Tab inside the dialog instead of reaching the page behind it.
      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        focusableSelector,
      )
      if (!focusableElements?.length) {
        event.preventDefault()
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]
      const focusIsOutsideDialog =
        !dialogRef.current?.contains(document.activeElement)

      if (focusIsOutsideDialog || (event.shiftKey && document.activeElement === firstElement)) {
        event.preventDefault()
        const targetElement = event.shiftKey ? lastElement : firstElement
        targetElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!images.length) {
    return null
  }

  const goToImage = (direction: number) => {
    setActiveIndex((currentIndex) => (currentIndex + direction + images.length) % images.length)
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="screenshot-modal-overlay"
          role="presentation"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            ref={dialogRef}
            className="screenshot-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Project screenshots"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <button
              ref={closeButtonRef}
              className="screenshot-modal-close"
              type="button"
              aria-label="Close screenshots"
              onClick={onClose}
            >
              ×
            </button>
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={images[activeIndex]}
                className="screenshot-modal-image"
                src={images[activeIndex]}
                alt={`${alt}, image ${activeIndex + 1} of ${images.length}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
              />
            </AnimatePresence>
            {images.length > 1 && (
              <>
                <button
                  className="screenshot-modal-arrow screenshot-modal-arrow-previous"
                  type="button"
                  aria-label="Previous image"
                  onClick={() => goToImage(-1)}
                >
                  &larr;
                </button>
                <button
                  className="screenshot-modal-arrow screenshot-modal-arrow-next"
                  type="button"
                  aria-label="Next image"
                  onClick={() => goToImage(1)}
                >
                  &rarr;
                </button>
                <p className="screenshot-modal-counter" aria-live="polite">
                  {activeIndex + 1} / {images.length}
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

function clampIndex(index: number, length: number) {
  return Math.min(Math.max(index, 0), Math.max(length - 1, 0))
}
