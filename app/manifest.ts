import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Muhammad Farooq - Portfolio',
    short_name: 'MF Portfolio',
    description:
      'Muhammad Farooq - Agentic AI Developer and Computer Science Student building intelligent applications',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0D12',
    theme_color: '#3B82F6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
