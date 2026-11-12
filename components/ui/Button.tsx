'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  showArrow?: boolean
  children: React.ReactNode
  className?: string
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'ref'> & { href?: undefined }

type ButtonAsAnchor = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'ref'> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button({
  variant = 'primary',
  size = 'md',
  showArrow = false,
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    'relative inline-flex items-center justify-center gap-2 font-medium rounded-lg overflow-hidden transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'

  const variants: Record<string, string> = {
    primary:   'bg-primary text-white hover:bg-primary-hover border border-transparent',
    secondary: 'bg-transparent text-text-primary border border-border hover:border-border-hover hover:bg-surface',
    ghost:     'bg-transparent text-text-secondary hover:text-text-primary',
  }

  const sizes: Record<string, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const cls = cn(base, variants[variant], sizes[size], className)
  const ease = [0.22, 1, 0.36, 1]

  if (href) {
    const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <motion.a
        href={href}
        className={cls}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease }}
        onClick={anchorProps.onClick}
        target={anchorProps.target}
        rel={anchorProps.rel}
        aria-label={anchorProps['aria-label']}
        download={anchorProps.download}
      >
        {variant === 'primary' && (
          <motion.span
            className="absolute inset-0 bg-primary-hover"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3, ease }}
          />
        )}
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {showArrow && (
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2, ease }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          )}
        </span>
      </motion.a>
    )
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <motion.button
      className={cls}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease }}
      onClick={buttonProps.onClick}
      type={buttonProps.type}
      disabled={buttonProps.disabled}
      aria-label={buttonProps['aria-label']}
    >
      {variant === 'primary' && (
        <motion.span
          className="absolute inset-0 bg-primary-hover"
          initial={{ x: '-100%' }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3, ease }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && (
          <motion.span
            className="inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2, ease }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        )}
      </span>
    </motion.button>
  )
}
