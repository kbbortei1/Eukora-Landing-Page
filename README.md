# Eukora Landing Page

AI-powered exam preparation platform for African students. This is the waitlist landing page for Eukora.

## Tech Stack

- **React 19** + TypeScript
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Supabase** - Waitlist database
- **React Router** - Navigation

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Deployment to Vercel

### Option 1: Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" → Import your GitHub repo
4. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Click "Deploy"

### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Connect Custom Domain

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `eukora.com`)
3. Update DNS records at your domain registrar:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### After Deployment

Update the meta tags in `index.html` with your actual domain:

```html
<meta property="og:url" content="https://yourdomain.com/" />
<meta property="og:image" content="https://yourdomain.com/logo.png" />
<meta property="twitter:url" content="https://yourdomain.com/" />
<meta property="twitter:image" content="https://yourdomain.com/logo.png" />
```

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── CursorEffect.tsx
│   ├── FadeIn.tsx
│   ├── ScrollToTop.tsx
│   └── SuccessAnimation.tsx
├── pages/            # Page components
│   ├── Home.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   └── WhoItsFor.tsx
├── supabase/         # Supabase config & services
│   ├── config.ts
│   └── waitlist.ts
├── hooks/            # Custom hooks
└── App.tsx           # Main app with routing
```

## Features

- ✅ Responsive design (mobile + desktop)
- ✅ Waitlist form with Supabase integration
- ✅ Email validation & duplicate prevention
- ✅ Success animation with confetti
- ✅ Bubble cursor effect (desktop only)
- ✅ Scroll animations
- ✅ SEO meta tags
- ✅ Social media sharing cards (Open Graph, Twitter)
