# Quick Customization Guide

This guide provides quick reference for the most common customizations you'll want to make to personalize this portfolio.

## 🎯 Essential Customizations

### 1. Update Personal Info (5 minutes)

**File:** `data/profile.ts`

```typescript
export const profile: Profile = {
  name: 'Your Full Name',
  title: 'Your Professional Title | Current Role',
  email: 'your.email@example.com',
  phone: 'Your Phone Number',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  heroHook: 'Your compelling introduction that appears on the hero section...',
  about: 'Your about text that appears in the About section...',
  currentStatus: 'Currently working at Your Company',
}
```

### 2. Add Your Experience (3 minutes)

**File:** `data/experience.ts`

```typescript
export const experiences: Experience[] = [
  {
    id: 'unique-id',
    title: 'Your Job Title',
    company: 'Company Name',
    location: 'City, Country', // Optional
    startDate: '2024-01', // Format: YYYY-MM
    endDate: 'Present', // Or 'YYYY-MM'
    isCurrent: true, // true if still working here
    description: [
      'Achievement or responsibility 1',
      'Achievement or responsibility 2',
      'Achievement or responsibility 3',
    ],
  },
  // Add more experiences...
]
```

### 3. Update Skills (3 minutes)

**File:** `data/skills.ts`

```typescript
export const skillCategories: SkillCategory[] = [
  {
    id: 'category-id', // lowercase-with-dashes
    name: 'Category Display Name',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  },
  // Add more categories...
]
```

### 4. Add Your Projects (5 minutes)

**File:** `data/projects.ts`

```typescript
export const projects: Project[] = [
  {
    id: 'project-slug',
    title: 'Project Name',
    description: 'Brief 1-2 sentence description of what this project does',
    tags: ['Technology 1', 'Technology 2', 'Technology 3'],
    github: 'https://github.com/yourusername/project-repo',
    featured: true, // true for top projects, false for others
    category: 'ai-agents', // Options: 'ai-agents', 'systems', 'backend', 'all'
  },
  // Add more projects...
]
```

**Project Categories:**
- `'ai-agents'` - AI and agent-based projects
- `'systems'` - System programming, C++, low-level projects
- `'backend'` - Backend APIs and services
- `'all'` - Will appear in all categories

### 5. Update Education (2 minutes)

**File:** `data/education.ts`

```typescript
export const education: Education[] = [
  {
    id: 'edu-id',
    degree: 'BS Computer Science', // Or your degree
    institution: 'Your University Name',
    location: 'City, Country',
    startDate: '2022-09',
    endDate: 'Present', // Or graduation date
    isCurrent: true,
    currentSemester: '5th Semester', // Optional, only if current
  },
]
```

### 6. Set Environment Variables (1 minute)

**File:** `.env`

```env
# Required for production
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app

# Optional: Contact Form (if using)
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your.email@example.com
```

## 🎨 Visual Customizations

### Change Colors

**File:** `app/globals.css`

Find the `:root` section and update:

```css
:root {
  /* Main Colors */
  --primary: #3b82f6;        /* Change to your accent color */
  --secondary: #19c37d;      /* Change to your secondary accent */
  
  /* Dark Theme Backgrounds */
  --background: #0b0d12;     /* Main background */
  --surface: #12151c;        /* Card background */
  --elevated: #181c25;       /* Elevated elements */
}
```

**Quick Color Presets:**

Purple theme:
```css
--primary: #8b5cf6;
--secondary: #ec4899;
```

Green theme:
```css
--primary: #10b981;
--secondary: #3b82f6;
```

Orange theme:
```css
--primary: #f97316;
--secondary: #eab308;
```

### Change Fonts

**File:** `app/layout.tsx`

```typescript
// Import different Google Fonts
import { Your_Heading_Font, Your_Body_Font } from 'next/font/google'

const headingFont = Your_Heading_Font({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const bodyFont = Your_Body_Font({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})
```

Popular combinations:
- **Heading:** Montserrat, Poppins, Raleway, Outfit
- **Body:** Inter, Open Sans, Roboto, Work Sans

### Add Your Photo/Avatar

**Option 1: Replace Logo in Navbar**

**File:** `components/layout/Navbar.tsx`

