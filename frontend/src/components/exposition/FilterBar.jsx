export default function FilterBar({
  regions,
  categories,
  selectedRegion,
  selectedCategory,
  onRegionChange,
  onCategoryChange,
}) {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-xl font-bold sm:text-2xl">Filtres</h2>

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <div className="relative flex-1">
            <select
              value={selectedRegion}
              onChange={(e) => onRegionChange(e.target.value)}
              className="w-full appearance-none rounded-lg bg-filter-bg px-4 py-3 pr-10 text-sm font-medium outline-none sm:text-base"
              aria-label="Filtrer par région"
            >
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region === 'Toutes' ? 'Par Région' : region}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm">
              ▼
            </span>
          </div>

          <div className="relative flex-1">
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full appearance-none rounded-lg bg-filter-bg px-4 py-3 pr-10 text-sm font-medium outline-none sm:text-base"
              aria-label="Filtrer par catégorie"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'Toutes' ? 'Par Catégorie' : category}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm">
              ▼
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
