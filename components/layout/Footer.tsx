'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { profile, socialLinks } from '@/data'
import { useReducedMotion } from '@/hooks'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const socialIcons = {
  Github,
  Linkedin,
  Mail,
}

export function Footer() {
  const prefersReducedMotion = useReducedMotion()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <footer className="relative bg-surface border-t border-border mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-heading text-text-primary mb-4">
              {profile.name}
            </h3>
            <p className="text-text-secondary mb-6 max-w-sm">
              Building intelligent applications with curiosity, purpose, and impact.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons]
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target={social.url.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-elevated border border-border hover:border-primary hover:text-primary transition-all duration-200"
                    aria-label={social.label}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold font-heading text-text-primary mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(link.href)
                      if (element) {
                        element.scrollIntoView({
                          behavior: prefersReducedMotion ? 'auto' : 'smooth',
                        })
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold font-heading text-text-primary mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone}`}
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  {profile.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-4">
          <p className="text-sm text-text-muted text-center md:text-left">
            © 2026 {profile.name}. All rights reserved.
          </p>
          <p className="text-sm text-text-muted">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-hover transition-colors z-40 no-print"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}
