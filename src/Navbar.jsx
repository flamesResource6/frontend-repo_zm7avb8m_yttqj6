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

  const linkClass = ({isActive}) => cn(
    'relative px-4 py-2 text-sm font-medium transition-colors text-slate-100/80 hover:text-white',
    isActive && 'text-white'
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/40 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="group inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-600 shadow-inner shadow-white/20 ring-1 ring-white/20 animate-pulse" />
            <span className="text-white font-semibold tracking-wide">
              Ocean of Houses
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/listings" className={linkClass}>Listings</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            <NavLink to="/login" className={linkClass}>Login</NavLink>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={()=>setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/10 ring-1 ring-white/10">
              {open ? <X size={20} className="text-white"/> : <Menu size={20} className="text-white"/>}
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className={cn('md:hidden grid gap-2 pb-4 origin-top transition-all', open ? 'opacity-100 scale-100' : 'opacity-0 -translate-y-1 pointer-events-none')}> 
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/listings" className={linkClass}>Listings</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <NavLink to="/login" className={linkClass}>Login</NavLink>
        </div>
      </nav>
    </header>
  )
}
