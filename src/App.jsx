import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import Navbar from './Navbar'

function PageTransition({ children }){
  const variants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -12, transition: { duration: 0.4, ease: [0.4, 0, 1, 1] } }
  }
  return (
    <motion.main variants={variants} initial="initial" animate="animate" exit="exit" className="pt-16">
      {children}
    </motion.main>
  )
}

function Hero(){
  return (
    <section className="relative h-[82vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Overlay gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(56,189,248,0.25),transparent)]" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22,1,0.36,1] }} className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-sky-200 via-cyan-200 to-blue-400 drop-shadow-[0_0_25px_rgba(56,189,248,0.25)]">
            Ocean of Houses
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9, ease: [0.22,1,0.36,1] }} className="mt-5 max-w-2xl text-sky-100/80 text-lg md:text-xl">
            A cinematic, futuristic real estate experience. Discover premium properties with fluid interactions and ocean-inspired motion.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.9 }} className="mt-8 flex flex-wrap gap-4">
            <a href="#featured" className="group inline-flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur-md px-6 py-3 text-white ring-1 ring-white/20 transition hover:bg-white/20">
              <span className="relative">
                Explore Listings
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-sky-400 to-cyan-300 transition-all group-hover:w-full"/>
              </span>
            </a>
            <a href="/contact" className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-600 px-6 py-3 text-white shadow-lg shadow-sky-500/30 transition hover:scale-[1.02]">
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Card = ({item}) => (
  <motion.div whileHover={{ rotateX: 6, rotateY: -6, y: -4 }} whileTap={{ scale: 0.98 }} className="group relative rounded-2xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 p-4 overflow-hidden">
    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-sky-400/10 via-cyan-300/10 to-transparent"/>
    <img src={item.image} alt="" className="h-48 w-full object-cover rounded-xl"/>
    <div className="mt-4 flex items-center justify-between">
      <div>
        <h3 className="text-white font-semibold tracking-wide">{item.title}</h3>
        <p className="text-sky-200/80 text-sm">{item.location}</p>
      </div>
      <p className="text-sky-300 font-semibold">${'{'}item.price.toLocaleString(){'}'}</p>
    </div>
  </motion.div>
)

