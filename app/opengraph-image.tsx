import { ImageResponse } from 'next/og'
import { profile } from '@/data'

// Route segment config
export const runtime = 'edge'
export const alt = 'Muhammad Farooq - Agentic AI Developer & CS Student'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0B0D12',
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(25, 195, 125, 0.1) 0%, transparent 50%)',
        }}
      >
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#E8EAF0',
              marginBottom: 24,
              letterSpacing: '-0.02em',
            }}
          >
            {profile.name}
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: '#9AA3B2',
              marginBottom: 40,
              textAlign: 'center',
              maxWidth: 900,
            }}
          >
            Agentic AI Developer & CS Student
          </div>

          {/* Status Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 24px',
              backgroundColor: 'rgba(25, 195, 125, 0.1)',
              border: '2px solid rgba(25, 195, 125, 0.2)',
              borderRadius: 999,
              color: '#19C37D',
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: '#19C37D',
              }}
            />
            Currently working at IRAB Technologies
          </div>

          {/* Tags */}
          <div
            style={{
              display: 'flex',
              gap: 16,
              marginTop: 48,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {['Generative AI', 'Agentic AI', 'LangChain', 'Python'].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    padding: '8px 20px',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    borderRadius: 999,
                    color: '#3B82F6',
                    fontSize: 18,
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, #3B82F6 0%, #19C37D 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
