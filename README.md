# Muhammad Farooq - Portfolio

A production-ready, premium personal portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Motion (Framer Motion). Features smooth animations, custom cursor, dark/light themes, and full accessibility support.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### Design & UX
- 🎨 **Clean Technical Dark Mode** - Premium editorial design with generous whitespace
- 🌓 **Theme Toggle** - Dark/light mode with system preference detection
- 🎭 **Custom Cursor** - Adaptive cursor with dot and ring (desktop only)
- ✨ **Smooth Animations** - Motion-powered entrance, scroll-reveal, and hover effects
- 🔄 **Lenis Smooth Scroll** - Buttery smooth scrolling experience
- 📊 **Scroll Progress Bar** - Visual indicator at the top of the page
- ⌨️ **Command Palette** - Quick navigation with Cmd/Ctrl+K
- 🎯 **Bento Grid Layouts** - Modern card-based sections

### Sections
- 🏠 **Hero** - Animated role typewriter, gradient mesh background, status badge
- 👤 **About** - Profile with highlight cards and career focus
- 💼 **Experience** - Timeline layout with current role badge
- 🛠️ **Skills** - Categorized skills with filter animations
- 🚀 **Projects** - Featured and more projects with 3D tilt cards
- 🎓 **Education** - Current studies and academic info
- 📧 **Contact** - Working form with copy-to-clipboard and social links

### Technical
- ⚡ **Next.js 16 App Router** - Latest features with Turbopack
- 🔒 **TypeScript Strict Mode** - Full type safety
- 🎨 **Tailwind CSS v4** - Design tokens with CSS variables
- ♿ **WCAG AA Compliant** - Full keyboard navigation and screen reader support
- 🌐 **SEO Optimized** - Sitemap, robots.txt, Open Graph, JSON-LD
- 📱 **Fully Responsive** - Mobile-first design (320px to 1920px+)
- 🎯 **Performance** - Optimized for Lighthouse 90+ scores
- ♿ **Accessibility First** - Respects prefers-reduced-motion

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17.0 or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-2
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your configuration:
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Set Environment Variables**
   In your Vercel dashboard, add:
   - `NEXT_PUBLIC_SITE_URL` - Your production URL

### Deploy to Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- **Netlify** - Add build command: `npm run build` and publish directory: `.next`
- **Cloudflare Pages** - Connect repository and use Next.js preset
- **AWS Amplify** - Use Next.js SSR deployment
- **Railway** - Connect GitHub and deploy automatically

## 🎨 Customization Guide

### 1. Personal Information

Edit `data/profile.ts`:
```typescript
export const profile: Profile = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  phone: 'Your Phone',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  heroHook: 'Your compelling introduction...',
  about: 'Your about text...',
  currentStatus: 'Your current status',
}
```

### 2. Experience

Edit `data/experience.ts`:
```typescript
export const experiences: Experience[] = [
  {
    id: 'unique-id',
    title: 'Job Title',
    company: 'Company Name',
    startDate: '2024-01',
    endDate: 'Present',
    isCurrent: true,
    description: ['Description point 1', 'Point 2'],
  },
]
```

### 3. Skills

Edit `data/skills.ts`:
```typescript
export const skillCategories: SkillCategory[] = [
  {
    id: 'category-id',
    name: 'Category Name',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  },
]
```

### 4. Projects

Edit `data/projects.ts`:
```typescript
export const projects: Project[] = [
  {
    id: 'project-id',
    title: 'Project Title',
    description: 'Project description',
    tags: ['Tag1', 'Tag2'],
    github: 'https://github.com/user/repo',
    featured: true,
    category: 'ai-agents', // or 'systems', 'backend'
  },
]
```

### 5. Education

Edit `data/education.ts`:
```typescript
export const education: Education[] = [
  {
    id: 'edu-id',
    degree: 'Degree Name',
    institution: 'University Name',
    location: 'City, Country',
    startDate: '2022-09',
    endDate: 'Present',
    isCurrent: true,
    currentSemester: '5th Semester',
  },
]
```

### 6. Colors & Theme

Edit `app/globals.css` to customize the color scheme:
```css
:root {
  /* Dark Theme (Default) */
  --background: #0b0d12;
  --surface: #12151c;
  --primary: #3b82f6;
  --secondary: #19c37d;
  /* ... */
}

.light {
  /* Light Theme */
  --background: #ffffff;
  --surface: #f8f9fa;
  /* ... */
}
```

