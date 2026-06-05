export default function ProductCard({ title, region, sector, image }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white">
      <img
        src={image}
        alt={title}
        className="h-36 w-full object-cover sm:h-44"
        loading="lazy"
      />
      <div className="flex flex-1 flex-col items-center p-3 text-center sm:p-4">
        <h3 className="mb-2 text-sm font-bold sm:text-base">{title}</h3>

        <p className="mb-1 flex items-center gap-1 text-xs sm:text-sm">
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
              fill="#EA4335"
            />
            <circle cx="12" cy="9" r="2.5" fill="#fff" />
          </svg>
          Région : {region}
        </p>

        <p
          className="mb-3 text-xs italic sm:text-sm"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Secteur : {sector}
        </p>

        <button
          type="button"
          className="mt-auto rounded bg-ochre px-6 py-2 text-xs font-medium text-black transition hover:bg-ochre-dark sm:text-sm"
        >
          Voir plus
        </button>
      </div>
    </article>
  )
}
