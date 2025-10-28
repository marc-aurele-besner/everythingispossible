# 🌙 EverythingIsPossible

**Absurd affirmations, randomly delivered.**

A playful web app that delivers quirky, surreal motivational affirmations via push notifications to brighten your day with unexpected humor and positivity.

## ✨ What is EverythingIsPossible?

EverythingIsPossible is a push-notification affirmations generator that sends absurd motivational slogans at random times. Think "Eat the moon, it's vegan" or "Trust your socks, they know the way." 

The app uses AI to continuously generate fresh, surprising affirmations that spark joy and provide lighthearted mood-boosting nudges throughout your day.

## 🎯 Features

- **🔔 Smart Push Notifications**: Receive surprise affirmations via browser notifications
- **🤖 AI-Generated Content**: Continuously fresh slogans powered by OpenAI API
- **📱 PWA Support**: Install as a native app on any device
- **🌙 Dark Mode**: Sleek, modern dark theme with neon accents
- **📚 Affirmation History**: Browse your last 20 received slogans
- **⚡ Instant Generation**: Manually trigger new affirmations anytime
- **🎲 Random Timing**: Notifications delivered at semi-randomized intervals

## 🚀 Example Affirmations

- "Drink gravity, it's zero calories."
- "Fly through deadlines, literally."
- "Eat the moon, it's vegan."
- "Trust your socks, they know the way."
- "Reality is optional; vibes are forever."

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, TailwindCSS 4
- **Backend**: Vercel serverless functions
- **Notifications**: Web Push API + Service Workers
- **AI**: OpenAI API for slogan generation
- **Deployment**: Vercel with automated cron jobs
- **Styling**: Dark mode with neon accent colors

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/everything-is-possible.git
   cd everything-is-possible
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
   cp .env.local.example .env.local
   ```
   
   Add your configuration:
   ```env
   OPENAI_API_KEY=your_openai_api_key
   CRON_SECRET=your_secret_token
   NEXT_PUBLIC_VAPID_PUBLIC_KEY=your_vapid_public_key
   VAPID_PRIVATE_KEY=your_vapid_private_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── notifications/ # Push notification endpoints
│   │   └── slogans/       # Slogan management
│   ├── components/        # React components
│   ├── lib/              # Utilities and helpers
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── public/               # Static assets
├── workers/              # Service workers for PWA
├── package.json
└── README.md
```

## 🔧 API Endpoints

- `POST /api/notifications/dispatch` - Cron-triggered notification dispatcher
- `GET /api/slogans/recent` - Fetch recent slogans for user
- `POST /api/slogans/generate` - Manual slogan generation
- `POST /api/notifications/subscribe` - Subscribe to push notifications

## 🚀 Deployment

### Vercel Deployment

1. **Connect to Vercel**
   ```bash
   npx vercel
   ```

2. **Configure environment variables** in your Vercel dashboard

3. **Set up cron job** in `vercel.json`:
   ```json
   {
     "crons": [{
       "path": "/api/notifications/dispatch",
       "schedule": "*/15 * * * *"
     }]
   }
   ```

4. **Deploy**
   ```bash
   npx vercel --prod
   ```

## 🎨 Design System

- **Color Palette**: Dark base with neon accents (pink, teal, purple)
- **Typography**: Space Grotesk for headings, Inter for body text
- **Layout**: Minimalist card-based design
- **Theme**: Dark mode by default with bright highlights

## 🔮 Future Enhancements

- [ ] Mobile app wrapper (React Native/Expo)
- [ ] User settings for notification frequency
- [ ] Favorite slogans bookmarking
- [ ] Social sharing functionality
- [ ] Multiple notification styles
- [ ] Slogan categories and themes
- [ ] User-generated affirmations

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💝 Support

If you find this project helpful, consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing code

---

**Remember**: Reality is optional; vibes are forever. ✨

Built with 💜 by [Your Name]