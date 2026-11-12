'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, Copy, Check, Send } from 'lucide-react'
import { profile } from '@/data'
import { SectionHeading, Reveal, SpotlightCard, Button } from '@/components/ui'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { copyToClipboard } from '@/lib/utils'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const handleCopy = async (text: string, type: 'email' | 'phone') => {
    const success = await copyToClipboard(text)
    if (success) {
      if (type === 'email') {
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2000)
      } else {
        setCopiedPhone(true)
        setTimeout(() => setCopiedPhone(false), 2000)
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')

    try {
      const res = await fetch('https://formspree.io/f/xqpqadae', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name:    formData.name,
          email:   formData.email,
          message: formData.message,
        }),
      })

      if (res.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', message: '' })
        // Reset back to idle after 5 s so the user can send another message
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        setFormStatus('error')
        setTimeout(() => setFormStatus('idle'), 4000)
      }
    } catch {
      setFormStatus('error')
      setTimeout(() => setFormStatus('idle'), 4000)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      copyValue: profile.email,
      copied: copiedEmail,
      onCopy: () => handleCopy(profile.email, 'email'),
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone}`,
      copyValue: profile.phone,
      copied: copiedPhone,
      onCopy: () => handleCopy(profile.phone, 'phone'),
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Farooq-21',
      href: profile.github,
      external: true,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Muhammad Farooq',
      href: profile.linkedin,
      external: true,
    },
  ]

  return (
    <section id="contact" className="section bg-surface/50">
      <div className="container">
        <Reveal>
          <SectionHeading
            title="Get in Touch"
            subtitle="Let's build something amazing together"
            centered
          />
        </Reveal>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info Cards */}
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <Reveal>
                <h3 className="text-2xl font-bold font-heading text-text-primary mb-6">
                  Contact Information
                </h3>
              </Reveal>

              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <motion.div key={info.label} variants={staggerItem}>
                    <SpotlightCard>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-text-muted mb-1">
                              {info.label}
                            </p>
                            <a
                              href={info.href}
                              target={info.external ? '_blank' : undefined}
                              rel={info.external ? 'noopener noreferrer' : undefined}
                              className="text-text-primary hover:text-primary transition-colors font-medium"
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                        {info.onCopy && (
                          <button
                            onClick={info.onCopy}
                            className="p-2 hover:bg-surface rounded-lg transition-colors"
                            aria-label={`Copy ${info.label}`}
                          >
                            {info.copied ? (
                              <Check className="w-5 h-5 text-secondary" />
                            ) : (
                              <Copy className="w-5 h-5 text-text-muted" />
                            )}
                          </button>
                        )}
                      </div>
                    </SpotlightCard>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Contact Form */}
            <Reveal>
              <div className="bg-surface border border-border rounded-xl p-6 md:p-8">
                <h3 className="text-2xl font-bold font-heading text-text-primary mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-secondary mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-secondary mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text-secondary mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={formStatus === 'loading' || formStatus === 'success'}
                  >
                    {formStatus === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12" cy="12" r="10"
                            stroke="currentColor" strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending…
                      </span>
                    ) : formStatus === 'success' ? (
                      <span className="flex items-center gap-2">
                        <Check className="w-5 h-5" />
                        Message Sent!
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>

                  {formStatus === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-sm font-medium"
                      style={{ color: '#19c37d' }}
                    >
                      ✓ Thank you! I&apos;ll get back to you soon.
                    </motion.p>
                  )}

                  {formStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-sm font-medium text-red-400"
                    >
                      ✗ Something went wrong. Please try again or email me directly.
                    </motion.p>
                  )}
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
