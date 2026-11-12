'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { useActiveSection, useReducedMotion } from '@/hooks'

const navLinks = [
  { id: 'home',       label: 'Home',       href: '#home' },
  { id: 'about',      label: 'About',      href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'skills',     label: 'Skills',     href: '#skills' },
  { id: 'projects',   label: 'Projects',   href: '#projects' },
  { id: 'education',  label: 'Education',  href: '#education' },
  { id: 'contact',    label: 'Contact',    href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled]         = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme }             = useTheme()
  const [mounted, setMounted]           = useState(false)
  const activeSection                   = useActiveSection(navLinks.map((l) => l.id))
  const prefersReducedMotion            = useReducedMotion()

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <>
      {/* ── Top bar ── */}
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'glass shadow-lg' : 'bg-transparent'
        )}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
              className="text-xl lg:text-2xl font-bold font-heading text-white hover:text-primary transition-colors"
            >
              MF
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                      className={cn(
                        'relative text-sm font-medium transition-colors duration-200 py-1',
                        activeSection === link.id
                          ? 'text-white'
                          : 'text-[#9aa3b2] hover:text-white'
                      )}
                    >
                      {link.label}
                      {activeSection === link.id && (
                        <motion.span
                          className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#3b82f6] rounded-full"
                          layoutId="nav-underline"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Theme toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-lg text-[#9aa3b2] hover:text-white hover:bg-white/10 transition-all"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}

              {/* Hire me CTA */}
              <button
                onClick={() => scrollTo('#contact')}
                className="px-5 py-2 text-sm font-semibold rounded-lg bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-colors"
              >
                Hire me
              </button>
            </nav>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 lg:hidden">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-lg text-[#9aa3b2] hover:text-white hover:bg-white/10 transition-all"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#9aa3b2] hover:text-white hover:bg-white/10 transition-all"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* ── Mobile slide-in menu ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-72 z-50 lg:hidden"
              style={{ background: 'var(--surface)', borderLeft: '1px solid var(--border)' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              {/* Close button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-[#9aa3b2] hover:text-white hover:bg-white/10 transition-all"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="px-6 pb-8">
                <ul className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                        className={cn(
                          'block text-base font-medium py-3 px-3 rounded-lg transition-colors',
                          activeSection === link.id
                            ? 'text-white bg-white/10'
                            : 'text-[#9aa3b2] hover:text-white hover:bg-white/5'
                        )}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button
                    onClick={() => scrollTo('#contact')}
                    className="w-full py-3 text-sm font-semibold rounded-lg bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-colors"
                  >
                    Get in Touch
                  </button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
