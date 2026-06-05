import { useState } from 'react'
import PageLayout from '../components/layout/PageLayout'
import FormInput from '../components/ui/FormInput'
import FormTextarea from '../components/ui/FormTextarea'

export default function AjouterProduitPage() {
  const [form, setForm] = useState({
    entreprise: '',
    nomProduit: '',
    description: '',
  })

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Produit soumis avec succès !')
  }

  return (
    <PageLayout>
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="relative mx-auto max-w-2xl border border-black p-6 pt-10 sm:p-8 sm:pt-12"
        >
          <h1 className="absolute -top-4 left-6 bg-white px-2 text-lg font-bold sm:text-xl">
            Ajouter un produit
          </h1>

          <div className="space-y-6">
            <FormInput
              label="Nom entreprise ou artisan :"
              id="entreprise"
              value={form.entreprise}
              onChange={handleChange('entreprise')}
              required
            />
            <FormInput
              label="Nom produits"
              id="nomProduit"
              value={form.nomProduit}
              onChange={handleChange('nomProduit')}
              required
            />
            <FormTextarea
              label="Déscription :"
              id="description"
              value={form.description}
              onChange={handleChange('description')}
              rows={8}
              required
            />

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="rounded-2xl bg-input-gray px-16 py-3 text-sm font-medium transition hover:bg-gray-300 sm:text-base"
              >
                Soumettre
              </button>
            </div>
          </div>
        </form>
      </section>
    </PageLayout>
  )
}
