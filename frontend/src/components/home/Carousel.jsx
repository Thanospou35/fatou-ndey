import { useState } from 'react'
import { carouselSlides } from '../../data/exposition'

export default function Carousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => {
    setCurrent((index) => (index === 0 ? carouselSlides.length - 1 : index - 1))
  }

  const next = () => {
    setCurrent((index) => (index === carouselSlides.length - 1 ? 0 : index + 1))
  }

  return (
    <section className="relative mx-auto w-full max-w-4xl overflow-hidden">
      <div className="relative aspect-[16/9] w-full sm:aspect-[2/1]">
        <img
          src={carouselSlides[current].image}
          alt={carouselSlides[current].label}
          className="h-full w-full object-cover"
        />

        <button
          type="button"
          onClick={prev}
          aria-label="Image précédente"
          className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-xl font-bold transition hover:bg-white sm:left-4 sm:h-12 sm:w-12"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Image suivante"
          className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-xl font-bold transition hover:bg-white sm:right-4 sm:h-12 sm:w-12"
        >
          ›
        </button>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {carouselSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Aller à la diapositive ${index + 1}`}
              className={`h-1 rounded-full transition-all ${
                index === current ? 'w-8 bg-white' : 'w-4 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
