import { useMemo, useState } from 'react'
import PageLayout from '../components/layout/PageLayout'
import FilterBar from '../components/exposition/FilterBar'
import ProductCard from '../components/ui/ProductCard'
import { categories, exhibitors, regions } from '../data/exposition'

export default function ExpositionPage() {
  const [selectedRegion, setSelectedRegion] = useState('Toutes')
  const [selectedCategory, setSelectedCategory] = useState('Toutes')

  const filteredExhibitors = useMemo(() => {
    return exhibitors.filter((item) => {
      const matchRegion = selectedRegion === 'Toutes' || item.region === selectedRegion
      const matchCategory =
        selectedCategory === 'Toutes' || item.sector === selectedCategory
      return matchRegion && matchCategory
    })
  }, [selectedRegion, selectedCategory])

  return (
    <PageLayout>
      <FilterBar
        regions={regions}
        categories={categories}
        selectedRegion={selectedRegion}
        selectedCategory={selectedCategory}
        onRegionChange={setSelectedRegion}
        onCategoryChange={setSelectedCategory}
      />

      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filteredExhibitors.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              region={item.region}
              sector={item.sector}
              image={item.image}
            />
          ))}
        </div>

        {filteredExhibitors.length === 0 && (
          <p className="text-center text-gray-600">Aucun exposant trouvé pour ces filtres.</p>
        )}
      </section>
    </PageLayout>
  )
}
