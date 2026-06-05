import { useState } from 'react'
import PageLayout from '../components/layout/PageLayout'
import FormInput from '../components/ui/FormInput'

export default function InscriptionPage() {
  const [form, setForm] = useState({
    entreprise: '',
    email: '',
    password: '',
    telephone: '',
    region: '',
    ninea: '',
    cni: '',
    documents: null,
  })

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleFileChange = (e) => {
    setForm((prev) => ({ ...prev, documents: e.target.files[0] ?? null }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Inscription envoyée avec succès !')
  }

  return (
    <PageLayout>
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed sm:text-base">
          <p>
            Rejoignez la vitrine de l&apos;excellence sénégalaise. Pour être éligible, vous devez
            remplir les critères suivants :
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>Etre une entreprise Sénégalaise ou un artisan</strong>
            </li>
            <li>
              <strong>Avoir une propriété au nom de l&apos;entreprise</strong>
            </li>
            <li>
              <strong>
                Etre transparent : Les informations fournies doivent être exactes
              </strong>
            </li>
          </ul>
          <p>
            Si vous remplissez ces conditions, veuillez remplir le formulaire ci-dessous.
          </p>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-3xl space-y-5 rounded-xl border border-gray-300 p-6 sm:p-8"
        >
          <FormInput
            label="Nom entreprise ou artisan :"
            id="entreprise"
            value={form.entreprise}
            onChange={handleChange('entreprise')}
            required
          />
          <FormInput
            label="Email :"
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange('email')}
            required
          />
          <FormInput
            label="Mot de passe :"
            id="password"
            type="password"
            value={form.password}
            onChange={handleChange('password')}
            required
          />
          <FormInput
            label="Téléphone :"
            id="telephone"
            type="tel"
            value={form.telephone}
            onChange={handleChange('telephone')}
            required
          />
          <FormInput
            label="Région :"
            id="region"
            value={form.region}
            onChange={handleChange('region')}
            required
          />
          <FormInput
            label="Numéro NINEA :"
            id="ninea"
            value={form.ninea}
            onChange={handleChange('ninea')}
            required
          />
          <FormInput
            label="Numéro d'Identification Nationale (CNI) :"
            id="cni"
            value={form.cni}
            onChange={handleChange('cni')}
            required
          />

          <div>
            <label htmlFor="documents" className="mb-2 block text-sm font-bold sm:text-base">
              Vos Documents(NINEA et CNI):
            </label>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <label
                htmlFor="documents"
                className="inline-block cursor-pointer rounded-lg border-2 border-ochre bg-white px-4 py-2 text-center text-sm font-medium transition hover:bg-ochre/10 sm:text-base"
              >
                Choisir un fichier
              </label>
              <input
                id="documents"
                type="file"
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
              />
              <span className="text-sm text-gray-600">
                {form.documents ? form.documents.name : 'Aucun fichier sélectionné'}
              </span>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="rounded-lg border-2 border-ochre bg-white px-12 py-3 text-sm font-medium transition hover:bg-ochre/10 sm:text-base"
            >
              Envoyer
            </button>
          </div>
        </form>
      </section>
    </PageLayout>
  )
}
