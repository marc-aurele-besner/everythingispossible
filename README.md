# EverythingIsPossible 🌙✨

A push-notification affirmations generator that sends absurd motivational slogans at random times.

> *"Eat the moon, it's vegan."* — Actual wisdom from our AI

## 🎯 What Is This?

EverythingIsPossible is a playful web app that delivers quirky, surreal motivational affirmations to users via push notifications. Think motivational quotes, but if they were written by a philosopher who got lost in a fever dream.

## ✨ Features

- **Absurd Wisdom**: AI-generated slogans that make no sense but somehow make perfect sense
- **Push Notifications**: Random motivational nudges throughout your day  
- **Dark Theme**: Sleek, modern UI with colorful accent highlights
- **Notification History**: Revisit your favorite nonsensical inspirations
- **Settings**: Customize frequency, appearance, and notification preferences

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd everythingispossible
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: TailwindCSS 4, Custom CSS animations
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)
- **Database**: Neon Postgres (for production)
- **AI**: OpenAI API (for production)

## 📱 Pages

- **Home** (`/`) - Landing page with hero section and notification opt-in
- **Dashboard** (`/dashboard`) - Notification history and manual slogan generation
- **About** (`/about`) - Mission, values, and story behind the app
- **Settings** (`/settings`) - Customize notification preferences and appearance
- **404** (`/not-found`) - Custom 404 page with absurd humor

## 🎭 Sample Slogans

- "Drink gravity, it's zero calories."
- "Trust your socks, they know the way."
- "Reality is optional; vibes are forever."
- "Hug a cloud, it needs emotional support."
- "Whisper secrets to your WiFi router."
- "Negotiate with gravity, demand better terms."

## 🛠 Development

### Project Structure

```
/
├── app/                    # Next.js app router pages
│   ├── dashboard/         # Dashboard page
│   ├── about/            # About page  
│   ├── settings/         # Settings page
│   ├── not-found.tsx     # Custom 404 page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # Reusable React components
│   ├── Navigation.tsx    # Main navigation
│   ├── SloganCard.tsx   # Slogan display component
│   ├── LoadingSpinner.tsx # Loading component
│   └── Button.tsx       # Button component
├── lib/                 # Utilities and data
│   ├── mockData.ts      # Mock slogans and notifications
│   └── utils.ts         # Utility functions
└── public/             # Static assets
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors

- **Primary Pink**: `#ff2d92`
- **Purple**: `#8b5cf6` 
- **Teal**: `#06d6a0`
- **Yellow**: `#ffd60a`
- **Background**: `#0a0a0a`
- **Cards**: `#1a1a1a`
- **Borders**: `#2a2a2a`

### Typography

- **Primary Font**: Geist Sans
- **Mono Font**: Geist Mono
- **Weights**: 300, 400, 500, 600, 700, 900

## 🚧 Current Status

This is the initial frontend implementation with:
- ✅ Complete UI/UX with dark theme and colorful accents
- ✅ All core pages (Home, Dashboard, About, Settings, 404)
- ✅ Mock data and interactive components  
- ✅ Responsive design for mobile and desktop
- ⏳ Backend API endpoints (to be implemented)
- ⏳ Real push notifications (to be implemented)
- ⏳ OpenAI integration (to be implemented)
- ⏳ Database integration (to be implemented)

## 🌟 Philosophy

We believe motivation doesn't have to make sense to make an impact. Sometimes the most profound inspiration comes from embracing the beautifully absurd nature of existence.

*Everything is possible, especially the impossible.*

---

Built with 💜 and a healthy disregard for conventional wisdom.