function Landing(){
  const featured = [
    { title: 'Azure Point Villa', price: 2450000, location: 'Malibu, CA', image: 'https://images.unsplash.com/photo-1688680976459-3722d88ec775?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBenVyZSUyMFBvaW50JTIwVmlsbGF8ZW58MHwwfHx8MTc2MzAyMzU5M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { title: 'Neptune Penthouse', price: 3950000, location: 'Miami, FL', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Tidal Glass House', price: 3180000, location: 'Big Sur, CA', image: 'https://images.unsplash.com/photo-1688680976459-3722d88ec775?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBenVyZSUyMFBvaW50JTIwVmlsbGF8ZW58MHwwfHx8MTc2MzAyMzU5M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  ]
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      {/* flowing wave bg */}
      <div className="relative" id="featured">
        <div className="absolute inset-0 -z-0 pointer-events-none opacity-60">
          <div className="absolute -top-24 left-0 right-0 h-72 blur-3xl bg-[radial-gradient(60%_40%_at_50%_0%,rgba(56,189,248,0.25),transparent)]"/>
          <div className="absolute top-40 -left-20 h-80 w-80 rounded-full blur-3xl bg-sky-500/20"/>
          <div className="absolute bottom-20 -right-10 h-80 w-80 rounded-full blur-3xl bg-cyan-400/20"/>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-semibold">
            Featured Properties
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-3 text-sky-200/70 max-w-2xl">
            3D-hover cards with glowing edges and soft depth.
          </motion.p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((f, i) => (
              <Card key={i} item={f}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Listings(){
  const data = [
    { title: 'Coral Bay Residence', price: 1250000, location: 'San Diego, CA', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Aqua Ridge Estate', price: 2890000, location: 'Laguna Beach, CA', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Marina Sky Loft', price: 980000, location: 'Seattle, WA', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Pearl Shore Cottage', price: 760000, location: 'Charleston, SC', image: 'https://images.unsplash.com/photo-1720106677516-1a7e514d4e35?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb3JhbCUyMEJheSUyMFJlc2lkZW5jZXxlbnwwfDB8fHwxNzYzMDIzNTk0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { title: 'Triton Modern Home', price: 1870000, location: 'Honolulu, HI', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Luminous Reef Villa', price: 3320000, location: 'Kailua, HI', image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1400&auto=format&fit=crop' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      <div className="relative pt-24 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-semibold">Explore Listings</motion.h1>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {['All','Villa','Penthouse','Loft','Cottage','Estate'].map((f,i) => (
              <button key={i} className="rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-4 py-2 text-sm transition">
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, i)=> (
              <Card key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Contact(){
  return (
    <div className="min-h-screen relative bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 animate-[pulse_8s_ease-in-out_infinite] bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(59,130,246,0.15),transparent)]"/>
        <div className="absolute -bottom-10 -left-10 h-80 w-80 rounded-full blur-3xl bg-sky-500/20"/>
        <div className="absolute top-40 -right-10 h-80 w-80 rounded-full blur-3xl bg-cyan-400/20"/>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-semibold">Contact Us</motion.h1>
        <p className="mt-2 text-sky-200/80 max-w-2xl">
          We’re here to help you find your next home. Send a message and our concierge team will reach out.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2">
            <form className="rounded-2xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-sky-200">Name</label>
                  <input className="mt-2 w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 outline-none focus:ring-sky-400/40 placeholder:text-sky-200/50" placeholder="Jane Doe"/>
                </div>
                <div>
                  <label className="text-sm text-sky-200">Email</label>
                  <input type="email" className="mt-2 w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 outline-none focus:ring-cyan-400/40 placeholder:text-sky-200/50" placeholder="jane@ocean.com"/>
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm text-sky-200">Message</label>
                  <textarea rows="5" className="mt-2 w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 outline-none focus:ring-blue-400/40 placeholder:text-sky-200/50" placeholder="Tell us what you’re looking for..."/>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <button type="submit" className="rounded-xl bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-600 px-6 py-3 text-white shadow-lg shadow-sky-500/30 transition hover:scale-[1.02]">
                  Send Message
                </button>
                <p className="text-sky-200/70 text-sm">Our team replies within 24 hours</p>
              </div>
            </form>
          </motion.div>
          <div className="space-y-6 opacity-90">
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <p className="text-sky-200/80">Email</p>
              <p className="text-white font-semibold">hello@oceanofhouses.com</p>
            </div>
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <p className="text-sky-200/80">Phone</p>
              <p className="text-white font-semibold">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Login(){
  return (
    <div className="min-h-screen bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(59,130,246,0.2),transparent)] from-slate-950 to-slate-900 bg-slate-950 text-white flex items-center justify-center p-6">
      <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }} className="relative w-full max-w-md">
        <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-sky-500/30 via-cyan-400/30 to-blue-600/30 blur-xl"/>
        <div className="relative rounded-3xl bg-white/10 backdrop-blur-2xl ring-1 ring-white/10 p-8">
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="mt-1 text-sky-200/80">Login to continue</p>
          <form className="mt-6 space-y-5">
            <div>
              <label className="text-sm text-sky-200">Email</label>
              <input type="email" className="mt-2 w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 outline-none focus:ring-sky-400/40 placeholder:text-sky-200/50" placeholder="you@ocean.com"/>
            </div>
            <div>
              <label className="text-sm text-sky-200">Password</label>
              <input type="password" className="mt-2 w-full rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 outline-none focus:ring-cyan-400/40 placeholder:text-sky-200/50" placeholder="••••••••"/>
            </div>
            <button className="w-full rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 px-6 py-3 text-white shadow-lg shadow-sky-500/30 transition hover:scale-[1.01]">
              Sign In
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

function AnimatedRoutes(){
  const location = useLocation()
  useEffect(()=>{ window.scrollTo({ top: 0, behavior: 'smooth' }) }, [location.pathname])
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Landing/></PageTransition>} />
          <Route path="/listings" element={<PageTransition><Listings/></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact/></PageTransition>} />
          <Route path="/login" element={<PageTransition><Login/></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default function App(){
  return <AnimatedRoutes />
}
