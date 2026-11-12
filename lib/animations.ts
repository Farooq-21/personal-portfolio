import { Variants } from 'framer-motion'

/**
 * Standard easing function for all animations
 */
export const ease = [0.22, 1, 0.36, 1]

/**
 * Fade in animation variant
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease,
    },
  },
}

/**
 * Slide up animation variant
 */
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease,
    },
  },
}

/**
 * Slide down animation variant
 */
export const slideDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease,
    },
  },
}

/**
 * Scale in animation variant
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease,
    },
  },
}

/**
 * Stagger container for child animations
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

/**
 * Stagger item for use within stagger container
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease,
    },
  },
}

/**
 * Hero stagger container with longer delay
 */
export const heroStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

/**
 * Draw line animation (for underlines)
 */
export const drawLine: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.6,
      ease,
    },
  },
}

/**
 * Card hover animation
 */
export const cardHover = {
  rest: {
    y: 0,
    transition: {
      duration: 0.2,
      ease,
    },
  },
  hover: {
    y: -6,
    transition: {
      duration: 0.2,
      ease,
    },
  },
}