Find the logo section and replace with:

```tsx
import Image from 'next/image'

// Replace the "MF" text with:
<Image
  src="/your-photo.jpg"
  alt="Your Name"
  width={40}
  height={40}
  className="rounded-full border-2 border-border"
/>
```

**Option 2: Add to Hero Section**

**File:** `components/sections/Hero.tsx`

Add before the name:

```tsx
<motion.div variants={staggerItem} className="mb-6">
  <Image
    src="/your-photo.jpg"
    alt="Your Name"
    width={150}
    height={150}
    className="rounded-full mx-auto border-4 border-border"
  />
</motion.div>
```

### Add Resume Download

**File:** `components/sections/Hero.tsx` or `components/layout/Navbar.tsx`

```tsx
<Button
  variant="secondary"
  size="lg"
  href="/resume.pdf"
  download
>
  Download Resume
</Button>
```

Don't forget to add `resume.pdf` to the `public/` folder.

## 🔧 Feature Toggles

### Disable Custom Cursor

**File:** `app/page.tsx`

Remove or comment out:
```tsx
// <CustomCursor />
```

### Disable Smooth Scrolling

**File:** `app/page.tsx`

Replace `<SmoothScroll>` wrapper with `<>`:

```tsx
export default function Home() {
  return (
    <>
      {/* ... rest of components */}
    </>
  )
}
```

### Disable Command Palette

**File:** `app/page.tsx`

Remove or comment out:
```tsx
// <CommandPalette />
```

### Disable Dark Mode Toggle

**File:** `components/layout/Navbar.tsx`

Remove the theme toggle button (search for `toggleTheme`)

## 📧 Contact Form Setup

### Option 1: Using Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env`:
   ```env
   RESEND_API_KEY=re_your_api_key
   CONTACT_EMAIL=your.email@example.com
   ```
4. Create `app/api/contact/route.ts`:
   ```typescript
   import { Resend } from 'resend'
   
   const resend = new Resend(process.env.RESEND_API_KEY)
   
   export async function POST(req: Request) {
     const { name, email, message } = await req.json()
     
     await resend.emails.send({
       from: 'contact@yourdomain.com',
       to: process.env.CONTACT_EMAIL!,
       subject: `Portfolio Contact: ${name}`,
       text: `From: ${name} (${email})\n\n${message}`,
     })
     
     return Response.json({ success: true })
   }
   ```

### Option 2: Using Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get form ID
3. Add to `.env`:
   ```env
   NEXT_PUBLIC_FORMSPREE_FORM_ID=your_form_id
   ```
4. Update form action in `components/sections/Contact.tsx`

### Option 3: Mailto Fallback (No Backend)

The contact form already has a fallback - it will use `mailto:` if no backend is configured.

## 🚀 Deployment Checklist

Before deploying, make sure to:

- [ ] Update all personal information in `data/` files
- [ ] Add your projects to `data/projects.ts`
- [ ] Update experience in `data/experience.ts`
- [ ] Add your photo (optional)
- [ ] Add resume PDF to `public/` (optional)
- [ ] Set `NEXT_PUBLIC_SITE_URL` in environment variables
- [ ] Test dark and light modes
- [ ] Test on mobile devices
- [ ] Check accessibility with keyboard navigation
- [ ] Run `npm run build` locally to check for errors

## 🆘 Common Issues

### Issue: Images not loading
**Solution:** Make sure images are in `public/` folder and use `/image.jpg` path

### Issue: Fonts not working
**Solution:** Check Google Fonts import and variable names match

### Issue: Dark mode not working
**Solution:** Check `next-themes` provider in `app/layout.tsx`

### Issue: Animations not smooth
**Solution:** Check browser doesn't have "prefers-reduced-motion" enabled

### Issue: Custom cursor not showing
**Solution:** Custom cursor only works on desktop with mouse (not touch devices)

## 📚 Need More Help?

- Check the main [README.md](./README.md) for detailed documentation
- Review the [Next.js documentation](https://nextjs.org/docs)
- Check [Tailwind CSS docs](https://tailwindcss.com/docs)
- See [Motion (Framer Motion) docs](https://motion.dev/docs)

---

Happy customizing! 🎉
