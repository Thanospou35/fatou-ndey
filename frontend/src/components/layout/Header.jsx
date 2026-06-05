import { NavLink } from 'react-router-dom'
import { navLinks } from '../../data/navigation'

export default function Header() {
  return (
    <header className="bg-ochre px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <nav className="flex flex-wrap items-center gap-4 sm:gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-sm font-bold text-black sm:text-base ${
                  isActive
                    ? 'border-b-4 border-white pb-0.5'
                    : 'border-b-4 border-transparent pb-0.5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="rounded-lg bg-white px-3 py-1.5 sm:px-4">
          <span className="text-sm font-bold text-black sm:text-base">Sunu </span>
          <span className="text-sm font-bold text-ochre sm:text-base" style={{ fontFamily: 'cursive' }}>
            Savoir-Faire
          </span>
        </div>
      </div>
    </header>
  )
}
