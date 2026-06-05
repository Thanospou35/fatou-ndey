import { Link } from 'react-router-dom'
import { contactInfo } from '../../data/contact'
import { navLinks } from '../../data/navigation'

function ContactIcon({ type }) {
  if (type === 'location') {
    return (
      <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
          fill="#EA4335"
        />
        <circle cx="12" cy="9" r="2.5" fill="#fff" />
      </svg>
    )
  }

  if (type === 'phone') {
    return (
      <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
          fill="#34A853"
        />
      </svg>
    )
  }

  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
        fill="#4285F4"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ochre px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <ContactIcon type="location" />
                <span>Adresse: {contactInfo.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <ContactIcon type="phone" />
                <span>Téléphone : {contactInfo.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <ContactIcon type="email" />
                <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Lien rapide</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-sm">Copyright Mai 2026</p>
      </div>
    </footer>
  )
}
