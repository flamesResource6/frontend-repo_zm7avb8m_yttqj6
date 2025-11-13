import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function cn(...classes){
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(()=>{ setOpen(false) }, [location.pathname])

  const linkBase = 'relative px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors'
  const linkClass = ({ isActive }) => cn(linkBase, isActive && 'text-white')

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Glow bar */}
      <div className="pointer-events-none absolute inset-0 h-24 bg-gradient-to-b from-sky-500/20 via-cyan-400/10 to-transparent blur-xl" />

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex h-14 items-center justify-between rounded-2xl border border-white/15 bg-gradient-to-r from-sky-900/50 via-cyan-900/40 to-blue-900/50 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(14,165,233,0.35)]">
          {/* Left: Brand */}
          <Link to="/" className="ml-2 flex items-center gap-3">
            <div className="relative h-9 w-9">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-600 shadow-inner ring-1 ring-white/30" />
              <span className="absolute -inset-1 rounded-2xl bg-sky-400/25 blur-md" />
            </div>
            <span className="pr-2 text-[15px] font-semibold tracking-wide text-white">Ocean of Houses</span>
          </Link>

          {/* Center: Links */}
          <div className="hidden md:flex items-center rounded-xl bg-white/5 ring-1 ring-white/10 p-1">
            <NavLink to="/" className={linkClass}>
              <span className="relative">
                Home
                <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
              </span>
            </NavLink>
            <NavLink to="/listings" className={({isActive}) => cn(linkBase, 'group', isActive && 'text-white') }>
              <span className="relative">
                Listings
                <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
              </span>
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => cn(linkBase, 'group', isActive && 'text-white') }>
              <span className="relative">
                Contact
                <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
              </span>
            </NavLink>
            <NavLink to="/login" className={({isActive}) => cn(linkBase, 'group', isActive && 'text-white') }>
              <span className="relative">
                Login
                <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
              </span>
            </NavLink>
          </div>

          {/* Right: CTA + Mobile toggle */}
          <div className="flex items-center gap-2 pr-2">
            <Link to="/listings" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-700/30 ring-1 ring-white/20 hover:from-sky-400 hover:to-blue-500 transition-colors">
              Explore Homes
            </Link>
            <button onClick={()=>setOpen(!open)} className="md:hidden inline-flex p-2 rounded-xl bg-white/10 ring-1 ring-white/15 text-white">
              {open ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          'md:hidden overflow-hidden transition-[max-height,opacity,transform] duration-300',
          open ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
        )}>
          <div className="mt-2 rounded-2xl border border-white/15 bg-gradient-to-b from-sky-900/60 to-blue-900/60 backdrop-blur-xl p-2 shadow-[0_10px_30px_-10px_rgba(14,165,233,0.35)]">
            <NavLink to="/" className={({isActive}) => cn('block rounded-xl px-4 py-3 text-white/90 hover:text-white hover:bg-white/5', isActive && 'text-white bg-white/5')}>Home</NavLink>
            <NavLink to="/listings" className={({isActive}) => cn('block rounded-xl px-4 py-3 text-white/90 hover:text-white hover:bg-white/5', isActive && 'text-white bg-white/5')}>Listings</NavLink>
            <NavLink to="/contact" className={({isActive}) => cn('block rounded-xl px-4 py-3 text-white/90 hover:text-white hover:bg-white/5', isActive && 'text-white bg-white/5')}>Contact</NavLink>
            <NavLink to="/login" className={({isActive}) => cn('block rounded-xl px-4 py-3 text-white/90 hover:text-white hover:bg-white/5', isActive && 'text-white bg-white/5')}>Login</NavLink>
            <Link to="/listings" className="mt-2 block rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-3 text-center text-sm font-semibold text-white ring-1 ring-white/15 hover:from-sky-400 hover:to-blue-500">Explore Homes</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