Or edit `tailwind.config.ts` for Tailwind color tokens.

### 7. Fonts

The portfolio uses:
- **Space Grotesk** (Headings) - `--font-space-grotesk`
- **Inter** (Body) - `--font-inter`
- **JetBrains Mono** (Code/Labels) - `--font-jetbrains-mono`

Change fonts in `app/layout.tsx`:
```typescript
import { Your_Font } from 'next/font/google'

const yourFont = Your_Font({
  subsets: ['latin'],
  variable: '--font-your-font',
  display: 'swap',
})
```

### 8. Add Your Photo

Replace the initials in the navbar with your photo:

1. Add your image to `public/`
2. Edit `components/layout/Navbar.tsx`:
```tsx
import Image from 'next/image'

// Replace the "MF" logo with:
<Image
  src="/your-photo.jpg"
  alt="Your Name"
  width={40}
  height={40}
  className="rounded-full"
/>
```

### 9. Resume/CV Download

Add a resume download button:

1. Place your resume PDF in `public/resume.pdf`
2. Add to Navbar CTAs or Hero section:
```tsx
<Button
  variant="secondary"
  href="/resume.pdf"
  download
>
  Download Resume
</Button>
```

## 🛠️ Project Structure

```
portfolio-2/
├── app/
│   ├── globals.css          # Global styles and design tokens
│   ├── layout.tsx           # Root layout with fonts and providers
│   ├── page.tsx             # Main page with all sections
│   ├── sitemap.ts           # Sitemap generation
│   ├── robots.ts            # Robots.txt
│   ├── manifest.ts          # PWA manifest
│   └── opengraph-image.tsx  # Dynamic OG image
├── components/
│   ├── layout/              # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── SmoothScroll.tsx
│   │   └── CommandPalette.tsx
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   └── ui/                  # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── SpotlightCard.tsx
│       ├── TiltCard.tsx
│       ├── Badge.tsx
│       ├── Reveal.tsx
│       ├── SectionHeading.tsx
│       └── MagneticButton.tsx
├── data/                    # Typed content data
│   ├── types.ts
│   ├── profile.ts
│   ├── experience.ts
│   ├── skills.ts
│   ├── projects.ts
│   └── education.ts
├── hooks/                   # Custom React hooks
│   ├── useMousePosition.ts
│   ├── useMediaQuery.ts
│   ├── useReducedMotion.ts
│   ├── useScrollProgress.ts
│   └── useActiveSection.ts
├── lib/                     # Utilities
│   ├── utils.ts             # Helper functions
│   └── animations.ts        # Animation variants
└── public/                  # Static assets
    └── favicon.ico
```

## 📝 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🔧 Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript 5.6 (Strict Mode)
- **Styling:** Tailwind CSS v4 with CSS Variables
- **Animations:** Motion (Framer Motion) 10.18
- **Smooth Scroll:** Lenis 1.1
- **Theme:** next-themes 0.3
- **Icons:** Lucide React + react-icons
- **Analytics:** Vercel Analytics
- **Fonts:** Google Fonts (Inter, Space Grotesk, JetBrains Mono)

## ⚡ Performance

- Server Components by default
- Lazy loading for heavy client components
- Optimized images with next/image (AVIF/WebP)
- Minimal JavaScript bundle
- CLS < 0.1 (no layout shift)
- Lighthouse 90+ on all metrics

## ♿ Accessibility

- Semantic HTML (header, nav, main, section, footer)
- ARIA labels on icon-only buttons
- Keyboard navigation (Tab, Enter, Escape, Arrow keys)
- Skip-to-content link
- Focus visible states
- Respects prefers-reduced-motion
- WCAG AA contrast ratios (4.5:1 minimum)
- Screen reader friendly

## 🌐 SEO

- Metadata API with title templates
- Open Graph and Twitter Card tags
- Sitemap.xml generation
- Robots.txt
- Canonical URLs
- JSON-LD structured data (Person schema)
- Dynamic OG image generation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Muhammad Farooq**
- Email: farooq.cs@outlook.com
- GitHub: [@Farooq-21](https://github.com/Farooq-21)
- LinkedIn: [Muhammad Farooq](https://www.linkedin.com/in/muhammad-farooq2)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
