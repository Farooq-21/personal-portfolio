'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'

const commands = [
  { id: 'home', label: 'Home', section: 'Navigation', href: '#home' },
  { id: 'about', label: 'About', section: 'Navigation', href: '#about' },
  { id: 'experience', label: 'Experience', section: 'Navigation', href: '#experience' },
  { id: 'skills', label: 'Skills', section: 'Navigation', href: '#skills' },
  { id: 'projects', label: 'Projects', section: 'Navigation', href: '#projects' },
  { id: 'education', label: 'Education', section: 'Navigation', href: '#education' },
  { id: 'contact', label: 'Contact', section: 'Navigation', href: '#contact' },
]

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open/close with Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
        setSearch('')
        setSelectedIndex(0)
      }

      if (!isOpen) return

      // Close with Escape
      if (e.key === 'Escape') {
        setIsOpen(false)
        setSearch('')
        setSelectedIndex(0)
      }

      // Navigate with arrow keys
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) =>
          prev < filteredCommands.length - 1 ? prev + 1 : 0
        )
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredCommands.length - 1
        )
      }

      // Execute command with Enter
      if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
        e.preventDefault()
        executeCommand(filteredCommands[selectedIndex].href)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filteredCommands, selectedIndex])

  const executeCommand = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
    setSearch('')
    setSelectedIndex(0)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Command Palette */}
          <motion.div
            className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 mx-4"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-elevated border border-border rounded-xl shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                <Search className="w-5 h-5 text-text-muted flex-shrink-0" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value)
                    setSelectedIndex(0)
                  }}
                  placeholder="Search sections..."
                  className="flex-1 bg-transparent text-text-primary placeholder:text-text-muted outline-none"
                  autoFocus
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-surface rounded transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-text-muted" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto">
                {filteredCommands.length > 0 ? (
                  <div className="p-2">
                    {filteredCommands.map((cmd, index) => (
                      <button
                        key={cmd.id}
                        onClick={() => executeCommand(cmd.href)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors ${
                          index === selectedIndex
                            ? 'bg-surface text-text-primary'
                            : 'text-text-secondary hover:bg-surface hover:text-text-primary'
                        }`}
                        onMouseEnter={() => setSelectedIndex(index)}
                      >
                        <div>
                          <div className="font-medium">{cmd.label}</div>
                          <div className="text-xs text-text-muted">
                            {cmd.section}
                          </div>
                        </div>
                        {index === selectedIndex && (
                          <kbd className="px-2 py-1 text-xs bg-background border border-border rounded">
                            ↵
                          </kbd>
                        )}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-8 text-center text-text-muted">
                    No results found
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-2 border-t border-border bg-surface/50 text-xs text-text-muted">
                <div className="flex items-center gap-4">
                  <span>
                    <kbd className="px-1.5 py-0.5 bg-background border border-border rounded mr-1">
                      ↑↓
                    </kbd>
                    Navigate
                  </span>
                  <span>
                    <kbd className="px-1.5 py-0.5 bg-background border border-border rounded mr-1">
                      ↵
                    </kbd>
                    Select
                  </span>
                </div>
                <span>
                  <kbd className="px-1.5 py-0.5 bg-background border border-border rounded mr-1">
                    ESC
                  </kbd>
                  Close
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
