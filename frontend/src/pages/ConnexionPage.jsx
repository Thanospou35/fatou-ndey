import { useState } from 'react'
import { Link } from 'react-router-dom'
import FormInput from '../components/ui/FormInput'

export default function ConnexionPage() {
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Connexion réussie !')
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <h1 className="mb-10 text-center text-2xl font-bold sm:text-3xl">Connexion</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            label="Adresse mail :"
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

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="rounded-2xl bg-input-gray px-12 py-3 text-sm font-medium transition hover:bg-gray-300 sm:text-base"
            >
              Se connecter
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm leading-relaxed sm:text-base">
          Si vous avez pas un compte créer un compte cliquez pour vous inscrire
        </p>

        <div className="mt-6 flex justify-center">
          <Link
            to="/inscription"
            className="rounded-2xl bg-input-gray px-12 py-3 text-sm font-medium transition hover:bg-gray-300 sm:text-base"
          >
            S&apos;inscrire
          </Link>
        </div>
      </div>
    </div>
  )
}
