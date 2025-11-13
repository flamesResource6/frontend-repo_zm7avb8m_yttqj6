import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'

function cn(...classes){
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const location = useLocation()

  useEffect(()=>{
    if(dark){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },[dark])

  useEffect(()=>{ setOpen(false) }, [location.pathname])

  const linkClass = ({isActive}) => cn(
    'relative px-4 py-2 text-sm font-medium transition-colors',
    'text-slate-700/80 hover:text-slate-900 dark:text-slate-300/80 dark:hover:text-white',
    isActive && 'text-sky-600 dark:text-sky-400'
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/50 dark:bg-slate-900/40 border-b border-white/20 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="group inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-600 shadow-inner shadow-white/40 ring-1 ring-white/40 dark:ring-white/10 animate-pulse" />
            <span className="text-slate-900 dark:text-white font-semibold tracking-wide">
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
            <button aria-label="toggle theme" onClick={()=>setDark(!dark)} className="p-2 rounded-lg bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 transition ring-1 ring-black/5 dark:ring-white/10">
              {dark ? <Sun size={18} className="text-yellow-300"/> : <Moon size={18} className="text-slate-700"/>}
            </button>
            <button onClick={()=>setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/60 dark:bg-white/10 ring-1 ring-black/5 dark:ring-white/10">
              {open ? <X size={20}/> : <Menu size={20}/>}
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
